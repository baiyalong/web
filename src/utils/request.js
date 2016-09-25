import fetch from 'isomorphic-fetch';
import localStorage from './localStorage';

export default function request(params) {
    return fetch(params.api, {
        method: params.method || 'GET',
        headers: Object.assign({}, params.headers, {
            'content-type': 'application/json; charset=utf-8',
            'authorization': 'Bearer ' + localStorage.token
        }),
        body: JSON.stringify(params.json)
    }).then(resp => resp.json())
}



// var params = {
//     api,
//     method,
//     json
// }