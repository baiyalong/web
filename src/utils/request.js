import fetch from 'isomorphic-fetch';
import {
    logoutAndRedirect
} from '../routes/Login/actions';


export default function request(params, dispatch) {
    return fetch(params.api, {
        method: params.method || 'GET',
        headers: Object.assign({
            'content-type': 'application/json; charset=utf-8',
            'authorization': 'Bearer ' + localStorage.token
        }, params.headers),
        body: JSON.stringify(params.json)
    }).then(resp => {
        if (dispatch && resp.status == 401) return dispatch(logoutAndRedirect())
        return resp.json()
    })
}



// var params = {
//     api,
//     method,
//     json
// }