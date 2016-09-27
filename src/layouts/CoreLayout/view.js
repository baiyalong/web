import React, {Component, PropTypes} from 'react';
import Header from '../../components/Header'
import Menu from '../../components/Menu'


class CoreLayoutView extends Component {

  render() {
    return (
      <div style={{ height: '100%' }}>
        <Header />
        <Menu />
        {this.props.children}
      </div>
    )
  }
}


CoreLayoutView.propTypes = {
  children: React.PropTypes.element.isRequired
}

export default CoreLayoutView


