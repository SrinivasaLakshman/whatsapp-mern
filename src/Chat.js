import React from 'react'
import "./Chat.css";
import { Avatar, IconButton } from '@mui/material';
import { AttachFile, InsertEmoticon, MoreVert, SearchOutlined, Mic } from '@mui/icons-material';
import { useState } from 'react';

function Chat({ messages }) {

  const {input, setInput} = useState("");

  const sendMessage = () => {
    console.log(`This is message ${input}`);
  }

  return (
    <div className='chat'>
      <div className='chat_header'>
        <Avatar/>

        <div className='chat_headerInfo'>
          <h3>Room name</h3>
          <p>Last seen at ...</p>
        </div>

        <div className='chat_headerRight'>
          <IconButton>
            <SearchOutlined/>
          </IconButton>
          <IconButton>
            <AttachFile/>
          </IconButton>
          <IconButton>
            <MoreVert/>
          </IconButton>
        </div>
      </div>

      <div className='chat_body'>
        {messages.map((message) => (
          <p 
            className={`chat_message ${message.received && 'chat_reciever'}`}
          >
            <span className='chat_name'>{message.name}</span>
            {message.message}
            <span className='chat_timestamp'>{message.timestamp}</span>
        </p>
        ))}

        <p className='chat_message chat_reciever'>
          <span className='chat_name'>Srinivas</span>
          This is a message
          <span className='chat_timestamp'>{new
          Date().toUTCString()}</span>
        </p>
      </div>

      <div className='chat_footer'>
        <InsertEmoticon />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder='Type a message'
            type='text'
          />
          <button onClick={sendMessage}
          type='submit'>
            sendMessage
          </button>
        </form>
        <Mic/>
      </div>
    </div>
  )
}

export default Chat