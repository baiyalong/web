import React, {Component, PropTypes} from 'react';
import DataTable from '../../components/DataTable'



class UserView extends Component {
    render() {
        return (
            <DataTable />
        )
    }
}

UserView.propTypes = {
    // title: PropTypes.string.isRequired,
    // login: PropTypes.func
}

UserView.defaultProps = {
    // title: '欢迎使用'
}


export default UserView;