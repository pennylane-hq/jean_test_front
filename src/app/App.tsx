import { BrowserRouter, Switch, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import { Invoices } from './pages/invoices/invoices';
import { InvoiceEditor } from './pages/invoices/components/invoiceEditor';
import React from 'react';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Invoices} />
          <Route exact path="/invoice/:id" component={InvoiceEditor} />
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
