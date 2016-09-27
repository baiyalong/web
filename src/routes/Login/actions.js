import fetch from 'isomorphic-fetch';
import { push } from 'react-router-redux'
import Api from '../../utils/api';
import Request from '../../utils/request';
import localStorage from '../../utils/localStorage';
import jwtDecode from 'jwt-decode';

import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    LOGOUT
} from './constants';



export function loginRequest() {
    return {
        type: LOGIN_REQUEST
    }
}

export function loginSuccess(username, token) {
    localStorage.token = token
    localStorage.username = username
    return {
        type: LOGIN_SUCCESS,
        username,
        token
    }
}

export function loginError(error) {
    localStorage.clear()
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
            try {
                var decode = jwtDecode(res.token);
            } catch (err) {
                return dispatch(loginError('Invalid token'))
            }
            dispatch(loginSuccess(res.username, res.token))
            dispatch(push('user'))
        }).catch(err => dispatch(loginError('网络错误！')))
    }
}


export function logout() {
    localStorage.clear()
    return {
        type: LOGOUT
    }
}

export function logoutAndRedirect() {
    return dispatch => {
        dispatch(logout())
        dispatch(push('login'))
    }
}

export function redirect(path) {
    return dispatch => {
        dispatch(push(path))
    }
}

export function checkAuth() {
    let path = window.location.pathname
    return dispatch => {
        let render = true;
        if (localStorage.token) {
            if (path == '/' || path == '/login') {
                dispatch(push('user'))
                render = false;
            }
        } else {
            if (path != '/login') {
                dispatch(push('login'))
                render = false;
            }
        }
        return render
    }
}