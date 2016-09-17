import fetch from 'isomorphic-fetch';
import { push } from 'react-router-redux'


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
        error
    }
}


export function login(username, password) {
    return dispatch => {
        if (username === '') return dispatch(loginError('用户名不能为空！'))
        if (password === '') return dispatch(loginError('密码不能为空！'))
        dispatch(loginRequest());
        return fetch('/api/login', {
            method: 'POST',
            headers: { 'content-type': 'application/json; charset=utf-8' },
            body: JSON.stringify({ username, password })
        }).then(resp => resp.json())
            .then(res => {
                if (res.error) return dispatch(loginError(res.error))
                dispatch(loginSuccess(res.username, res.token))
                dispatch(push('/home'))
            })
            .catch(err => dispatch(loginError('网络错误！')))
    }
}