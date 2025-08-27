import { useState } from "react";
import React from "react";
const months = [
  "января", "февраля", "марта", "апреля", "мая", "июня",
  "июля", "августа", "сентября", "октября", "ноября", "декабря"
];

const CustomDatePicker = ({ label, prefix = "С", onChange }) => {
  const [date, setDate] = useState("");

  const formatDate = (isoDate) => {
    if (!isoDate) return "Выберите дату";
    const d = new Date(isoDate);
    const day = d.getDate();
    const month = months[d.getMonth()];
    return `${prefix} ${day} ${month}`;
  };

  const handleChange = (e) => {
    setDate(e.target.value);
    onChange?.(e.target.value);
  };

  return (
    <div className="w-full space-y-2">
      <button
        type="button"
        onClick={() => document.getElementById(label).showPicker()}
        className="w-full border border-gray-300 rounded-md px-4 py-3 text-left focus:outline-none "
      >
        {formatDate(date)}
      </button>

      <input
        type="date"
        id={label}
        value={date}
        onChange={handleChange}
        className="hidden"
      />
    </div>
  );
};

export default CustomDatePicker;
