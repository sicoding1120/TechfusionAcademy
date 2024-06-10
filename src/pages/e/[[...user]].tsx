/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Dashboard from "@/components/template/dashboard";
import { CiSearch } from "react-icons/ci";
import { IoBackspaceOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa6";
import dataCardDashboard from "@/components/data/json/dataCardDashboard.json";
import Chart from "@/components/elements/Chart";
import Calendar from "react-calendar";
import DailySchedule from "@/components/elements/schedule";
import NotePad from "@/components/elements/notepad";
import CoursesProgres from "@/components/elements/coursesProgres";

const Dynamic = () => {
  const [selectuser, setSelectuser] = useState<any>(null);
  const [dataUserUpdate, setDataUserUpdate] = useState<any[]>([]);
  const router = useRouter();
  const { query } = router;

  useEffect(() => {
    if (query.user) {
      const userId = query.user[2];
      const User = localStorage.getItem(`user_${userId}`);
      if (User) {
        setSelectuser(JSON.parse(User as never));
      }
    }
  }, [query.user]);

  useEffect(() => {
    if (selectuser) {
      setDataUserUpdate(selectuser);
    }
  }, [selectuser]);


  return (
    <Dashboard>
      <HeadTopic dataUserUpdate={dataUserUpdate} />
      <div className="w-full flex flex-col md:flex-row gap-4 md:pr-4">
        <Topic />
        <AsideTopic />
      </div>
    </Dashboard>
  );
};

const HeadTopic = ({ dataUserUpdate }: { dataUserUpdate: any }) => {
    return (
    <header className="w-full md:h-24 h-full px-4 md:py-4 py-8 flex justify-between items-center">
      {dataUserUpdate.map((item: any, index: any) => (
        <div key={index} className="flex flex-col md:flew-row gap-4 md:gap-0 justify-between w-full items-center">
          <div>
            <h2 className="text-2xl capitalize font-semibold">
              {" "}
              wellcome back {item.name}
            </h2>
          </div>
          <div className="flex gap-4 justify-center items-center">
            <SearchBar />
            <div className="flex justify-center items-center">
              <div className="w-10 h-10 bg-color-c2  text-white flex justify-center items-center rounded-full">
                <span className="text-3xl uppercase">{item.name.at(0)}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </header>
  );
};

const SearchBar = () => {
  return (
    <form className="form relative flex bg-white rounded-full ">
      <button
        className="absolute left-2 -translate-y-1/2 top-1/2 p-1"
        title="btn"
      >
        <CiSearch size={20} />
      </button>
      <input
        className="input rounded-full px-8 py-3 bg-white border-2 border-transparent focus:outline-none focus:border-color-c2 placeholder-gray-400 transition-all duration-300"
        placeholder="Search..."
        required
        type="text"
      />
      <button
        type="reset"
        className="absolute right-3 -translate-y-1/2 top-1/2 p-1"
        title="btn"
      >
        <IoBackspaceOutline size={20} />
      </button>
    </form>
  );
};

const Topic = () => {
  const [limit, setLimit] = useState(false);
  const item = limit ? 6 : 3;
  const handleViewAll = () => {
    setLimit(!limit);
  };
  return (
    <section className="md:w-9/12 h-full md:pb-4 md:pl-4 px-4 md:px-0">
      <div className=" w-full h-full flex flex-col gap-4 py-4">
        <div className="flex justify-between md:pr-4">
          <h2 className="capitalize text-xl ">new courses</h2>
          <p
            className={`capitalize text-lg text-color-c2 hover:text-blue-400 transition-all underline cursor-pointer`}
            onClick={handleViewAll}
          >
            {limit ? "hide all" : "view all"}
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {dataCardDashboard.slice(0, item).map((items, index) => (
            <CardNewCourses
              title={items.title}
              key={index}
              lessons={items.lessons}
              rating={items.ratting}
              type={items.type}
            />
          ))}
        </div>
        <div className="w-full h-full flex flex-col gap-6">
          <div className="w-full h-full">
            <Chart />
          </div>
          <div className="flex flex-col md:flex-row gap-4 w-full h-full">
            <div className="md:w-1/2 flex flex-col justify-center items-center bg-white rounded-lg md:p-4 py-2">
              <h3 className="text-xl font-bold px-2 text-center">calendar</h3>
              <Calendar />
            </div>
            <div className="md:w-1/2 h-full bg-white rounded-lg p-4">
              <DailySchedule />
            </div>
          </div>
          <div className="w-full h-full">
            <CoursesProgres/>
          </div>
        </div>
      </div>
    </section>
  );
};
const CardNewCourses = ({ title, lessons, rating, type, key }: any) => {
  return (
    <div
      className="w-full bg-white h-full rounded-2xl flex flex-col p-2 cursor-pointer"
      key={key}
    >
      <div className=" w-full h-1/2 px-2 pt-2">
        <div className="w-full h-full flex justify-start gap-4 items-center">
          <div className="rounded-full w-16 h-16 bg-blue-200"></div>
          <div className="flex flex-col gap-1">
            <h2 className="capitalize text-2xl font-semibold">{title}</h2>
            <p className="text-sm text-gray-400">{lessons} lessons</p>
          </div>
        </div>
      </div>
      <div className="w-full flex ">
        <div className="w-2/3 h-full px-4 py-4 flex flex-col gap-2">
          <h3 className="capitalize font-semibold text-sm text-gray-400">
            rate
          </h3>
          <div className="flex gap-2 items-center">
            <FaStar size={20} className="text-yellow-400" />
            <span className="font-bold">{rating}</span>
          </div>
        </div>
        <div className="w-full h-full px-4 py-4 flex flex-col gap-2">
          <h3 className="capitalize font-semibold text-sm text-gray-400">
            type
          </h3>
          <p className="text-md font-semibold capitalize">{type}</p>
        </div>
      </div>
    </div>
  );
};

const AsideTopic = () => {
  const router = useRouter();
  return (
    <section className="md:w-3/12 w-full px-4 md:px-0 h-full flex flex-col gap-4 md:sticky md:top-2">
      <div className="w-full h-[232px] bg-bgCard bg-center bg-cover rounded-2xl flex p-2">
        <div className="w-1/2 h-full px-2 py-2 flex flex-col justify-between">
          <h2 className="uppercase font-semibold text-white text-sm">
            techfusion
          </h2>
          <div className="flex flex-col gap-2">
            <h4 className="text-white text-xl font-semibold capitalize">
              go premium
            </h4>
            <p className="text-sm text-white">
              nesciunt, delectus ea dolorem debitis
            </p>
          </div>
          <button
            onClick={() => router.push("/pre/e/premium/checkout")}
            className=" relative w-[150px] py-1 px-2 flex justify-center items-center capitalize rounded-full border-2 hover:bg-color-c2 transition-all border-color-c2 text-white"
          >
            get access
          </button>
        </div>
        <div className="w-1/2 h-full"></div>
      </div>
      <div className="w-full h-full rounded-lg">
        <NotePad/>
      </div>
    </section>
  );
};
export default Dynamic;
