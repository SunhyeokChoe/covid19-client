import * as React from 'react'

interface IProps {
  children: React.ReactNode
}

const Layout: React.FC<IProps> = ({ children }): JSX.Element => {
  return <div>{children}</div>
}

export default Layout
