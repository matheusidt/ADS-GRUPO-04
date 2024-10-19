import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { child, get, ref } from "firebase/database";
import "./NoticeDetailContent.css";

const NoticesDetailContent = ({ database }) => {
  const { id } = useParams(); // Pega o ID do aviso a partir da URL
  const [notice, setNotice] = useState(null);

  // Função para buscar o aviso específico com base no ID
  async function getAvisoDetalhado() {
    try {
      const dbRef = ref(database);
      const snapshot = await get(child(dbRef, `avisos/${id}`)); // Busca o aviso pelo ID no banco de dados
      if (snapshot.exists()) {
        setNotice(snapshot.val()); // Define o aviso no estado
      } else {
        console.log("No data available");
      }
    } catch (error) {
      console.error("Error getting data:", error);
    }
  }

  useEffect(() => {
    getAvisoDetalhado(); // Busca os dados quando o componente é montado
  }, [id]);

  if (!notice) {
    return <p>Carregando aviso...</p>; // Exibe uma mensagem enquanto os dados estão sendo carregados
  }

  return (
    <div className="notice-detail">
      <table className="notice-header">
        <tbody>
          <tr>
            <td>{notice.data}</td> {/* Data do aviso */}
            <td>{notice.text}</td> {/* Texto do aviso */}
            <td>{notice.remetente}</td> {/* Remetente do aviso */}
          </tr>
        </tbody>
      </table>

      <div className="notice-content">
        <p>{notice.description}</p> {/* Detalhes adicionais do aviso (se houver) */}
      </div>

      <div className="notice-footer">
        <Link to="/">
          <button className="back-button">VOLTAR</button>
        </Link>
      </div>
    </div>
  );
};

export default NoticesDetailContent;
