import React from "react";
import { FaArrowRight } from "react-icons/fa";

const scheduleItems = [
  {
    icon: "🗂️",
    title: "join all class",
    description: "Lecture - Class",
    bgColor: "bg-red-100",
  },
  {
    icon: "💡",
    title: "increase knowledge",
    description: "Group - Test",
    bgColor: "bg-purple-100",
  },
  {
    icon: "🎨",
    title: "paint the work",
    description: "Group - Test",
    bgColor: "bg-green-100",
  },
  {
    icon: "🖌️",
    title: "",
    description: "Lecture - Test",
    bgColor: "bg-yellow-100",
  },
];

const DailySchedule = () => {
  return (
    <div className="px-4 bg-white rounded-lg">
      <h2 className="text-xl font-bold mb-4">Daily Schedule</h2>
      <ul>
        {scheduleItems.map((item, index) => (
          <li
            key={index}
            className="flex items-center justify-between p-4 mb-2 bg-white rounded-lg"
          >
            <div className="flex items-center">
              <div
                className={`w-12 h-12 flex items-center justify-center rounded-full ${item.bgColor}`}
              >
                <span className="text-2xl">{item.icon}</span>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-gray-500">{item.description}</p>
              </div>
            </div>
            <div className="p-3 transition-all bg-transparent hover:bg-gray-100 cursor-pointer rounded-full">
              <FaArrowRight className="text-gray-400 rounded-lg" />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DailySchedule;
