import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { ApiProvider } from '../api'
import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.render(
  <React.StrictMode>
    <ApiProvider
      url="https://jean-test-api.herokuapp.com/"
      token="" // set your api token here
    >
      <App />
    </ApiProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
