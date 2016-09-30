import { connect } from 'react-redux';
// import { createSelector } from 'reselect';
import HeaderView from './view';
import {logoutAndRedirect} from '../../routes/Login/actions';

const mapStateToProps = state => ({
    username: state.login && state.login.get('username')||localStorage.username,
})

const mapDispatchToProps = {
    logoutAndRedirect
}

const HeaderContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(HeaderView);

export default HeaderContainer;