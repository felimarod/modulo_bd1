import React, { useState, useEffect } from "react";
import dayjs from "dayjs";
import "dayjs/locale/es"; // Importa el idioma español

const DateTimeDisplay: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(dayjs());

  dayjs.locale("es");

  useEffect(() => {
    // Actualizar el tiempo cada segundo
    const interval = setInterval(() => {
      setCurrentTime(dayjs());
    }, 1000);

    // Limpiar el intervalo al desmontar el componente
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontFamily: '"Roboto","Helvetica","Arial", sans-serif',
      }}
    >
      {currentTime.format("dddd, D [de] MMMM [del] YYYY, h:mm A")}
    </div>
  );
};

export default DateTimeDisplay;
