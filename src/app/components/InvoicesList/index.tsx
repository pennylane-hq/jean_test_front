import { useApi } from 'api'
import TableHeader from './TableHeader'
import TableBody from './TableBody'
import Pagination from './Pagination'
import { keepPreviousData, useQuery } from '@tanstack/react-query'
import { useSearchParams } from 'react-router-dom'
import { ITEMS_PER_PAGE } from './constants'
import TableLoadingBody from './TableLoadingBody'

const InvoicesList = (): React.ReactElement => {
  const api = useApi()
  const [searchParams, setSearchParams] = useSearchParams()
  const currentPage = Number(searchParams.get('page')) ?? 1

  const { data, isPending } = useQuery({
    queryKey: ['invoices', currentPage, ITEMS_PER_PAGE],
    queryFn: async () => (await api.getInvoices({ 
      page: currentPage - 1,
      per_page: ITEMS_PER_PAGE 
    })).data,
    placeholderData: keepPreviousData
  })

  const handlePageChange = (page: number) => {
    setSearchParams({ page: page.toString() })
  }
 
  return (
    <div>
      <table className="table table-bordered table-striped">
        <TableHeader />
        {isPending ? (
          <TableLoadingBody />
        ) : (
          <TableBody invoicesList={data?.invoices ?? []} />
        )}
        
      </table>
      {data?.pagination && (
        <Pagination
          currentPage={currentPage}
          totalPages={data.pagination.total_pages}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  )
}

export default InvoicesList
