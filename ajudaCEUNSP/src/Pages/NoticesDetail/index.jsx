import React from "react";
import "./NoticesDetail.css";
import Header from "../../components/Header";
import NoticesDetailContent from "../../components/NoticeDetailContent/NoticesDetailContent";
import Profile from "../../components/Profile/Profile";

const NoticesDetail = () => {
  return (
    <div className="container">
      <Header />
      <div className="main-content">
      <Profile/>
        <NoticesDetailContent />
      </div>
    </div>
  );
};

export default NoticesDetail;
