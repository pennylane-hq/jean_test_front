import { Invoice } from "types"

interface TableBodyProps {
  invoicesList: Invoice[]
}

const TableBody = ({ invoicesList }: TableBodyProps) => {
  return <tbody>
    {invoicesList.map((invoice) => (
      <tr key={invoice.id}>
        <td>{invoice.id}</td>
        <td>
          {invoice.customer?.first_name} {invoice.customer?.last_name}
        </td>
        <td>
          {invoice.customer?.address}, {invoice.customer?.zip_code}{' '}
          {invoice.customer?.city}
        </td>
        <td>{invoice.total}</td>
        <td>{invoice.tax}</td>
        <td>{invoice.finalized ? 'Yes' : 'No'}</td>
        <td>{invoice.paid ? 'Yes' : 'No'}</td>
        <td>{invoice.date}</td>
        <td>{invoice.deadline}</td>
      </tr>
    ))}
  </tbody>
}

export default TableBody
