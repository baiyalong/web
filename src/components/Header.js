import React, {Component, PropTypes} from 'react';
import IconButton from 'material-ui/IconButton';
import Power from 'material-ui/svg-icons/action/power-settings-new';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';



class Header extends Component {
  render() {
    return (
      <Toolbar>
        <ToolbarTitle text={this.props.title} />
        <ToolbarGroup>
          <ToolbarTitle text="username" />
          <ToolbarSeparator />
          <IconButton tooltip='注销' >
            <Power />
          </IconButton>
        </ToolbarGroup>
      </Toolbar>
    )
  }
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
}

Header.defaultProps = {
  title: '标题',
  username: '用户名',
}


export default Header;