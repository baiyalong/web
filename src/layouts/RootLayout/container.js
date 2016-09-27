import { connect } from 'react-redux';
import RootLayoutView from './view';
import {checkAuth} from '../../routes/Login/actions';

const mapStateToProps = state => ({
    
})

const mapDispatchToProps = {
    checkAuth
}

const RootLayoutContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(RootLayoutView);

export default RootLayoutContainer;