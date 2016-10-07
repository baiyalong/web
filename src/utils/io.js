import io from 'socket.io-client';
import server from '../../config/server'
import fingerprint from './fingerprint'

var socket = io(server.addr)

fingerprint(fp => {
    console.log(fp)
    socket.on('connect', () => {
        socket.emit('user.connect', {
            fp,
            role: 'admin'
        }, (err, user) => console.log('user.connect', err, user))
    })

    socket.on('user.set', user => console.log('user.set', user))
})