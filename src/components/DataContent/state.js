import Immutable from 'immutable'

const initState = Immutable.fromJS({
    state: null,    //request,success,error
    action: null,    //create,delete,update,retrieve
    error: null,    //error message
    modal: false,
    dict: [],
    data: [],
})

export default initState;