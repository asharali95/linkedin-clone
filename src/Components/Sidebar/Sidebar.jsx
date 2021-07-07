import { Avatar } from "@material-ui/core";
import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
    
  const recentItem = (topic) => (
    <div className="sidebar_recentItem">
      <span className="sidebar_hash">#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar_top">
        <img
          src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
          alt=""
        />
        <Avatar
          src="https://media-exp3.licdn.com/dms/image/D4D35AQGulIggJxTFXg/profile-framedphoto-shrink_200_200/0/1625222398547?e=1625655600&v=beta&t=R5sN3Ce2pZtKwFK1y0PwUJUSqjYEKIGdf0qlW613OEQ"
          className="sidebar_avatar"
        />
        <h2>Ashar Ali</h2>
        <h4>ashar.alia1999@gmail.com</h4>
      </div>

      <div className="sidebar_stats">
        <div className="sidebar_stat">
          <p>Who viewed you</p>
          <p className="sidebar_statNumber">2,456</p>
        </div>
        <div className="sidebar_stat">
          <p>Viewed on post</p>
          <p className="sidebar_statNumber">2,445</p>
        </div>
      </div>

      <div className="sidebar_bottom">
        <p>Recent</p>
        {recentItem("reactjs")}
        {recentItem("programming")}
        {recentItem("software engineering")}
        {recentItem("developer")}
      </div>
    </div>
  );
};

export default Sidebar;
