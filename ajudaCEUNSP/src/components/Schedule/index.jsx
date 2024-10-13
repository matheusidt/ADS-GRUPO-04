import React, { useEffect, useState } from "react";
import "./Schedule.css";
import { child, get, ref } from "firebase/database";

const Schedule = ({ database }) => {
  const days = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta"];
  const times = ["19:00", "20:30"];

  const [scheduleData, setScheduleData] = useState(null);

  // Função para buscar os dados do Firebase
  async function getHorarios() {
    const dbRef = ref(database);
    try {
      const snapshot = await get(child(dbRef, `horarios`));
      if (snapshot.exists()) {
        setScheduleData(snapshot.val()); // Armazena os dados no estado
        console.log(snapshot.val());
      } else {
        console.log("No data available");
      }
    } catch (error) {
      console.error("Error getting data:", error);
    }
  }

  // Chama a função getHorarios ao montar o componente
  useEffect(() => {
    getHorarios();
  }, []);
  return (
    <div className="schedule-container">
      <div className="schedule-inside">
        {days.map((day, index) => (
          <div key={index} className="day-column">
            <div className="day-header">
              <h1>{day}</h1>
            </div>
            {times.map((time, i) => (
              <div key={i} className="class-slot">
                {scheduleData &&
                scheduleData[day] &&
                scheduleData[day][time] ? (
                  <>
                    <div className="subject">
                      {scheduleData[day][time].materia}
                    </div>
                    <div className="details">
                      <div>Professor: {scheduleData[day][time].professor}</div>
                      <div>Turma: {scheduleData[day][time].turma}</div>
                      <div>Curso: {scheduleData[day][time].curso}</div>
                    </div>
                  </>
                ) : (
                  <div>Sem aula</div> // Caso não haja dados para esse dia/horário
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Schedule;
