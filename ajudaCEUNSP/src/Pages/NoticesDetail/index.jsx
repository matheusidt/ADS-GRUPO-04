import React from "react";
import "./NoticesDetail.css";
import Header from "../../components/Header";
import NoticesDetailContent from "../../components/NoticeDetailContent/NoticesDetailContent";
import Profile from "../../components/Profile/Profile";
import { database } from "../../utils/fireBaseApp";

const NoticesDetail = () => {
  return (
    <div className="container">
      <Header />
      <div className="main-content">
        <Profile />
        <NoticesDetailContent database={database} />
      </div>
    </div>
  );
};

export default NoticesDetail;
