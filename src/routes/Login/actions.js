import fetch from 'isomorphic-fetch';
import { push } from 'react-router-redux'
import Api from '../../utils/api';
import Request from '../../utils/request';
import localStorage from '../../utils/localStorage';


import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_ERROR
} from './constants';



export function loginRequest() {
    return {
        type: LOGIN_REQUEST
    }
}

export function loginSuccess(username, token) {
    return {
        type: LOGIN_SUCCESS,
        username,
        token
    }
}

export function loginError(error) {
    return {
        type: LOGIN_ERROR,
        error: error + (new Date()).toLocaleString()
    }
}


export function login(username, password) {
    return dispatch => {
        if (username === '') return dispatch(loginError('用户名不能为空！'))
        if (password === '') return dispatch(loginError('密码不能为空！'))
        dispatch(loginRequest());
        return Request({
            api: Api.login,
            method: 'POST',
            json: { username, password }
        }).then(res => {
            if (res.error) return dispatch(loginError(res.error))
            localStorage.token = res.token
            dispatch(loginSuccess(res.username, res.token))
            dispatch(push('/user'))
        }).catch(err => dispatch(loginError('网络错误！')))
    }
}