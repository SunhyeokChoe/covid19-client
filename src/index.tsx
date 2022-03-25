import React, { StrictMode, Suspense } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import * as Sentry from '@sentry/react'
import { BrowserTracing } from '@sentry/tracing'
import reportWebVitals from './reportWebVitals'
import App from './App'

ReactDOM.render(
  <Suspense fallback={<div />}>
    <Router>
      <StrictMode>
        <App />
      </StrictMode>
    </Router>
  </Suspense>,
  document.getElementById('root'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
