// import { combineReducers } from 'redux'
import Immutable from 'immutable'
import {
    CREATE,
    UPDATE,
    RETRIEVE_ONE,
    RETRIEVE_MANY,
    DELETE_ONE,
    DELETE_MANY
} from './constants';

const initState = Immutable.fromJS({
    state: null,    //request,success,error
    error: null,    //error message
    colNames: [
        { code: 'username', name: '用户名' },
        { code: 'role', name: '角色' },
        { code: 'description', name: '描述' }
    ],
    rowValues: [],
})

function UserReducer(state = initState, action) {
    switch (action.type) {
        // case LOGIN_REQUEST:
        //     return state.set('isFetching', true).set('username', null).set('token', null).set('error', null)
        // case LOGIN_SUCCESS:
        //     return state.set('isFetching', false).set('username', action.username).set('token', action.token)
        // case LOGIN_ERROR:
        //     return state.set('isFetching', false).set('error', action.error)
        default:
            return state
    }
}

// const reducers = combineReducers({
//     loginReducer
// })


export default UserReducer;