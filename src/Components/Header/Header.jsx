import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import ChatIcon from "@material-ui/icons/Chat";
import NotificationsIcon from "@material-ui/icons/Notifications";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import "./Header.css";
import HeaderOption from "../HeaderOption/HeaderOption";
import { connect } from "react-redux";
import { signOut } from "../../Redux/auth/authActions";

const Header = ({ signOut, auth: { profilePic } }) => {
  return (
    <div className="header">
      <div className="header_left">
        <img
          src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg"
          alt=""
        />

        <div className="header_search">
          <SearchIcon />
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="header_right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccountIcon} title="My network" />
        <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOption Icon={ChatIcon} title="Messaging" />
        <HeaderOption Icon={NotificationsIcon} title="Notifications" />
        <HeaderOption avatar={profilePic} title="me" />
        <button onClick={() => signOut()}>signout</button>
      </div>
    </div>
  );
};

var mapState = (state) => ({
  auth: state.auth,
});
var actions = {
  signOut,
};
export default connect(mapState, actions)(Header);
