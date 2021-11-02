import { useCallback } from 'react'
import { AsyncPaginate } from 'react-select-async-paginate'

import { Product } from 'types'
import { useApi } from 'api'

interface Props {
  value?: Product
  onChange: (product: Product) => void
}

const defaultAdditional = { page: 1 }

const ProductAutocomplete = ({ value, onChange }: Props) => {
  const api = useApi()

  const loadOptions = useCallback(
    async (search, loadedOptions, { page }) => {
      const { data } = await api.getSearchProducts({
        query: search,
        per_page: 10,
        page,
      })

      return {
        options: data.products,
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
      placeholder="Search a product"
      additional={defaultAdditional}
      value={value}
      onChange={onChange}
      loadOptions={loadOptions}
    />
  )
}

export default ProductAutocomplete
