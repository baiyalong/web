import React, {Component, PropTypes} from 'react';
import IconButton from 'material-ui/IconButton';
import Create from 'material-ui/svg-icons/content/add';
import Delete from 'material-ui/svg-icons/content/remove';
import Update from 'material-ui/svg-icons/content/create';
import Details from 'material-ui/svg-icons/navigation/more-horiz';
import Refresh from 'material-ui/svg-icons/navigation/refresh';
import Retrieve from 'material-ui/svg-icons/action/search';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import TextField from 'material-ui/TextField';

class SubHeader extends Component {
  render() {
    return (
      <Toolbar style={{ background: 'white' }}>
        <ToolbarTitle text={this.props.title} />
        <ToolbarGroup>
          <TextField name='search' ref='search' />
          <IconButton tooltip='查询' >
            <Retrieve />
          </IconButton>
          <IconButton tooltip='添加' >
            <Create />
          </IconButton>
          <IconButton tooltip='删除' >
            <Delete />
          </IconButton>
          <IconButton tooltip='修改' >
            <Update />
          </IconButton>
          <IconButton tooltip='详情' >
            <Details />
          </IconButton>
          <IconButton tooltip='刷新' >
            <Refresh />
          </IconButton>
        </ToolbarGroup>
      </Toolbar>
    )
  }
}

SubHeader.propTypes = {
  title: PropTypes.string.isRequired,
}

SubHeader.defaultProps = {
  title: '模块名称',
}


export default SubHeader;