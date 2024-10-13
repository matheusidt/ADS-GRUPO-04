import React from "react";
import "./Profile.css";
import { getAuth } from "firebase/auth";
import { app } from "../../utils/fireBaseApp";
const Profile = () => {
  const user = getAuth(app).currentUser;
  return (
    <div className="profile">
      <div className="user-photo"></div>
      <h2>Centro Universitário em Itu e Salto SP</h2>
      <p>{user.displayName}</p>
      <p>CPF: CPF</p>
    </div>
  );
};

export default Profile;
