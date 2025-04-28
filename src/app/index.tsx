import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { ApiProvider } from '../api'

import 'bootstrap/dist/css/bootstrap.min.css'
import NoApiTokenAlert from './NoApiTokenAlert'

const domRoot = document.getElementById('root')
const root = createRoot(domRoot!)

root.render(
  <React.StrictMode>
    {process.env.REACT_APP_API_TOKEN ? (
      <ApiProvider
        url="https://jean-test-api.herokuapp.com/"
        token={process.env.REACT_APP_API_TOKEN ?? ''}
      >
        <App />
      </ApiProvider>
    ) : (
      <NoApiTokenAlert />
    )}
  </React.StrictMode>
)
