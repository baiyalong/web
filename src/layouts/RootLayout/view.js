import React, {Component, PropTypes} from 'react';
import { push } from 'react-router-redux'

class RootLayoutView extends Component {
    render() {

        // if (!this.props.token && this.props.route.path != '/login') {
        //     this.props.logoutAndRedirect()
        //     return false
        // }

        return (
            <div  style={{ height: '100%' }}>
                {this.props.children}
            </div>
        )
    }
}

RootLayoutView.propTypes = {
    children: React.PropTypes.element.isRequired
}

export default RootLayoutView
