import constants from './constants';
import initState from './state';
import reducerCreator from '../../creator/reducer';


export default reducerCreator(constants, initState)