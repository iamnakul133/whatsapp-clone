import { Avatar, IconButton } from '@material-ui/core'
import SearchOutlined from '@material-ui/icons/SearchOutlined'
import React from 'react'
import "./Chat.css"
import AttachFileOutlinedIcon from '@material-ui/icons/AttachFileOutlined';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import MicIcon from '@material-ui/icons/Mic';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';

function chat() {
    return (
         <div className ="chat" >
          <div className="chat_header">
              <Avatar />
              <div className="chat_headerInfo">
                <h3>Room name</h3> 
                <p>last seen .....</p>
              </div>
              <div className="chat_headerRight">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFileOutlinedIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
                
          </div> 
          <div className="chat_body">
                    <p className="chat_message">
                        <span className="chat_name">sonny</span>
                        This is a message   
                        <span className="chat_timestamp">{new Date().toUTCString()}</span>
                    </p> 
                    <p className="chat_message chat_receiver">
                        <span className="chat_name">sonny</span>
                        This is a message   
                        <span className="chat_timestamp">{new Date().toUTCString()}</span>
                    </p> 
                    <p className="chat_message">
                        <span className="chat_name">sonny</span>
                        This is a message   
                        <span className="chat_timestamp">{new Date().toUTCString()}</span>
                    </p> 
          </div>

          <div className="chat_footer">
              <InsertEmoticonIcon />
              <form>
                <input placeholder="type a message" type="text" />
                <button type="submit">Send a message</button>
              </form>
              <MicIcon />

          </div>
         </div>
    )
}

export default chat