import React, { useEffect, useState } from "react";
import "./Profile.css";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "../../utils/fireBaseApp";

const Profile = () => {
  const auth = getAuth(app);
  const [currentUser, setCurrentUser] = useState(null);
  auth.onAuthStateChanged((user) => setCurrentUser(user));
  return (
    <div className="profile">
      <div className="user-photo"></div>
      <h2>Centro Universitário em Itu e Salto SP</h2>
      {currentUser ? (
        <>
          <p>{currentUser.displayName}</p>
          <p>CPF: </p>
        </>
      ) : (
        <p>Usuário não está autenticado.</p>
      )}
    </div>
  );
};

export default Profile;
