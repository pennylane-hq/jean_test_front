import { useState } from 'react'

import { Customer, Product } from 'types'

import CustomerAutocomplete from 'app/components/CustomerAutocomplete'
import ProductAutocomplete from 'app/components/ProductAutocomplete'

const GettingStarted = () => {
  const [customer, setCustomer] = useState<Customer | null>(null)
  const [product, setProduct] = useState<Product | null>(null)

  return (
    <>
      <div className="alert alert-info mt-5 mb-3">
        <p>
          This is the initial application we've set up for you to start the
          project.
        </p>

        <p>It contains notably:</p>
        <ul>
          <li>
            A page to list all invoices, in{' '}
            <code>app/components/InvoicesList/index.tsx</code>
          </li>
          <li>
            A page to show an invoice{' '}
            <code>app/components/InvoicesShow/index.tsx</code>.
          </li>
          <li>
            <code>react-router</code> to handle navigating between those 2 pages
            (feel free to add more to suit your needs)
          </li>
        </ul>

        <p>
          The project is build with TypeScript at the moment, if you're not
          familiar with typescript and don't want to use it for the test, you
          can opt-out by running <code>yarn eject_ts</code>.
        </p>

        <p>
          You should read the README in this repo carefully if you haven't
          already, it contains useful information for interacting with the API.
        </p>

        <p>
          We've also implemented two components for you : the{' '}
          <code>ProductAutocomplete</code> and <code>CustomerAutocomplete</code>{' '}
          that you can try out below.
        </p>
      </div>
      <div className="mb-3">
        <CustomerAutocomplete value={customer} onChange={setCustomer} />
      </div>
      <div className="mb-5">
        <ProductAutocomplete value={product} onChange={setProduct} />
      </div>
    </>
  )
}

export default GettingStarted
