import React from 'react'

const ChatBoxResiver = ({ avatar, user, message }) => {
    return (
        <div className='d-flex align-items-center resiver'>
            <div className='user-box d-flex flex-column align-items-center'>
                <div className='icon-box'>
                    <img src={avatar} alt="" />
                </div>
                <div className='username'>{user}</div>
            </div>
            <div>
                <div className="chat">{message}</div>
            </div>
        </div>
    )
}

const ChatBoxSender = ({ avatar, user, message }) => {
    return (
        <div className='d-flex align-items-center flex-row-reverse sender'>
            <div className='user-box d-flex flex-column align-items-center'>
                <div className='icon-box'>
                    <img src={avatar} alt="" />
                </div>
                <div className='username'>{user}</div>
            </div>
            <div>
                <div className="chat">{message}</div>
            </div>
        </div>
    )
}

export { ChatBoxResiver, ChatBoxSender }