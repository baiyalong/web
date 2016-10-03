import io from 'socket.io-client';
import server from '../../config/server'
import fingerprint from './fingerprint'

var socket = io(server.addr)

fingerprint(fp => {
    console.log(fp)
    socket.on('connect', () => {
        socket.emit('user-connect', {
            id: fp,
            role: 'admin'
        })
    })
})