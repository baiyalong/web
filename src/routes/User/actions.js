import api from '../../utils/api';
import constants from './constants';
import actionCreator from '../../creator/actions';

const action = actionCreator(constants)

export function create(json, state) {
    return action(json, state, {
        action: create,
        type: constants.CREATE,
        api: api.user,
        method: 'POST',
        data: false,
        validate: function (json) {

        }
    })
}

export function remove(json, state) {
    return action(json, state, {
        action: remove,
        type: constants.DELETE,
        api: api.user,
        method: 'DELETE',
        data: false,
        validate: function (json) {
            if (!(Array.isArray(json) && json.length))
                return '参数错误！'
        }
    })
}

export function update(json, state) {
    return action(json, state, {
        action: update,
        type: constants.UPDATE,
        api: api.user,
        method: 'PUT',
        data: false,
        validate: function (json) {

        }
    })
}

export function retrieve(json, state) {
    return action(json, state, {
        action: retrieve,
        type: constants.RETRIEVE,
        api: api.user,
        method: 'GET',
        data: true,
        validate: function (json) {

        }
    })
}


