import React from 'react'
import Header from '../components/Header'
import Menu from '../components/Menu'

export const CoreLayout = ({ children }) => (
  <div style={{ height: '100%' }}>
    <Header />
    <Menu />
    {children}
  </div>
)

CoreLayout.propTypes = {
  children: React.PropTypes.element.isRequired
}

export default CoreLayout
