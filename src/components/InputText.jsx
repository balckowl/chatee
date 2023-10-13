import React, { useState } from 'react'

const InputText = ({ addMessage }) => {
    const [message, setMessage] = useState('')

    const addAMessage = (e) => {
        e.preventDefault()
        
        addMessage({
            message
        })
        setMessage('')
    }

    return (
        <div>
            <form className='d-flex'>
                <div className='input-box'>
                    <input
                        type="text"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className='chat-input'
                    />
                </div>
                <div>
                    <button onClick={addAMessage}>送</button>
                </div>
            </form>
        </div>
    )
}

export default InputText