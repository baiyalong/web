import React, {Component, PropTypes} from 'react';
import IconButton from 'material-ui/IconButton';
import Retrieve from 'material-ui/svg-icons/action/search';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import TextField from 'material-ui/TextField';



class SubHeader extends Component {

  render() {
    return (
      <div>
        <Toolbar style={{ background: 'white' }}>
          <ToolbarTitle text={this.props.title} />
          <ToolbarGroup>
            <TextField name='search' ref='search' />
            <IconButton tooltip='查询' onClick={() => this.props.retrieve({ search: this.refs.search.input.value }) } >
              <Retrieve />
            </IconButton>
          </ToolbarGroup>
        </Toolbar>
      </div>
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