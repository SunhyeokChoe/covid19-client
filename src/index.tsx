import './wdyr'
import React, { StrictMode, Suspense, lazy } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import * as Sentry from '@sentry/react'
import { BrowserTracing } from '@sentry/tracing'

import reportWebVitals from './reportWebVitals'

const App = lazy(() => import('./App'))

Sentry.init({
  dsn: process.env.SENTRY_REACT_DSN,
  integrations: [new BrowserTracing()],

  // We recommend adjusting this value in production,
  // or using tracesSampler for finer control.
  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  tracesSampleRate: 1.0,
})

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
