import React from "react";
import "./NoticesDetail.css";
import Header from "../../components/Header";
import Profile from "../../components/Profile";
import NoticesDetailContent from "../../components/NoticeDetailContent/NoticesDetailContent";

const NoticesDetail = () => {
  return (
    <div className="container">
      <Header />
      <div className="main-content">
        <Profile />
        <NoticesDetailContent />
      </div>
    </div>
  );
};

export default NoticesDetail;
