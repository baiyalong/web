
export default (constants, initState) => (state = initState, action) => {
    if (constants[action.type])
        return state;
    function setState() {
        return state.set('action', action.type)
            .set('status', action.status)
            .set('error', action.error)
    }
    if (action.data)
        return setState().set('data', action.data)
    return setState();
}
