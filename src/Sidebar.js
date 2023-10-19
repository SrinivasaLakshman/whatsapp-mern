import React from "react";
import "./Sidebar.css";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import { Avatar, IconButton } from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";
import MoreVertIcon from "@mui/icons-material/MoreVert";

function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebar_header">
          <Avatar src="https://static.toiimg.com/thumb/msid-99035019,width-1280,height-720,resizemode-4/99035019.jpg"/>
          <div className="sidebar_headerRight">
            <IconButton>
              <DonutLargeIcon/>
            </IconButton>
            <IconButton>
              <ChatIcon/>
            </IconButton>
            <IconButton>
              <MoreVertIcon/>
            </IconButton>
          </div>
        </div>
    </div>
  );
}

export default Sidebar;