import { connect } from 'react-redux';
// import { createSelector } from 'reselect';
import UserView from './view';
// import {getList} from './actions';

const mapStateToProps = state => ({
    error: state.user.get('error'),
    // isFetching: state.login.get('isFetching')
})

const mapDispatchToProps = {
    // getList
}

const UserContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(UserView);

export default UserContainer;