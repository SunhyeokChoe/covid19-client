/// <reference types="@welldone-software/why-did-you-render" />

import React from 'react'

if (process.env.NODE_ENV === 'development') {
  const whyDidYouRender = require('@welldone-software/why-did-you-render')
  whyDidYouRender(React, {
    trackAllPureComponents: true,
    logOwnerReasons: true,
    logOnDifferentValues: true,
  })

  console.log('%cWDYR is working.', 'color: #0090C0; font-size: 30px; font-weight: bold; font-style: oblique;')
}
