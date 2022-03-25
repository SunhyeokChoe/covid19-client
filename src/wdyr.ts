/// <reference types="@welldone-software/why-did-you-render" />

import React from 'react'

try {
  if (process.env.NODE_ENV === 'development') {
    const whyDidYouRender = require('@welldone-software/why-did-you-render')
    whyDidYouRender(React, {
      trackAllPureComponents: true,
      logOwnerReasons: true,
      logOnDifferentValues: true,
    })
  }
} catch (error) {
  console.debug(error)
}
