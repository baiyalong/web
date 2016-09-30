import Immutable from 'immutable'


var defaultState = {
    action: null,    //create,delete,update,retrieve
    status: null,    //request,success,error
    error: null,    //error message
    dict: [],
    data: [],
}


export default state => Immutable.fromJS(Object.assign({}, defaultState, state))
