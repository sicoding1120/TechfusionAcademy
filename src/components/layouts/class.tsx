import React, { useState } from "react";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
import dataClass from "../data/json/class.json";
import CardClass from "../elements/cardClass";
import { useRouter } from "next/router";
const operator = [
  {
    title: "Pilih kelas yang sesuai keinginanmu",
    img: "",
  },
  {
    title: "Selesaikan materi kelas yang dipilih dan kerjakan latihannya",
    img: "",
  },
  {
    title: "Jika sudah mahir kamu bisa langsung mengikuti tantangan",
    img: "",
  },
  {
    title: "Raih SkilPoin atau SkilBadge ketika kamu sudah menyelesaikan kelas",
    img: "",
  },
];

const SaveClass = (items: any) => {
  console.log("oks", items);
  const Class = sessionStorage.getItem("class");
  if (!!Class === false) {
    sessionStorage.setItem("class", JSON.stringify([items]));
  } else {
    const data = JSON.parse(Class);
    const filter = data.filter((item: any) => item.id === items.id);
    console.log("filter", filter);
    if (filter?.length === 0) {
      sessionStorage.setItem("class", JSON.stringify([...data, items]));
    }
  }
  window.location.reload();
};
const UnSaveClass = (items: any) => {
  const hapusClass = sessionStorage.getItem("class");
  if (!!hapusClass === false) {
    return;
  } else {
    const data = JSON.parse(hapusClass);
    const newData = data.filter((item: any) => item.id !== items.id);
    sessionStorage.setItem("class", JSON.stringify(newData));
  }
  window.location.reload();
};
const Class = () => {
  const { query } = useRouter();
  const [rotate, setRotate] = useState(false);
  const [hasil, setHasil] = useState(sessionStorage.getItem("class"));
  const [filter, setFilter] = useState([]);
  const [validation, setValidation] = useState(false);
  const searchHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    if (e.target.value === "" || e.type === "click") {
      setValidation(!validation);
    } else {
      const filterData = dataClass.filter((items) =>
        items.title.toLowerCase().includes(e.target.value.toLowerCase())
      );
      if (filterData.length === 0) {
        setValidation(false);
      } else {
        setFilter(filterData as never[]);
      }
      setValidation(!validation);
    }
  };
  return (
    <main className="w-full h-full py-4">
      <section className="w-full h-full px-6 py-6">
        <div className="w-full h-full  rounded-xl border bg-white">
          <div className="py-4 px-4 border-b border-color-c10">
            <h2 className="font-semibold capitalize text-2xl text-color-c10">
              alur belajar kelas
            </h2>
          </div>
          <div className="grid grid-cols-4 gap-8 py-6 px-6">
            {operator.map((items, index) => (
              <div
                className="w-full h-[300px] flex flex-col gap-4  items-center text-center"
                key={index}
              >
                <Image
                  src={items.img}
                  alt=""
                  width={200}
                  height={200}
                  className="bg-red-500 w-full h-2/3 rounded-2xl"
                />
                <p className="text-md font-semibold">{items.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="w-full h-full px-6 bg-black/5 py-8">
        <div className="flex flex-col gap-6">
          <h1 className="text-4xl font-bold  capitalize text-gray-500">
            class for you
          </h1>
          <div className="border-2 border-gray-500 rounded-xl flex overflow-hidden bg-white items-center">
            <input
              type="text"
              className="p-4 w-full outline-none"
              onChange={searchHandle}
            />
            <div className="w-14 h-full flex justify-center items-center">
              <IoIosArrowDown
                size={24}
                className={`cursor-pointer transition-all ${
                  rotate === true ? "rotate-180" : "rotate-0"
                }`}
                onClick={() => setRotate(!rotate)}
              />
            </div>
          </div>
          <h3 className="text-xl font-semibold text-gray-500">
            kamu memiliki{" "}
            <span className="text-red-500">{dataClass.length}</span> kelas untuk
            anda
          </h3>
        </div>
        <div className="w-full h-full py-4">
          <div className=" w-full h-screen grid grid-cols-3 gap-4">
            {validation === true
              ? filter &&
                filter.map((items: any, index: any) => (
                  <CardClass
                    parse={false}
                    items={items}
                    isHandle={hasil}
                    handleFuncIn={() => SaveClass(items)}
                    handleFuncOut={() => UnSaveClass(items)}
                    link={items.headerTitle}
                    key={index}
                    image={items.img}
                    title={items.title}
                    jmlMateri={items.classDetail?.materials}
                    jmlSkillPoint={items.classDetail?.points}
                    price={items.price}
                  />
                ))
              : dataClass.map((items: any, index: any) => (
                  <CardClass
                    parse={false}
                    items={items}
                    isHandle={hasil}
                    handleFuncIn={() => SaveClass(items)}
                    handleFuncOut={() => UnSaveClass(items)}
                    link={items.headerTitle}
                    key={index}
                    image={items.img}
                    title={items.title}
                    jmlMateri={items.classDetail.materials}
                    jmlSkillPoint={items.classDetail.points}
                    price={items.price}
                  />
                ))}
          </div>
        </div>
      </section>
      <section className="w-full h-full px-6 py-8">
        <div className="flex flex-col gap-6">
          <h1 className="text-4xl font-bold  capitalize text-gray-500">
            class for you
          </h1>
          <h3 className="text-xl font-semibold text-gray-500">
            kamu memiliki
            <span className="text-red-500">{0}</span> kelas untuk anda
          </h3>
        </div>
        <div className="w-full h-full py-4">
          <div className=" w-full h-screen grid grid-cols-3 gap-4">
            {hasil &&
              JSON.parse(hasil).map((items: any, index: any) => (
                <CardClass
                  parse={JSON.parse(hasil)}
                  items={items}
                  isHandle={hasil}
                  handleFuncIn={undefined}
                  handleFuncOut={undefined}
                  link={items.headerTitle}
                  key={index}
                  image={items.img}
                  title={items.title}
                  jmlMateri={items.classDetail.materials}
                  jmlSkillPoint={items.classDetail.points}
                  price={items.price}
                />
              ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Class;
