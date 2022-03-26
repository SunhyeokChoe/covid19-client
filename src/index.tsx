import './sentry'
import './wdyr'
import React, { StrictMode, Suspense, lazy } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import reportWebVitals from './reportWebVitals'

const App = lazy(() => import('./App'))

ReactDOM.render(
  <Suspense fallback={<div />}>
    <BrowserRouter>
      <StrictMode>
        <App />
      </StrictMode>
    </BrowserRouter>
  </Suspense>,
  document.getElementById('root'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
