import { connect } from 'react-redux';
// import { createSelector } from 'reselect';
import UserView from './view';
import {create, remove, update, retrieve} from './actions';

const mapStateToProps = state => ({
    state: state.user.get('state'),
    action: state.user.get('action'),
    error: state.user.get('error'),
    colNames: state.user.get('colNames').toJS(),
    rowValues: state.user.get('rowValues'),
})

const mapDispatchToProps = {
    create,
    remove,
    update,
    retrieve
}

const UserContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(UserView);

export default UserContainer;