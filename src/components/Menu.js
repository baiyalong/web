import React, {Component, PropTypes} from 'react';
import Paper from 'material-ui/Paper';
import Menus from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import RemoveRedEye from 'material-ui/svg-icons/image/remove-red-eye';
import PersonAdd from 'material-ui/svg-icons/social/person-add';
import Person from 'material-ui/svg-icons/social/person';
import ContentLink from 'material-ui/svg-icons/content/link';
import Divider from 'material-ui/Divider';
import ContentCopy from 'material-ui/svg-icons/content/content-copy';
import Download from 'material-ui/svg-icons/file/file-download';
import Delete from 'material-ui/svg-icons/action/delete';
import FontIcon from 'material-ui/FontIcon';

const style = {
    paper: {
        display: 'inline-block',
        float: 'left',
        margin: '0',
        height: '100%'
    }
};


class Menu extends Component {
    render() {
        return (
            <Paper style={style.paper}>
                <Menus>
                    <MenuItem primaryText="用户管理" leftIcon={<Person />} />
                    <MenuItem primaryText="模块2" leftIcon={<PersonAdd />} />
                    <MenuItem primaryText="模块3" leftIcon={<ContentLink />} />
                    <Divider />
                    <MenuItem primaryText="模块4" leftIcon={<ContentCopy />} />
                    <MenuItem primaryText="模块5" leftIcon={<Download />} />
                    <Divider />
                    <MenuItem primaryText="模块6" leftIcon={<Delete />} />
                </Menus>
            </Paper>
        )
    }
}

Menu.propTypes = {
    title: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
}

Menu.defaultProps = {
    title: '标题',
    username: '用户名',
}


export default Menu;