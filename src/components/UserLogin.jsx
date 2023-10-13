import React, { useState } from 'react'
import _ from 'lodash'

const UserLogin = ({ setUser }) => {
    const [user, setAUser] = useState('')

    const handleSetUser = () => {
        if (!user) return
        localStorage.setItem('user', user)
        setUser(user)
        localStorage.setItem('avatar', `https://picsum.photos/id/${_.random(1, 1000)}/200/300`)
    }

    return (
        <div>
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-7 shadow">
                        <div>
                            <h1>Entrance</h1>
                        </div>
                        <div className='main'>
                            <ul>
                                <li>名前を書いて、ボタンを押すとチャットに参加できます。</li>
                                <li>自由なチャット空間であるため、発言には他者に十分配慮してください。</li>
                            </ul>
                        </div>
                        <div className='footer'>
                            <div>
                                <form className='d-flex'>
                                    <div className='input-box'>
                                        <input
                                            type="text"
                                            placeholder="名前を書いてください"
                                            value={user}
                                            onChange={e => setAUser(e.target.value)}
                                            className='chat-input'
                                        />
                                    </div>
                                    <div>
                                        <button onClick={handleSetUser}>送</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserLogin