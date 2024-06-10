import React from "react";
import { FaPlus } from "react-icons/fa";

const assignments = [
  {
    icon: "📊",
    title: "Methods of data",
    date: "02 July, 10:00 AM",
    status: "In progress",
    statusColor: "bg-blue-100 text-blue-600",
    bgColor: "bg-purple-100",
  },
  {
    icon: "📈",
    title: "Market Research",
    date: "14 June, 12:45 AM",
    status: "Completed",
    statusColor: "bg-green-100 text-green-600",
    bgColor: "bg-green-100",
  },
  {
    icon: "📋",
    title: "Data Collection",
    date: "12 May, 11:00 AM",
    status: "Upcoming",
    statusColor: "bg-yellow-100 text-yellow-600",
    bgColor: "bg-yellow-100",
  },
  {
    icon: "📋",
    title: "Data Collection",
    date: "12 May, 11:00 AM",
    status: "Upcoming",
    statusColor: "bg-yellow-100 text-yellow-600",
    bgColor: "bg-yellow-100",
  },
];

const NotePad = () => {
  return (
    <div className="p-4 bg-gray-100 rounded-lg ">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold capitalize">note pad</h2>
        <button title="button" className="bg-green-500 text-white p-2 rounded-full">
          <FaPlus />
        </button>
      </div>
      <ul>
        {assignments.slice(0,3).map((item, index) => (
          <li
            key={index}
            className="flex flex-col items-start gap-4 justify-between p-4 mb-2 bg-white rounded-lg shadow-sm"
          >
            <div className="flex items-center">
              <div
                className={`w-12 h-12 flex items-center justify-center rounded-full ${item.bgColor}`}
              >
                <span className="text-2xl">{item.icon}</span>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-gray-500">{item.date}</p>
              </div>
            </div>
            <span className={`px-3 py-1 rounded-full ${item.statusColor}`}>
              {item.status}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotePad;
