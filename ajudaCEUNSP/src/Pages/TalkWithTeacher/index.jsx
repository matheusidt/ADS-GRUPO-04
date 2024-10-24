import { child, get, ref } from "firebase/database";
import Header from "../../components/Header";
import "./TalkWithTeacher.css";
import { useEffect, useState } from "react";

const TalkWithTeacher = ({ database }) => {
  const [professores, setProfessores] = useState();

  // Função para buscar os dados do Firebase
  async function getProfessores() {
    const dbRef = ref(database);
    try {
      const snapshot = await get(child(dbRef, `professores/`));
      if (snapshot.exists()) {
        setProfessores(snapshot.val()); // Armazena os dados no estado
      } else {
        console.log("No data available");
      }
    } catch (error) {
      console.error("Error getting data:", error);
    }
  }

  // Chama a função getProfessores ao montar o componente
  useEffect(() => {
    getProfessores();
  }, []);

  return (
    <>
      <Header />
      <div className="containerTalkWith">
        {!professores ? (
          <h1>Carregando lista de professores...</h1>
        ) : (
          <div>
            {Object.keys(professores).map((key, index) => (
              <div key={index}>
                <h1>Professor: {professores[key].nome}</h1>
                <h2>Telefone: {professores[key].telefone}</h2>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default TalkWithTeacher;
