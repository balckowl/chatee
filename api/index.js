import express from 'express';
import cors from 'cors';
import http from 'http';
import { Server } from 'socket.io';

const app = express();
const SOCKET_URL = process.env.SOCKET_URL || "http://localhost:4000";

app.use(cors());

const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: '*',
    },
});


io.on('connection', (socket) => {

    console.log('接続されました。')

    socket.on('chat',chat => {
        io.emit('chat', chat)
    })

    socket.on('disconnect', () =>{
        console.log('切断されました。')
    })
});

server.listen(SOCKET_URL, () => {
    console.log('サーバーが立ち上がりました。')
})