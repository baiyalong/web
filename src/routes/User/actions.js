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
export function remove() { }
export function update() { }
export function retrieve(params) {
    if (params && params.state)
        return Object.assign({}, params, {
            type: RETRIEVE,
            error: params.error ? params.error + (new Date()).toLocaleString() : undefined,
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
        }).then(res => {
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