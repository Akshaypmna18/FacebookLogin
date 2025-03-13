import React, { useState } from "react";

function App() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  function convertDateString(inputDate) {
    const [day, month, year, hour, minute] = inputDate.split(/[- :]/);
    const utcDate = new Date(Date.UTC(year, month - 1, day, hour, minute));
    const offset = -utcDate.getTimezoneOffset();
    const sign = offset >= 0 ? "+" : "-";
    const offsetHours = String(Math.floor(Math.abs(offset) / 60)).padStart(2, "0");
    const offsetMinutes = String(Math.abs(offset) % 60).padStart(2, "0");
    return `${year}-${month}-${day}T${hour}:${minute}:00${sign}${offsetHours}:${offsetMinutes}`;
  }

  const handleConvert = () => {
    if (!date || !time) return alert("Select both date and time!");
    const formattedInput = `${date.split("-").reverse().join("-")} ${time}`;
    alert(convertDateString(formattedInput));
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <input type="date" onChange={(e) => setDate(e.target.value)} />
      <input type="time" onChange={(e) => setTime(e.target.value)} />
      <button onClick={handleConvert}>Convert Date</button>
    </div>
  );
}

export default App;
