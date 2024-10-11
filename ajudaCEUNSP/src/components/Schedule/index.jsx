import React from "react";
import "./Schedule.css";


const Schedule = () => {
  const days = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
  const times = ["19:00", "20:30", "21:00"];

  return (
    <div className="schedule-container">
      {days.map((day, index) => (
        <div key={index} className="day-column">
          <div className="day-header">
            <h1>{day}</h1>
          </div>
          {times.map((_, i) => (
            <div key={i} className="class-slot">
              <div className="subject">Matéria</div>
              <div className="details">
                <div>Professor</div>
                <div>Turma</div>
                <div>Curso</div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Schedule;
