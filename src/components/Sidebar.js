import React from "react";
import "../css/Sidebar.css";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__header"></div>
      <div className="sidebar__headerRight"></div>
      <DonutLargeIcon />
    </div>
  );
}

export default Sidebar;
