import constants from './constants';
import initState from './state';
import reducerCreator from '../../utils/creator/reducer';


export default (state = initState, action) => reducerCreator(...args, constants)