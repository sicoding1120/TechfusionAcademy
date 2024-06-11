/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect, useState } from "react";
import { Kanit } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import DataBootcamp from "../data/json/cardBootcamp.json";
import DataCard from "../data/json/cardRandom.json";
import dataRandom from "../data/json/dataRandom.json";
import CardCourses from "../elements/cardCourses";
import dataClass from "../data/json/class.json";
import { IoIosArrowDown } from "react-icons/io";
import CardClass from "../elements/cardClass";

const kanit = Kanit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600"],
});

const textCourses = [
  {
    title: "Mini Bootcamp",
    img: "/TechfusionAcademy/assets/icons/icon-bootcamp.png",
  },
  {
    title: "Bootcamp",
    img: "/TechfusionAcademy/assets/icons/icon-bootcamp2.png",
  },
];
const icons = [
  {
    src: "/TechfusionAcademy/assets/icons/icons-courses1.png",
    id: 1,
  },
  {
    src: "/TechfusionAcademy/assets/icons/icons-courses2.png",
    id: 2,
  },
  {
    src: "/TechfusionAcademy/assets/icons/icons-courses3.png",
    id: 3,
  },
  {
    src: "/TechfusionAcademy/assets/icons/icons-courses4.png",
    id: 4,
  },
];

const operator = [
  {
    title: "Pilih kelas yang sesuai keinginanmu",
    img: "/TechfusionAcademy/assets/alurBljr/step1.png",
  },
  {
    title: "Selesaikan materi kelas yang dipilih dan kerjakan latihannya",
    img: "/TechfusionAcademy/assets/alurBljr/step2.png",
  },
  {
    title: "Jika sudah mahir kamu bisa langsung mengikuti tantangan",
    img: "/TechfusionAcademy/assets/alurBljr/step3.png",
  },
  {
    title: "Raih SkilPoin atau SkilBadge ketika kamu sudah menyelesaikan kelas",
    img: "/TechfusionAcademy/assets/alurBljr/step4.png",
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

const Courses = () => {
  const [bootcamp, setBootcamp] = useState(false);
  const [color, setColor] = useState(false);
  const [id, setId] = useState(1);
  const [validation, setValidation] = useState(false);
  const [filter, setFilter] = useState([]);
  const [rotate, setRotate] = useState(false);
  const [hasil, setHasil] = useState(sessionStorage.getItem("class"));

  const click = () => {
    setBootcamp(!bootcamp);
    setColor(!color);
  };
  const onclick = (items: any) => {
    setId(items.id);
  };
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
  const [text, setText] = useState("");
  const textsToType: any = ["web developer", "UI/UX design", "app mobile"];
  const typingSpeed = 180; // Kecepatan mengetik (dalam milidetik)
  const intervalTime = 10; // Waktu antara perubahan teks (dalam milidetik)

  useEffect(() => {
    let index = 0;
    let textIndex = 0;

    const interval = setInterval(() => {
      setText(textsToType[textIndex].substring(0, index));

      if (++index > textsToType[textIndex].length) {
        setTimeout(() => {
          index = 0;
          textIndex = (textIndex + 1) % textsToType.length;
        }, intervalTime);
      }
    }, typingSpeed);
    return () => clearInterval(interval);
  }, []);
  return (
    <main className={`${kanit.className} dark:bg-color-c7 dark:text-color-c4`}>
      <header className="w-full md:h-screen h-[70vh] bg-bgContentCourses md:px-14 bg-fixed md:pb-36">
        <div className="p-8  w-full h-full flex flex-col justify-center items-center md:gap-4 gap-6">
          <h1 className="font-bold text-white md:text-5xl text-4xl">
            Mulai Belajar Skill
          </h1>
          <div className="md:px-6 md:py-4 bg-bgText text-green-900 text-4xl bg-no-repeat rounded-2xl px-3 py-2">
            {text}
          </div>
          <h4 className="font-bold text-white md:text-6xl text-md">
            Jadilah Talenta Digital Handal
          </h4>
          <p className="text-white md:w-[700px] text-center">
            Mulai Belajar Keterampilan digital baru, tambah portofolio, dan
            mulai raih karir impian kamu untuk jadi talenta digital handal
            bersama TECHFUSION.
          </p>
          <Link href={"/auth/login"} className="btn md:px-36 bg-bgButton border-none text-green-900 px-24 py-4">
            Join With Us
          </Link>
        </div>
      </header>
      <section className="w-full md:w-[150vh] md:h-[20vh] h-full md:absolute md:z-[999] md:top-[105vh] md:left-[140px] pt-6 flex justify-center items-center">
        <div className="w-full h-full flex justify-center items-center md:relative">
          <div className="md:flex items-center justify-between md:py-4 gap-4 w-full px-14 md:absolute hidden">
            <div className="w-[130vh] h-[38vh] bg-gray-300 rounded-2xl shadow-2xl">
              <Image
                src={"/TechfusionAcademy/assets/iklan-content/iklan-1.png"}
                alt={""}
                width={400}
                height={400}
                className="w-full h-full"
              />
            </div>
          </div>
          <div className="w-full h-[30vh] flex flex-col gap-2 md:hidden px-4">
            <div className="w-full h-[15vh] bg-gray-300 rounded-2xl overflow-hidden">
              <Image
                src={"/TechfusionAcademy/assets/iklan-content/iklan-1.png"}
                alt={""}
                width={400}
                height={400}
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="w-full md:h-[60vh] h-[30vh] bg-bgCourses md:pt-48 bg-cover bg-no-repeat">
        <div className="w-full h-full md:p-8 px-4 flex justify-center items-center flex-col gap-6 text-center">
          <h1 className="md:text-5xl text-2xl font-semibold">
            Bootcamp Options for You
          </h1>
          <p className="md:text-2xl text-xl">
            Improve your digital skills by joining a bootcamp at TECHFUSION.
          </p>
        </div>
      </section>
      <section className="w-full h-full px-6 py-6">
        <div className="w-full h-full  rounded-xl border-2 dark:border-color-c2 bg-white dark:bg-color-c7">
          <div className="py-4 px-4 border-b border-color-c10 dark:border-color-c2">
            <h2 className="font-semibold capitalize text-2xl text-color-c10 dark:text-color-c2">
              alur belajar kelas
            </h2>
          </div>
          <div className="grid md:grid-cols-4 grid-cols-1 md:gap-8 py-6 px-6">
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
      <section className="w-full h-full py-4 flex flex-col md:px-14 justify-center items-center gap-14 px-4">
        <div className="flex flex-col w-full h-full justify-center items-center">
          <div className="flex justify-center items-end md:gap-4 gap-2 md:p-3 p-2 bg-color-c10 md:w-[360px] w-[280px] rounded-2xl relative top-8">
            {textCourses.map((items, index) => (
              <button
                key={index}
                className={`flex md:gap-3 gap-2 items-center md:px-4 py-2 px-2 rounded-xl bg-color-c9/70 text-md text-color-c10 hover:bg-color-c9 transition-all text-sm md:text-md`}
                onClick={click}
              >
                <Image src={items.img} alt={""} width={22} height={22} />
                {items.title}
              </button>
            ))}
          </div>
          <div className="w-full h-full bg-color-c9 flex flex-col md:flex-row rounded-3xl">
            <div className="md:w-2/5 w-full h-full md:px-14 md:py-24 px-8 py-14 flex flex-col gap-8">
              <h2 className="text-4xl text-color-c10">
                {bootcamp === true
                  ? DataBootcamp.data.type.bootcamp.title
                  : DataBootcamp.data.type.miniBootcamp.title}
                {/* The Solution for Super Fast and Precise Learning! */}
              </h2>
              <p className="text-color-c10 text-xl">
                {bootcamp === true
                  ? DataBootcamp.data.type.bootcamp.subTitle
                  : DataBootcamp.data.type.miniBootcamp.subTitle}
              </p>
            </div>
            <div className="md:w-3/5 w-full h-full py-14">
              <div className="w-full h-full flex flex-col md:flex-row gap-8 md:px-14 px-6">
                {bootcamp === true
                  ? DataBootcamp.data.type.bootcamp.card.map((items, index) => (
                      <div
                        className="w-full h-full bg-white rounded-2xl overflow-hidden shadow-xl"
                        key={index}
                      >
                        <Image
                          src={items.img}
                          alt={""}
                          width={400}
                          height={400}
                          className="w-full h-2/5 "
                        />
                        <div className="w-full h-3/5 px-6 flex flex-col justify-center items-center py-4 gap-16">
                          <h4 className="text-xl dark:text-black">
                            {items.title}
                          </h4>
                          <button className="btn w-full bg-color-c9 hover:bg-color-c2">
                            See Details
                          </button>
                        </div>
                      </div>
                    ))
                  : DataBootcamp.data.type.miniBootcamp.card.map(
                      (items, index) => (
                        <div
                          className="w-full h-full bg-white rounded-2xl overflow-hidden shadow-xl"
                          key={index}
                        >
                          <Image
                            src={items.img}
                            alt={""}
                            width={400}
                            height={400}
                            className="w-full h-2/5 "
                          />
                          <div className="w-full h-3/5 px-6 flex flex-col justify-between items-center py-4 gap-16">
                            <h4 className="text-xl dark:text-black">
                              {items.title}
                            </h4>
                            <button className="btn w-full bg-color-c9 hover:bg-color-c2">
                              See Details
                            </button>
                          </div>
                        </div>
                      )
                    )}
              </div>
            </div>
          </div>
        </div>
        <section className="w-full h-full px-6 py-8 rounded-xl">
          <div className="flex flex-col gap-6">
            <h1 className="text-4xl font-bold  capitalize text-gray-500 dark:text-color-c4">
              class for you
            </h1>
            <div className="border-2 border-gray-500 dark:border-color-c2 rounded-xl flex overflow-hidden bg-white dark:bg-color-c2 items-center">
              <input
                type="text"
                className="p-4 w-full outline-none dark:bg-color-c7"
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
            <h3 className="md:text-xl text-center md:text-start font-semibold text-gray-500 dark:text-color-c4">
              kamu memiliki{" "}
              <span className="text-red-500">{dataClass.length}</span> kelas
              untuk anda
            </h3>
          </div>
          <div className="w-full h-full py-4">
            <div className="w-full md:h-full h-full grid grid-cols-1 md:grid-cols-3 gap-4">
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
              <div className="w-full flex mt-14 justify-center items-center">
                <button className="btn bg-color-c9 hover:bg-color-c2 hover:text-white text-lg capitalize w-1/4">see olther</button>
              </div>
          </div>
        </section>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-14 w-full md:h-[60vh] h-full">
          {DataCard.data.type.courses.data.map((items, index) => (
            <div
              key={index}
              className={`w-full h-full rounded-3xl px-4 shadow-md flex flex-col overflow-hidden ${
                items.isImg === true
                  ? "bg-color-c10"
                  : "bg-black/5 dark:border-2 dark:border-color-c2"
              }`}
            >
              <div className="w-full h-1/2 px-4 py-6 gap-4 flex flex-col">
                <h4
                  className={`text-3xl ${
                    items.isImg === true ? "text-white" : "text-color-c10"
                  }`}
                >
                  {items.title}
                </h4>
                <p
                  className={`text-lg ${
                    items.isImg === true ? "text-white" : "text-color-c10"
                  } w-[362px]`}
                >
                  {items.subTitle}
                </p>
                {items.isbutton === true ? (
                  <button className="btn bg-color-c9 w-[200px] hover:bg-color-c9/70 border-none text-color-c10">
                    see more
                  </button>
                ) : (
                  <div className="flex gap-4 items-center">
                    <h5 className="text-color-c10">Ask the Forum</h5>
                    <div className="bg-color-c10 p-3 text-color-c9 rounded-xl">
                      TechCom
                    </div>
                  </div>
                )}
              </div>
              <div
                className={`flex w-full h-1/2 justify-center px-8 pt-8 ${
                  items.isImg === true ? "items-end" : "items-center"
                } `}
              >
                {items.isImg === true ? (
                  <>
                    <Image
                      src={"/TechfusionAcademy/assets/olther/img1.png"}
                      alt={""}
                      width={260}
                      height={400}
                      className="relative z-[1] md:left-14 left-2  hover:md:scale-110 hover:scale-150 scale-90 md:scale-100 transition-all hover:z-[4]"
                    />
                    <Image
                      src={"/TechfusionAcademy/assets/olther/img2.png"}
                      alt={""}
                      width={290}
                      height={400}
                      className="relative z-[2] hover:md:scale-110 hover:scale-150 scale-90 md:scale-100 transition-all hover:z-[4]"
                    />
                    <Image
                      src={"/TechfusionAcademy/assets/olther/img3.png"}
                      alt={""}
                      width={320}
                      height={400}
                      className="relative z-[3] md:right-10 right-2 hover:md:scale-110 hover:scale-150 scale-90 md:scale-100 transition-all hover:z-[4]"
                    />
                  </>
                ) : (
                  <Image
                    src={"/TechfusionAcademy/assets/olther/img4.png"}
                    alt={""}
                    width={400}
                    height={400}
                    className="scale-110"
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="w-full h-full md:px-14 px-2 py-8">
        <div className=" w-full md:h-[500px] h-full rounded-3xl flex flex-col md:flex-row overflow-hidden">
          <div className="md:w-[100px] w-full bg-color-c9 h-full flex md:flex-col flex-row items-center justify-center gap-8 py-8 md:py-0">
            {icons.map((items, index) => (
              <div
                className={`w-14 h-14 rounded-lg flex justify-center items-center hover:bg-color-c10 transition-all bg-color-c10/50`}
                key={index}
                onClick={() => onclick(items)}
              >
                <Image src={items.src} alt={""} width={36} height={36} />
              </div>
            ))}
          </div>
          {dataRandom.id.card.data.type.courses.data.id[
            id as unknown as keyof typeof dataRandom.id.card.data.type.courses.data.id
          ].map((items: any, index: number) => {
            return (
              <CardCourses
                key={index}
                headTitle={items.headTitle}
                title={items.title}
                subTitle={items.subTitle}
                isTopic={items.istopic}
              >
                {items.istopic === false ? null : (
                  <div
                    className={`w-full h-full md:px-8 px-2 py-3 flex flex-col md:flex-row gap-8 ${
                      items.istopic ? "block" : "hidden"
                    }`}
                  >
                    {items.asideTopic.map((items: any, index: any) => (
                      <div
                        className="md:w-1/2 w-full h-full bg-white rounded-2xl shadow-xl overflow-hidden"
                        key={index}
                      >
                        <Image
                          src={items.img}
                          alt={""}
                          width={400}
                          height={400}
                          className="w-full h-2/5 bg-red-500"
                        />
                        <div className="w-full md:h-3/5 h-full flex flex-col justify-between py-4 px-4">
                          <div className="flex flex-col md:gap-3 gap-8">
                            <h4 className="md:text-2xl text-lg">
                              {items.title}
                            </h4>
                            {items.isDecs === true ? (
                              <div className="w-full h-full text-blue-600">
                                {items.description.map(
                                  (items: any, index: any) => (
                                    <div
                                      className="flex px-2 py-1 gap-4 bg-color-text-1 rounded-md w-full h-full"
                                      key={index}
                                    >
                                      <p className="text-sm">{items.title}</p>
                                    </div>
                                  )
                                )}
                              </div>
                            ) : null}
                          </div>
                          <button className="btn w-full bg-color-c9 hover:bg-color-c2">
                            See Details
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardCourses>
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default Courses;
