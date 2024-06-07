import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const CustomCalendar = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-lg">
      <Calendar
        onChange={() => setDate}
        value={date}
        tileClassName={({ date, view }) => {
          if (
            date.getDate() === 17 &&
            date.getMonth() === 7 &&
            date.getFullYear() === 2023
          ) {
            return "highlight";
          }
        }}
        className="border-none rounded-lg shadow-none"
      />
    </div>
  );
};

export default CustomCalendar;
