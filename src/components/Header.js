import React, {Component, PropTypes} from 'react';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import FlatButton from 'material-ui/FlatButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';



class Header extends Component {
  render() {
    return (
      <Toolbar>
        <ToolbarTitle text={this.props.title} />
        <ToolbarGroup>
          <ToolbarTitle text={this.props.username} />
          <ToolbarSeparator />
          <FlatButton label="注销" primary={true} />
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