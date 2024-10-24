import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { child, get, ref } from "firebase/database";

const NoticeTable = ({ database }) => {
  const [warnsData, setWarnsData] = useState(null);

  // Função para buscar os dados do Firebase
  async function getAvisos() {
    try {
      const dbRef = ref(database);
      const snapshot = await get(child(dbRef, `avisos`));
      if (snapshot.exists()) {
        setWarnsData(snapshot.val()); // Armazena os dados no estado
        // console.log(snapshot.val());
      } else {
        console.log("No data available");
      }
    } catch (error) {
      console.error("Error getting data:", error);
    }
  }

  // Chama a função getAvisos ao montar o componente
  useEffect(() => {
    getAvisos();
  }, []);

  if (!warnsData) {
    return <p>Carregando avisos...</p>; // Exibe uma mensagem enquanto os dados estão sendo carregados
  }

  return (
    <table className="notice-table">
      <thead>
        <tr>
          <th>Data</th>
          <th>Aviso</th>
          <th>Remetente</th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(warnsData).map((key) => (
          <tr key={key}>
            <td>{warnsData[key].data}</td>
            <td>
              <Link to={`/OpenWarn/${warnsData[key].id}`}>{warnsData[key].text}</Link>
            </td>
            <td>{warnsData[key].remetente}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default NoticeTable;
