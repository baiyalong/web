import React, {Component, PropTypes} from 'react';
import Header from '../../components/Header'
import Menu from '../../components/Menu'


class CoreLayoutView extends Component {


  // componentWillMount() {
  //   console.log('CoreLayoutView componentWillMount',this.props)
  //   if (!this.props.token) this.props.logoutAndRedirect()
  // }
  // componentDidMount() {
  //   console.log('CoreLayoutView componentDidMount')
  // }
  // componentWillReceiveProps() {
  //   console.log('CoreLayoutView componentWillReceiveProps')
  // }
  // shouldComponentUpdate() {
  //   console.log('CoreLayoutView shouldComponentUpdate')
  // }
  // componentWillUpdate() {
  //   console.log('CoreLayoutView componentWillUpdate')
  // }
  // componentDidUpdate() {
  //   console.log('CoreLayoutView componentDidUpdate')
  // }
  // componentWillUnmount() {
  //   console.log('CoreLayoutView componentWillUnmount')
  // }

  render() {
    if (!this.props.token) {
      this.props.logoutAndRedirect()
      return false
    }
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


