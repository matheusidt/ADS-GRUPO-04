import React from "react";
import Header from "../../components/Header";
import Schedule from "../../components/Schedule";
import { database } from "../../utils/fireBaseApp";

const SchedulePage = () => {
  return (
    <>
      <div className="HeaderContainer">
        <Header />
      </div>
      <div className="ScheduleContainer">
        <Schedule database={database} />
      </div>
    </>
  );
};

export default SchedulePage;
