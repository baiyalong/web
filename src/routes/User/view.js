import React, {Component, PropTypes} from 'react';
import Content from '../../components/Content'



class UserView extends Component {
    render() {

        const content = {
            title: '用户管理',
            state: this.props.state,
            action: this.props.action,
            error: this.props.error,
            colNames: this.props.colNames,
            rowValues: this.props.rowValues,
            create: () => this.props.create(),
            delete: () => this.props.remove(),
            update: () => this.props.update(),
            retrieve: (s) => this.props.retrieve(s),
        }

        return (
            <Content {...content} />
        )
    }
}

// UserView.propTypes = {
//     // title: PropTypes.string.isRequired,
//     // login: PropTypes.func
// }

// UserView.defaultProps = {
//     // title: '用户管理'
// }


export default UserView;
