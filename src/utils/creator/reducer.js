
export default (state, action, constants) => {
    if (constants[action.type])
        return state;
    var s = state
        .set('action', action.type)
        .set('status', action.status)
        .set('error', action.error)
    if (action.data)
        s.set('data', action.data)
    return s;
}
