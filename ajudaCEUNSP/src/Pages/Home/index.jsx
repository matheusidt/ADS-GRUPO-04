import React from "react";
import "./Home.css";
import NoticesTabel from "../../components/Notices";
import Header from "../../components/Header";
import Profile from "../../components/Profile/Profile";
import { database } from "../../utils/fireBaseApp";


const Home = () => {
  return (
    <div className="container">
      <Header />
      <div className="main-content">
        <Profile database={database}/>
        <div className="notices">
          <NoticesTabel database={database}/>
        </div>
      </div>
    </div>
  );
};

export default Home;
