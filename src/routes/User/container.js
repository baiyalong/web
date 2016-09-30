import UserView from './view';
import * as actions from './actions';
import containerCreator from '../../creator/container';


export default containerCreator('user', UserView, actions);