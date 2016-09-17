import React, {Component, PropTypes} from 'react';
import Paper from 'material-ui/Paper';
import Menus from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import RemoveRedEye from 'material-ui/svg-icons/image/remove-red-eye';
import PersonAdd from 'material-ui/svg-icons/social/person-add';
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
        margin: '2px',
        height: '100%'
    }
};


class Menu extends Component {
    render() {
        return (
            <Paper style={style.paper}>
                <Menus>
                    <MenuItem primaryText="用户管理" leftIcon={<RemoveRedEye />} />
                    <MenuItem primaryText="Share" leftIcon={<PersonAdd />} />
                    <MenuItem primaryText="Get links" leftIcon={<ContentLink />} />
                    <Divider />
                    <MenuItem primaryText="Make a copy" leftIcon={<ContentCopy />} />
                    <MenuItem primaryText="Download" leftIcon={<Download />} />
                    <Divider />
                    <MenuItem primaryText="Remove" leftIcon={<Delete />} />
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