import { useApi } from "api";
import { Invoice } from "types";
import { useEffect, useCallback, useState, useMemo } from "react";
import { useTable, Column } from "react-table";

const InvoicesList = (): React.ReactElement => {
  const api = useApi();

  const [invoicesList, setInvoicesList] = useState<Invoice[]>([]);

  const fetchInvoices = useCallback(async () => {
    const { data } = await api.getInvoices();
    setInvoicesList(data.invoices);
  }, [api]);

  useEffect(() => {
    fetchInvoices();
  }, [fetchInvoices]);

  const columns: Column<Invoice>[] = useMemo(
    () => [
      {
        Header: "Id",
        accessor: "id",
      },
      {
        Header: "Total",
        accessor: "total",
      },
      {
        Header: "Tax",
        accessor: "tax",
      },
      {
        Header: "Finalized",
        accessor: "finalized",
        Cell: (cell) => (cell.row.original.finalized ? "Yes" : "No"),
      },
      {
        Header: "Paid",
        accessor: "paid",
        Cell: (cell) => (cell.row.original.paid ? "Yes" : "No"),
      },
      {
        Header: "Date",
        accessor: "date",
      },
      {
        Header: "Deadline",
        accessor: "deadline",
      },
    ],
    [],
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable<Invoice>({ columns, data: invoicesList });

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => (
                <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default InvoicesList;
