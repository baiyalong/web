import React, {Component, PropTypes} from 'react';
import IconButton from 'material-ui/IconButton';
import Power from 'material-ui/svg-icons/action/power-settings-new';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import Confirm from '../Confirm';
import {cyan50} from 'material-ui/styles/colors';

class HeaderView extends Component {
  constructor() {
    super()
    this.state = { confirm: false };
  }
  logoutConfirm() {
    this.setState({ confirm: true })
  }
  logout(b) {
    this.setState({ confirm: false })
    if (b) this.props.logoutAndRedirect()
  }
  render() {
    const confirm = {
      open: this.state.confirm,
      title: '注销',
      content: '确认要注销吗？',
      callback: (b) => this.logout(b)
    }

    return (
      <div>
        <Toolbar style={{ backgroundColor: cyan50 }}>
          <ToolbarTitle text={this.props.title} />
          <ToolbarGroup >
            <ToolbarTitle text={this.props.username} />
            <ToolbarSeparator />
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }} >
              <IconButton tooltip='注销' onClick={ () => this.logoutConfirm() } >
                <Power />
              </IconButton>
            </div>
          </ToolbarGroup>
        </Toolbar>
        <Confirm {...confirm} />
      </div>
    )
  }
}

HeaderView.propTypes = {
  title: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
}

HeaderView.defaultProps = {
  title: '标题',
  username: '用户名',
}


export default HeaderView;



