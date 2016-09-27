import { connect } from 'react-redux';
// import { createSelector } from 'reselect';
import RootLayoutView from './view';
import {logoutAndRedirect, redirect} from '../../routes/Login/actions';
import localStorage from '../../utils/localStorage';

const mapStateToProps = state => ({
    token: state.login && state.login.get('token') || localStorage.token,
})

const mapDispatchToProps = {
    logoutAndRedirect,
    redirect
}

const RootLayoutContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(RootLayoutView);

export default RootLayoutContainer;