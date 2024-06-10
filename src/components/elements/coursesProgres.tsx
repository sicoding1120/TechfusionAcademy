import React from "react";
import { FaPlus } from "react-icons/fa";

const courses = [
  {
    icon: "🎨",
    title: "3D Design Course",
    instructor: "Michael Androw",
    remaining: "8h 45 min",
    progress: 45,
    bgColor: "bg-purple-100",
  },
  {
    icon: "💻",
    title: "Development Basics",
    instructor: "Natalia Varman",
    remaining: "10h 12 min",
    progress: 75,
    bgColor: "bg-red-100",
  },
];

const CoursesProgres = () => {
  return (
    <div className="p-4 bg-gray-100 rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">{"Course You're Taking"}</h2>
        <div className="flex items-center">
          <select title="select" className="p-2 border rounded mr-2">
            <option>Active</option>
            <option>Completed</option>
          </select>
          <button title="button" className="bg-green-500 text-white p-2 rounded-full">
            <FaPlus />
          </button>
        </div>
      </div>
      <ul>
        {courses.map((item, index) => (
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
                <p className="text-gray-500">{item.instructor}</p>
                <p className="text-gray-500">Remaining: {item.remaining}</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="mr-2">
                <span className="text-gray-500">{item.progress}%</span>
              </div>
              <div className="w-8 h-8">
                <svg className="w-full h-full" viewBox="0 0 36 36">
                  <path
                    className="text-gray-300"
                    d="M18 2.0845
                          a 15.9155 15.9155 0 0 1 0 31.831
                          a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="text-green-500"
                    d="M18 2.0845
                          a 15.9155 15.9155 0 0 1 0 31.831"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeDasharray={`${item.progress}, 100`}
                  />
                </svg>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CoursesProgres;
