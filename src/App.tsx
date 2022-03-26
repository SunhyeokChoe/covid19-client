import './App.scss'

import React, { Suspense } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'

import * as RouterPath from 'constants/window-route-path'
import Layout from 'components/layout/Layout'
import Home from 'components/Home'
import Vaccine from 'components/Vaccine'
import ExternalLinks from 'components/ExternalLinks'
import About from 'components/About'

const pages = [
  {
    path: RouterPath.HOME,
    component: Home,
    displayName: 'Home',
  },
  {
    path: RouterPath.VACCINE,
    component: Vaccine,
    displayName: 'Vaccine',
  },
  {
    path: RouterPath.EXTERN_LINK,
    component: ExternalLinks,
    displayName: 'ExternalLinks',
  },
  {
    path: RouterPath.ABOUT,
    component: About,
    displayName: 'About',
  },
]

const App: React.FC = () => {
  const location = useLocation()

  return (
    <Layout>
      <Suspense fallback={<div />}>
        <Routes location={location}>
          {pages.map((page) => {
            return <Route path={page.path} element={<page.component />} key={page.displayName} />
          })}
          <Route path="/" />
        </Routes>
      </Suspense>
    </Layout>
  )
}

export default App
