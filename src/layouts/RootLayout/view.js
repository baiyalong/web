import React, {Component, PropTypes} from 'react';

class RootLayoutView extends Component {

    render() {
        if (!this.props.checkAuth()) return false;
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
