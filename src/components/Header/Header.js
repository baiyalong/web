import React, {Component, PropTypes} from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';



class Header extends Component {
  render() {
    return (
      <AppBar
        title={this.props.title}
        iconElementRight={
          <IconMenu
            iconButtonElement={
              <IconButton><MoreVertIcon /></IconButton>
            }
            targetOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
            >
            <MenuItem primaryText="帮助" />
            <MenuItem primaryText="注销" />
          </IconMenu>
        }
        />
    )
  }
}

Header.propTypes = {
  title: PropTypes.string.isRequired
}

Header.defaultProps = {
  title: '标题'
}


export default Header;