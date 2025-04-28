import { useApi } from 'api'
import TableHeader from './TableHeader'
import TableBody from './TableBody'
import { useQuery } from '@tanstack/react-query'

const InvoicesList = (): React.ReactElement => {
  const api = useApi()

  const {data} = useQuery({
    queryKey: ['invoices'],
    queryFn: async () => (await api.getInvoices()).data,
  })
 
  return (
    <table className="table table-bordered table-striped">
      <TableHeader />
      <TableBody invoicesList={data?.invoices ?? []} />
    </table>
  )
}

export default InvoicesList
