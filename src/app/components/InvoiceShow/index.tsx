import { useState, useEffect } from 'react'
import { useParams } from 'react-router'

import { useApi } from 'api'
import { Invoice } from 'types'

const InvoiceShow = () => {
  const { id } = useParams<{ id: string }>()
  const api = useApi()
  const [invoice, setInvoice] = useState<Invoice>()

  useEffect(() => {
    api.getInvoice(id).then(({ data }) => {
      setInvoice(data)
    })
  }, [api, id])

  return (
    <div>
      <pre>{JSON.stringify(invoice ?? '', null, 2)}</pre>
    </div>
  )
}

export default InvoiceShow
