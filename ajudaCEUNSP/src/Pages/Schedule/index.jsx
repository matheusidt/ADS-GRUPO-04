import React from "react";
import Header from "../../components/Header";
import Schedule from "../../components/Schedule";

const SchedulePage = () => {
  return (
    <>
      <div className="HeaderContainer">
        <Header />
      </div>
      <div className="ScheduleContainer">
        <Schedule />
      </div>
    </>
  );
};

export default SchedulePage;
