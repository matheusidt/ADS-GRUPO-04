import React, { useEffect, useState } from "react";
import "./Profile.css";
import { child, get, ref } from "firebase/database";

const Profile = ({ database }) => {
  const [currentUser, setCurrentUser] = useState(null);
  async function getUser() {
    const dbRef = ref(database);
    try {
      const snapshot = await get(child(dbRef, `users/1`));
      if (snapshot.exists()) {
        setCurrentUser(snapshot.val()); // Armazena os dados no estado
        console.log(snapshot.val());
      } else {
        console.log("No data available");
      }
    } catch (error) {
      console.error("Error getting data:", error);
    }
  }

  useEffect(() => {
    getUser();
  }, []);
  return (
    <div className="profile">
      <div className="user-photo"></div>
      {currentUser ? (
        <>
          <h2>Centro Universitário em Itu e Salto SP</h2>

          <p>{currentUser.username}</p>
          <p>CPF: {currentUser.cpf}</p>
          <p>Email: {currentUser.email}</p>
          <p>RGM: {currentUser.rgm}</p>
        </>
      ) : (
        <p>Carregando Perfil...</p>
      )}
    </div>
  );
};

export default Profile;
