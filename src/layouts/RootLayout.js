import React from 'react'

export const RootLayout = ({ children }) => (
    <div  style={{ height: '100%' }}>
        {children}
    </div>
)

RootLayout.propTypes = {
    children: React.PropTypes.element.isRequired
}

export default RootLayout
