export default (module) => {
    function constant(action) {
        return module + '/' + action;
    }
    var actions = ['INSERT', 'DELETE', 'UPDATE', 'RETRIEVE', 'REQUEST', 'SUCCESS', 'ERROR']
    var constants = {}
    actions.forEach(e => constants[e] = constant(e))
    return constants;
}

