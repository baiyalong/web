import request from '../utils/request';


export default constants => (json, state, params) => {
    if (state)
        return Object.assign(state, {
            type: params.type,
            error: state.error ? state.error + ' - ' + (new Date()).toLocaleString() : null
        })
    return dispatch => {
        var validateError = params.validate(json)
        if (validateError) return dispatch(params.action(null, {
            status: constants.ERROR,
            error: validateError
        }))
        dispatch(params.action(null, {
            status: constants.REQUEST,
            error: null
        }))
        return request({
            api: params.api,
            method: params.method,
            json: json
        }, dispatch).then(res => {
            var state = {}
            state.status = res.error ? constants.ERROR : constants.SUCCESS;
            state.error = res.error;
            if (params.data) state.data = res
            dispatch(params.action(null, state))
            if (params.refresh) dispatch(params.refresh())
        }).catch(err => dispatch(params.action(null, {
            status: constants.ERROR,
            error: err
        })))
    }
}
