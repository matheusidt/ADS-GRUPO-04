import React from 'react';
import './Schedule.css';

const Schedule = () => {
  const days = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
  const times = ['19:00', '19:45', '20:30', '20:40', '21:25', '22:10'];

  return (
    <div className="schedule-container">
      <div className="time-column">
        {times.map((time, index) => (
          <div key={index} className="time-slot">{time}</div>
        ))}
      </div>
      {days.map((day, index) => (
        <div key={index} className="day-column">
          <div className="day-header">{day}</div>
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
