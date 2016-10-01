import React, {Component, PropTypes} from 'react';
import Content from '../../components/DataContent';


class UserView extends Component {
    render() {
        return (
            <Content {...this.props} title='用户管理' />
        )
    }
}


export default UserView;
