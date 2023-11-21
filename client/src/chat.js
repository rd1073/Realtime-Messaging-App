import React from 'react'

const Chat = (socket, username, room) => {
  return (
    <div>
        <div className="chat-header"></div>
        <h3>Real Time Chat</h3>
        <div className="chat-body"></div>
        <div className="chat-footer">
        <input
          type="text"
          placeholder="Hey..."
        />
        <button >&#9658;</button>

        </div>

      
    </div>
  )
}

export default Chat;
