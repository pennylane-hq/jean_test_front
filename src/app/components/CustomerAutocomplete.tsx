import { useCallback } from 'react'
import { AsyncPaginate } from 'react-select-async-paginate'

import { Customer } from 'types'
import { useApi } from 'api'

interface Props {
  value?: Customer
  onChange: (Customer: Customer) => void
}

const defaultAdditional = { page: 1 }

const getCustomerLabel = (customer: Customer) => {
  return `${customer.first_name} ${customer.last_name}`
}

const CustomerAutocomplete = ({ value, onChange }: Props) => {
  const api = useApi()

  const loadOptions = useCallback(
    async (search, loadedOptions, { page }) => {
      const { data } = await api.getSearchCustomers({
        query: search,
        per_page: 10,
        page,
      })

      return {
        options: data.customers,
        hasMore: data.pagination.page < data.pagination.total_pages,
        additional: {
          page: page + 1,
        },
      }
    },
    [api]
  )

  return (
    <AsyncPaginate
      placeholder="Search a customer"
      getOptionLabel={getCustomerLabel}
      additional={defaultAdditional}
      value={value}
      onChange={onChange}
      loadOptions={loadOptions}
    />
  )
}

export default CustomerAutocomplete
