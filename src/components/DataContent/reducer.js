import constants from './constants'



export default (module = 'DataContent') => {

    const {
        CREATE,
        DELETE,
        UPDATE,
        RETRIEVE,
        REQUEST,
        SUCCESS,
        ERROR
    } = constants(module)

    function create() { }
    function remove() { }
    function update() { }
    function retrieve() { }

    return { create, remove, update, retrieve }
}