import { connect } from 'react-redux';
// import { createSelector } from 'reselect';
import LoginView from './view';
import {login,checkAuth} from './actions';

const mapStateToProps = state => ({
    error: state.login.get('error'),
    isFetching: state.login.get('isFetching')
})

const mapDispatchToProps = {
    login,
    checkAuth
}

const LoginContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginView);

export default LoginContainer;