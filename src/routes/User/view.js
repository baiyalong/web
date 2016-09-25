import React, {Component, PropTypes} from 'react';
import DataTable from '../../components/DataTable'



class UserView extends Component {
    render() {
        return (
            <DataTable
                title='用户管理'
                create={() => this.props.create() }
                delete={() => this.props.remove() }
                update={() => this.props.update() }
                retrieve={(s) => this.props.retrieve(s) }
                state={this.props.state}
                action={this.props.action}
                error={this.props.error}
                colNames={this.props.colNames}
                rowValues={this.props.rowValues}
                />
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