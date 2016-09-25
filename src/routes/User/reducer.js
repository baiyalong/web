// import { combineReducers } from 'redux'
import Immutable from 'immutable'
import {
    CREATE,
    DELETE,
    UPDATE,
    RETRIEVE,
    REQUEST,
    SUCCESS,
    ERROR
} from './constants';

const initState = Immutable.fromJS({
    state: null,    //request,success,error
    action: null,    //create,delete,update,retrieve
    error: null,    //error message
    colNames: [
        { code: 'username', name: '用户名' },
        { code: 'role', name: '角色' },
        { code: 'description', name: '描述' }
    ],
    rowValues: [],
})


function create(state, action) { if (action.type != CREATE) return state; }
function remove(state, action) { if (action.type != DELETE) return state; }
function update(state, action) { if (action.type != UPDATE) return state; }
function retrieve(state, action) {
    return state
        .set('state', action.state)
        .set('action', action.type)
        .set('error', action.error)
        .set('rowValues', action.rowValues);

}


function UserReducer(state = initState, action) {
    switch (action.type) {
        case CREATE: return create(state, action);
        case DELETE: return remove(state, action);
        case UPDATE: return update(state, action);
        case RETRIEVE: return retrieve(state, action);
        default: return state;
    }
}

// const UserReducer = combineReducers({
//     create,
//     remove,
//     update,
//     retrieve
// })


export default UserReducer;