import React, {Component, PropTypes} from 'react';
import IconButton from 'material-ui/IconButton';
import Power from 'material-ui/svg-icons/action/power-settings-new';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import Confirm from '../Confirm';


class HeaderView extends Component {
  constructor() {
    super()
    this.state = { confirm: false };
  }
  logoutConfirm() {
    this.setState({ confirm: true })
  }
  confirmCallback(b) {
    this.setState({ confirm: false })
    if (b) this.props.logoutAndRedirect()
  }
  render() {
    const confirm = {
      open: this.state.confirm,
      title: '注销',
      content: '确认要注销吗？',
      callback: (b) => this.confirmCallback(b)
    }

    return (
      <div>
        <Toolbar>
          <ToolbarTitle text={this.props.title} />
          <ToolbarGroup>
            <ToolbarTitle text={this.props.username} />
            <ToolbarSeparator />
            <IconButton tooltip='注销' onClick={ () => this.logoutConfirm() } >
              <Power />
            </IconButton>
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



