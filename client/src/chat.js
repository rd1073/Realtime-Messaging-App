import React, { useState } from 'react'

const Chat = ({socket, username, room}) => {
    const[curmsg, setCurMsg]=useState("");

    const sendMsg = async ()=>{
        if (curmsg!== "") {
            const messageData = {
              room: room,
              author: username,
              message: curmsg,
              time:
                new Date(Date.now()).getHours() +":" +new Date(Date.now()).getMinutes(),
            }
            await socket.emit("send_message", messageData);
            setCurMsg("");
    }
    else{
        console.log("seocket not connected");
    }
  };
      
            
         
    

  return (
    <div>
        <div className="chat-header"></div>
        <h3>Real Time Chat</h3>
        <div className="chat-body"></div>
        <div className="chat-footer">
        <input
          type="text"
          placeholder="Hey..."
          value={curmsg}

          onChange={(event) => {
            setCurMsg(event.target.value);
          }}
        />
        <button onClick={sendMsg}>&#9658;</button>

        </div>

      
    </div>
  );
}



export default Chat; 