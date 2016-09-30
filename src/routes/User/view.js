import React, {Component, PropTypes} from 'react';
import Content from '../../components/DataContent';
import viewCreator from '../../creator/view';


class UserView extends Component {
    render() {
        const content = viewCreator(this.props, { title: '用户管理' })
        return (
            <Content {...content} />
        )
    }
}


export default UserView;
