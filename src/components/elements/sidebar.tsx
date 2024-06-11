import Link from "next/link";
import React from "react";
import {
  FaHome,
  FaBook,
  FaChalkboardTeacher,
  FaEnvelope,
  FaBell,
  FaCalendarAlt,
  FaUsers,
  FaCog,
  FaArrowRight,
  FaMobileAlt,
} from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="h-full w-full bg-color-c7 text-white hidden md:flex flex-col justify-between rounded-xl px-3 py-3">
      <div>
        <div className="flex items-center mb-8">
          <Link href={"/"} className="text-3xl font-bold">Techfusion</Link>
        </div>
        <ul>
          <li className="mb-4">
            <a
              href="#"
              className="flex items-center p-2 bg-green-400 text-gray-900 rounded-lg"
            >
              <FaHome className="mr-3" />
              Dashboard
            </a>
          </li>
          <li className="mb-4">
            <a href="#" className="flex items-center p-2">
              <FaBook className="mr-3" />
              My Courses
            </a>
          </li>
          <li className="mb-4">
            <a href="#" className="flex items-center p-2">
              <FaChalkboardTeacher className="mr-3" />
              My Classes
            </a>
          </li>
          <li className="mb-4">
            <a href="#" className="flex items-center p-2">
              <FaEnvelope className="mr-3" />
              Messages
            </a>
          </li>
          <li className="mb-4">
            <a href="#" className="flex items-center p-2 relative">
              <FaBell className="mr-3" />
              Notifications
              <span className="absolute right-0 top-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                2
              </span>
            </a>
          </li>
          <li className="mb-4">
            <a href="#" className="flex items-center p-2">
              <FaCalendarAlt className="mr-3" />
              Calendars
            </a>
          </li>
          <li className="mb-4">
            <a href="#" className="flex items-center p-2">
              <FaUsers className="mr-3" />
              Community
            </a>
          </li>
          <li className="mb-4">
            <a href="#" className="flex items-center p-2">
              <FaCog className="mr-3" />
              Settings
            </a>
          </li>
        </ul>
      </div>
      <div className="bg-green-400 text-gray-900 p-4 rounded-lg flex items-center justify-between">
        <div className="flex items-center">
          <FaMobileAlt className="mr-3" />
          <div>
            <p className="font-semibold">Download our mobile app</p>
          </div>
        </div>
        <FaArrowRight />
      </div>
    </div>
  );
};

export default Sidebar;
