import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import InvoicesList from './components/InvoicesList'
import InvoiceShow from './components/InvoiceShow'

import GettingStarted from './GettingStarted'

function App() {
  return (
    <div className="px-5">
      <GettingStarted />
      <Router>
        <Switch>
          <Route path="/invoice/:id" component={InvoiceShow} />
          <Route path="/" component={InvoicesList} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
