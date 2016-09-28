import React, {Component, PropTypes} from 'react';
import IconButton from 'material-ui/IconButton';
import Power from 'material-ui/svg-icons/action/power-settings-new';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import Confirm from '../Confirm';


class HeaderView extends Component {
  logout(){
    
  }
  render() {
    return (
      <Toolbar>
        <ToolbarTitle text={this.props.title} />
        <ToolbarGroup>
          <ToolbarTitle text={this.props.username} />
          <ToolbarSeparator />
          <IconButton tooltip='注销' onClick={() => this.props.logoutAndRedirect() } >
            <Power />
          </IconButton>
        </ToolbarGroup>
      </Toolbar>
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



