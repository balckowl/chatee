import React, { useEffect, useState } from 'react'
import UserLogin from './UserLogin'
import { ChatBoxResiver, ChatBoxSender } from './ChatBox';
import { io } from 'socket.io-client';
import InputText from './InputText';

const ChatContainer = () => {

    const SOCKET_URL = process.env.SOCKET_URL || "http://localhost:4000";
    
    let socket = io(SOCKET_URL);

    const [chats, setChats] = useState([])
    const [user, setUser] = useState(localStorage.getItem('user'))
    const [avatar, setAvatar] = useState(localStorage.getItem('avatar'))


    useEffect(() => {
        socket.on('chat', senderChats => {
            setChats(senderChats)
        })
    })

    const sendChatToSocket = (chat) => {
        socket.emit('chat', chat)
    }

    const addMessage = (chat) => {
        const newChat = { ...chat, user, avatar }
        setChats([...chats, newChat])
        sendChatToSocket([...chats, newChat])
    }

    const logout = () => {
        localStorage.removeItem('user')
        localStorage.removeItem('avatar')
        setUser('')
    }

    const ChatsList = () => {
        return chats.map((chat, index) => {
            if (chat.user === user) return <ChatBoxSender key={index} message={chat.message} avatar={chat.avatar} user={chat.user} />
            return <ChatBoxResiver key={index} message={chat.message} avatar={chat.avatar} user={chat.user} />
        })
    }

    return (
        <div>
            {user ?
                (<div>
                    <div className="container">
                        <div className='row d-flex justify-content-center'>
                            <div className='col-lg-7 shadow chat-screen'>
                                <div>
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <h2>ChatRoom</h2>
                                        <div onClick={logout} className='logout'>退出</div>
                                    </div>

                                    <div className='main'>
                                        <ChatsList />
                                    </div>

                                    <div className='footer'>
                                        <InputText addMessage={addMessage} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                ) : (<UserLogin setUser={setUser} />)
            }
        </div>
    )
}

export default ChatContainer