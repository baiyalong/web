import stateCreator from '../../creator/state'


const initState = {
    dict: [{
        code: 'username',
        name: '用户名',
        show: ['table', 'insert', 'update', 'details'],
        regex: '',
        type: 'text',
    }, {
        code: 'password',
        name: '密码',
        show: ['insert', 'update'],
        regex: '',
        type: 'password',
    }, {
        code: 'role',
        name: '角色',
        show: ['table', 'insert', 'update', 'details'],
        regex: '',
        type: 'select',
        options: [{
            value: 'admin',
            name: '管理员'
        }, {
            value: 'user',
            name: '用户'
        }]
    }, {
        code: 'description',
        name: '描述',
        show: ['table', 'insert', 'update', 'details'],
        regex: '',
        type: 'text',
        rows: 2,
    }]
}


export default stateCreator(initState)