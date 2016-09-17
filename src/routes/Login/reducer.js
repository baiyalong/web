// import { combineReducers } from 'redux'
import Immutable from 'immutable'
import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_ERROR
} from './constants';

const initState = Immutable.fromJS({
    isFetching: false,
    username: null,
    token: null,
    error: null
})

function loginReducer(state = initState, action) {
    switch (action.type) {
        case LOGIN_REQUEST:
            return state.set('isFetching', true).set('username', null).set('token', null).set('error', null)
        case LOGIN_SUCCESS:
            return state.set('isFetching', false).set('username', action.username).set('token', action.token)
        case LOGIN_ERROR:
            return state.set('isFetching', false).set('error', action.error)
        default:
            return state
    }
}

// const reducers = combineReducers({
//     loginReducer
// })


export default loginReducer;