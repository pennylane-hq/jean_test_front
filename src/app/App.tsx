import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import InvoicesList from './components/InvoicesList'
import InvoiceShow from './components/InvoiceShow'

import GettingStarted from './GettingStarted'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="px-5">
        <GettingStarted />
        <Router>
          <Routes>
            <Route path="/invoice/:id" Component={InvoiceShow} />
            <Route path="/" Component={InvoicesList} />
          </Routes>
        </Router>
      </div>
    </QueryClientProvider>
  )
}

export default App
