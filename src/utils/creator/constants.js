
export default module => {
    var actions = ['CREATE', 'DELETE', 'UPDATE', 'RETRIEVE', 'REQUEST', 'SUCCESS', 'ERROR']
    return actions.reduce((p, c) => {
        p[c] = module + '/' + c;
        return p;
    }, {})
}