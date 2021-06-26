import React from 'react'
import ChatIcon from '@material-ui/icons/Chat';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import "./sidebar.css"
import { IconButton } from '@material-ui/core';
import { Avatar } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import SidebarChat from "./SidebarChat"
function sidebar() {
    return (
        <div className="sidebar">
            
            <div className="sidebar_header">
                <Avatar src="data:image/jpeg;base64,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"/>
                <div className="sidebar_headerRight">
                    <IconButton>
                        <DonutLargeIcon /> 
                    </IconButton>
                    <IconButton><ChatIcon /></IconButton>
                    <IconButton><MoreVertIcon /></IconButton>
                   
                   
                </div>
            </div>
            <div className="sidebar_search">
               <div className="sidebar_searchContainer">
                   <SearchOutlinedIcon />
                   <input placeholder="Search or start new chat" type="text" />
               </div> 

            </div>
            <div className="sidebar_chats">
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
            </div>
            
        </div>
    )
}

export default sidebar
