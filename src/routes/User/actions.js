import Api from '../../utils/api';
import Request from '../../utils/request';

import {
    CREATE,
    DELETE,
    UPDATE,
    RETRIEVE,
    REQUEST,
    SUCCESS,
    ERROR
} from './constants';


export function create() { }
export function remove(params) {
    if (params && params.state)
        return Object.assign({}, params, {
            type: DELETE,
            error: errMsg(params.error)
        })
    return dispatch => {
        if (!(Array.isArray(params) && params.length))
            return dispatch(remove({
                state: ERROR,
                error: '查询参数错误！'
            }))
        return Request({
            api: Api.user,
            method: 'DELETE',
            json: params
        }, dispatch).then(res => {
            if (res.error) return dispatch(remove({
                state: ERROR,
                error: res.error
            }))
            dispatch(remove({
                state: SUCCESS
            }))
            dispatch(retrieve())
        }).catch(err => dispatch(remove({
            state: ERROR,
            error: '网络错误！'
        })))
    }
}
export function update() { }
export function retrieve(params) {
    if (params && params.state)
        return Object.assign({}, params, {
            type: RETRIEVE,
            error: errMsg(params.error)
        })
    return dispatch => {
        // if (!(params && (params.search || params._id)))
        //     return dispatch(retrieve({
        //         state: ERROR,
        //         error: '查询参数错误！'
        //     }))
        return Request({
            api: Api.user,
            method: 'GET',
        }, dispatch).then(res => {
            if (res.error) return dispatch(retrieve({
                state: ERROR,
                error: res.error
            }))
            dispatch(retrieve({
                state: SUCCESS,
                rowValues: res
            }))
        }).catch(err => dispatch(retrieve({
            state: ERROR,
            error: '网络错误！'
        })))
    }
}


function errMsg(err) {
    return err ? err + (new Date()).toLocaleString() : undefined
}