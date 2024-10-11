import React from "react";
import "./Home.css";
import NoticesTabel from "../../components/Notices";
import Header from "../../components/Header";
import Profile from "../../components/Profile/Profile";


const Home = () => {
  return (
    <div className="container">
      <Header />
      <div className="main-content">
        <Profile/>
        <div className="notices">
          <NoticesTabel />
        </div>
      </div>
    </div>
  );
};

export default Home;
