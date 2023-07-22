import { useCallback } from 'react'
import { AsyncPaginate, LoadOptions } from 'react-select-async-paginate'

import { Product } from 'types'
import { useApi } from 'api'
import { GroupBase } from 'react-select'

interface Props {
  value: Product | null
  onChange: (product: Product | null) => void
}

const defaultAdditional = { page: 1 }

const ProductAutocomplete = ({ value, onChange }: Props) => {
  const api = useApi()

  const loadOptions: LoadOptions<Product, GroupBase<Product>, {page: number}> = useCallback(
    async (search, loadedOptions, additional) => {
      const page = additional?.page ?? 1
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
