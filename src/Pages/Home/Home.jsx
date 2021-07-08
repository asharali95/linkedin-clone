import React from "react";
import Feed from "../../Components/Feed/Feed";
import Header from "../../Components/Header/Header";
import Sidebar from "../../Components/Sidebar/Sidebar";
import "./Home.css";
const Home = () => {
  return (
    <div className="home">
      <Header />
      <div className="app_body">
        <Sidebar />
        <Feed />
      </div>
    </div>
  );
};

export default Home;
