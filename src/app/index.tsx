import React from 'react'
import { createRoot } from 'react-dom/client';
import App from './App'
import { ApiProvider } from '../api'

import 'bootstrap/dist/css/bootstrap.min.css'

const domRoot = document.getElementById('root');
const root = createRoot(domRoot!);

root.render(
  <React.StrictMode>
    <ApiProvider
      url="https://jean-test-api.herokuapp.com/"
      token="" // set your api token here
    >
      <App />
    </ApiProvider>
  </React.StrictMode>
)
