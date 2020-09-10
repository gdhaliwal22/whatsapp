import React from "react";
import "../css/Sidebar.css";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";

import { Avatar, IconButton } from "@material-ui/core";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar src="https://avatars2.githubusercontent.com/u/47346292?s=460&u=df0ecc71b7849b7165bfe27a4814aeb4c5994ff8&v=4" />
        <IconButton>
          <DonutLargeIcon />
        </IconButton>
        <IconButton>
          <ChatIcon />
        </IconButton>
        <IconButton>
          <MoreVertIcon />
        </IconButton>
      </div>
      <div className="sidebar__headerRight"></div>
    </div>
  );
}

export default Sidebar;
