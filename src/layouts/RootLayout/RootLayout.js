import React from 'react'

export const RootLayout = ({ children }) => (
    <div>
        {children}
    </div>
)

RootLayout.propTypes = {
    children: React.PropTypes.element.isRequired
}

export default RootLayout
