import { Invoice } from "types"

export interface ColumnDefinition {
  key: string
  header: string
  accessor: (invoice: Invoice) => string | number | boolean
  formatter?: (value: unknown) => string
}

export const tableColumns: ColumnDefinition[] = [
  {
    key: 'id',
    header: 'Id',
    accessor: (invoice) => invoice.id
  },
  {
    key: 'customer',
    header: 'Customer',
    accessor: (invoice) => `${invoice.customer?.first_name ?? ''} ${invoice.customer?.last_name ?? ''}`.trim()
  },
  {
    key: 'address',
    header: 'Address',
    accessor: (invoice) => `${invoice.customer?.address ?? ''}, ${invoice.customer?.zip_code ?? ''} ${invoice.customer?.city ?? ''}`.trim()
  },
  {
    key: 'total',
    header: 'Total',
    accessor: (invoice) => invoice.total ?? ''
  },
  {
    key: 'tax',
    header: 'Tax',
    accessor: (invoice) => invoice.tax ?? ''
  },
  {
    key: 'finalized',
    header: 'Finalized',
    accessor: (invoice) => invoice.finalized,
    formatter: (value) => value ? 'Yes' : 'No'
  },
  {
    key: 'paid',
    header: 'Paid',
    accessor: (invoice) => invoice.paid,
    formatter: (value) => value ? 'Yes' : 'No'
  },
  {
    key: 'date',
    header: 'Date',
    accessor: (invoice) => invoice.date ?? ''
  },
  {
    key: 'deadline',
    header: 'Deadline',
    accessor: (invoice) => invoice.deadline ?? ''
  }
] 