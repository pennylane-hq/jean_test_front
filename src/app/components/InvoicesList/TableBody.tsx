import { Invoice } from "types"
import { tableColumns } from "./structure"

interface TableBodyProps {
  invoicesList: Invoice[]
}

const TableBody = ({ invoicesList }: TableBodyProps) => {
  return <tbody>
    {invoicesList.map((invoice) => (
      <tr key={invoice.id}>
        {tableColumns.map((column) => {
          const value = column.accessor(invoice)
          const formattedValue = column.formatter ? column.formatter(value) : value
          return <td key={column.key}>{formattedValue}</td>
        })}
      </tr>
    ))}
  </tbody>
}

export default TableBody
