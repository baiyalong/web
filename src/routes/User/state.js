import stateCreator from '../../creator/state'


const initState = {
    dict: [
        {
            code: 'username',
            name: '用户名',
            show: ['table', 'insert', 'update', 'details'],
            regex: '',
            type: 'text',
        },
        {
            code: 'password',
            name: '密码',
            show: ['insert', 'update'],
            regex: '',
            type: 'password',
        },
        {
            code: 'role',
            name: '角色',
            show: ['table', 'insert', 'update', 'details'],
            regex: '',
            type: 'select',
            options: [{ code: 'admin', name: '管理员' }, { code: 'user', name: '用户' }]
        },
        {
            code: 'description',
            name: '描述',
            show: ['table', 'insert', 'update', 'details'],
            regex: '',
            type: 'text',
            multiLine: true,
        }
    ]
}


export default stateCreator(initState)
