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
    modal: false,
    dict: [
        {
            code: 'username',
            name: '用户名',
            show: ['table', 'insert', 'update', 'details'],
            regex: '',
            type: 'text',
        },
        {
            code: 'password',
            name: '密码',
            show: ['insert', 'update'],
            regex: '',
            type: 'password',
        },
        {
            code: 'role',
            name: '角色',
            show: ['table', 'insert', 'update', 'details'],
            regex: '',
            type: 'select',
            options: [{ code: 'admin', name: '管理员' }, { code: 'user', name: '用户' }]
        },
        {
            code: 'description',
            name: '描述',
            show: ['table', 'insert', 'update', 'details'],
            regex: '',
            type: 'text',
            multiLine: true,
        }
    ],
    data: [],
    //
    colNames: [
        { code: 'username', name: '用户名' },
        { code: 'role', name: '角色' },
        { code: 'description', name: '描述' }
    ],
    rowValues: []

})


function create(state, action) { if (action.type != CREATE) return state; }
function remove(state, action) {
    return setStatus(state, action)
}
function update(state, action) { if (action.type != UPDATE) return state; }
function retrieve(state, action) {
    return setStatus(state, action)
        .set('rowValues', action.rowValues);
}

function setStatus(state, action) {
    return state
        .set('state', action.state)
        .set('action', action.type)
        .set('error', action.error)
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