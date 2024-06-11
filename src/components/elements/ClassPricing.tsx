import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import Modal from "react-modal"; // removed because it's not being used
import PopUp from "./PopUp";
import dataClass from "../data/json/class.json";
import { FaX } from "react-icons/fa6";

Modal.setAppElement("#__next");
console.log(dataClass);
// const courses = [
//   {
//     icon: "🎨",
//     title: "3D Design Course",
//     instructor: "Michael Androw",
//     remaining: "8h 45 min",
//     progress: "rp 450.000",
//     bgColor: "bg-purple-100",
//   },
//   {
//     icon: "💻",
//     title: "Development Basics",
//     instructor: "Natalia Varman",
//     remaining: "10h 12 min",
//     progress: "rp. 500.000",
//     bgColor: "bg-red-100",
//   },
// ];

const CoursesPricing = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [filterData, setFilterData] = useState([]);

  function openModal(item: any) {
      console.log(item);
      const filterData1:any = dataClass.filter((items) => items.title === item.title)
      setIsOpen(true);
      setFilterData(filterData1)
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div className="p-4 bg-white dark:bg-color-c7 rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold capitalize">{"paket per kelas"}</h2>
        <div className="flex items-center">
          <select title="select" className="p-2 border rounded mr-2">
            <option>Active</option>
            <option>Completed</option>
          </select>
          <button
            title="button"
            className="bg-green-500 text-white p-2 rounded-full"
          >
            <FaPlus />
          </button>
        </div>
      </div>
      <ul>
        {dataClass.map((item: any, index: any) => (
          <li
            key={index}
            onClick={() => openModal(item)}
            className="flex items-center justify-between p-4 mb-2 bg-white dark:bg-color-c7 border-2 border-color-c2 rounded-lg cursor-pointer active:scale-95 transition-all"
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
                <span className="text-green-500 capitalize text-xl font-bold">
                  rp {item.price}
                </span>
              </div>
              {/* <div className="w-8 h-8">
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
                </div> */}
            </div>
          </li>
        ))}
      </ul>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
        className="relative bg-white rounded-lg shadow-lg w-full max-w-md p-4"
        contentLabel="Example Modal"
      >
        <button
          onClick={closeModal}
          className="w-full flex justify-end text-2xl px-8 relative top-4 text-color-c2"
          title="exit"
        >
          <FaX size={20} />
        </button>
        <PopUp title="will you buy this class ?" btnLeft="yes" btnRight="no" linkBtnLeft={`/pre/courses/class/get/${filterData.map(
          (item: any) => item.title
        )}/checkout`} />
      </Modal>
    </div>
  );
};

export default CoursesPricing;
