import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import CourseCardNew from "../elements/cardClassNew";
import DataClass from "../data/json/class.json";
import { useRouter } from "next/router";

const ClassNew = () => {
  const [keyword, setKeyword] = useState("")
  const router = useRouter()
  const kategori = [
    {
      title: "all courses",
    },
    {
      title: "free",
    },
    {
      title: "popular",
    },
    {
      title: "expert",
    },
    {
      title: "basic",
    },
    {
      title: "regular",
    },
  ];

  return (
    <main className="w-full h-full flex flex-col gap-4 px-4 mt-4">
      <section className="w-full md:h-[50vh] h-full bg-color-c1 flex flex-col md:flex-row rounded-lg p-6">
        <div className="md:w-1/2 w-full h-full flex flex-col gap-8 py-6 justify-between">
          <h2 className="md:text-5xl capitalize text-3xl text-center md:text-start md:w-11/12 font-bold">
            what do you want to learn today ?
          </h2>
          <div className="w-full h-[62px] bg-white rounded-lg flex justify-between">
            <div className="w-11/12 h-full">
              <input
                type="text"
                className="w-full h-full px-4 py-2 outline-none rounded-lg"
                placeholder="search class"
                onChange={(e) => setKeyword(e.target.value)}
              />
            </div>
            <div className="md:w-1/12 h-full p-1" onClick={() => router.push(`/search/class/${keyword}`)}>
              <div className="w-full h-full px-4 py-2 md:px-0 md:py-0 bg-color-c9/80 flex justify-center items-center rounded-md cursor-pointer active:scale-90 transition-all">
                <IoSearch className="text-white" size={30} />
              </div>
            </div>
          </div>
          <div className="w-full flex gap-2 justify-center md:justify-start">
            <p>suggestion |</p>
            <p className="underline text-color-c2 cursor-pointer">react js</p>
            <p className="underline text-color-c2 cursor-pointer">react js</p>
            <p className="underline text-color-c2 cursor-pointer">react js</p>
          </div>
        </div>
        <div className="w-1/2 h-full"></div>
      </section>
      <section className="w-full h-full flex flex-col gap-10 md:px-4 mt-8">
        <div className="w-full flex flex-col gap-8">
          <h2 className="text-5xl capitalize text-center md:text-start">
            recommended courses
          </h2>
          <div className="md:flex grid grid-cols-2 gap-4">
            {kategori.map((items, index) => (
              <button
                className={`px-6 py-2 text-lg rounded-lg ${
                  index === 0
                    ? "bg-green-500 text-white"
                    : "border-2 border-color-c2 text-color-c2"
                } font-semibold`}
                key={index}
              >
                {items.title}
              </button>
            ))}
          </div>
        </div>
        <div className="w-full md:pl-2 md:pr-8">
          <div className="grid md:grid-cols-3 md:gap-8 gap-6">
            {DataClass.map((items, index) => (
              <CourseCardNew
                title={items.title}
                key={index}
                subtitle={`learn the basic ${items.title}`}
                price={items.price}
                image={items.img}
                kategori={items.kategori.map((items: any) => items.title)}
              />
            ))}
          </div>
          <div className="w-full flex justify-center md:mt-8 mt-8">
            <button className="w-full btn md:w-1/3 bg-green-500 hover:bg-green-500 text-white text-xl"> see all</button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ClassNew;
