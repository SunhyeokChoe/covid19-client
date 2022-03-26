import * as Sentry from '@sentry/react'
import { BrowserTracing } from '@sentry/tracing'

if (process.env.NODE_ENV === 'development') {
  Sentry.init({
    dsn: process.env.REACT_APP_SENTRY_DSN,
    integrations: [new BrowserTracing()],
    environment: process.env.NODE_ENV,

    // We recommend adjusting this value in production,
    // or using tracesSampler for finer control.
    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    tracesSampleRate: 1.0,
  })

  console.log('%cSentry is working.', 'color: #BA87F3; font-size: 30px; font-weight: bold; font-style: oblique;')
}
