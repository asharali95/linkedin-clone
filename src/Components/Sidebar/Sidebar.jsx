import { Avatar } from "@material-ui/core";
import React from "react";
import { connect } from "react-redux";
import "./Sidebar.css";

const Sidebar = ({ auth: { profilePic, name, email } }) => {
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
        <Avatar src={profilePic} className="sidebar_avatar" />
        <h2>{name}</h2>
        <h4>{email}</h4>
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

var mapState = (state) => ({
  auth: state.auth,
});
export default connect(mapState)(Sidebar);
