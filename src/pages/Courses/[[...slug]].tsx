import React from "react";
import { useRouter } from "next/router";
import Class from "@/components/data/json/class.json";
import Image from "next/image";
import { Kanit } from "next/font/google";
import { FaClipboardList, FaMedal } from "react-icons/fa";
import { toast } from "react-toastify";

const kanit = Kanit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600"],
});

const Dynamic = () => {
  const { query } = useRouter();
  const router = useRouter();
  const filterData = Class.filter(
    (items) => items.headerTitle == query.slug?.at(1)
  );

  const handleClass = () => {
    const CustomToast = ({ closeToast }: any) => {
      return (
        <div className="flex flex-col gap-4">
          <p>kamu belum beli kelas , ayo beli kelas sekarang</p>
          <div className="flex gap-4">
            <button
              className="w-1/2 btn"
              onClick={() => {
                handleConfirm();
                closeToast();
              }}
            >
              Yes
            </button>
            <button onClick={closeToast} className="btn w-1/2">
              No
            </button>
          </div>
        </div>
      );
    };
    toast(<CustomToast />);
    const handleConfirm = () => {
      router.push(
        `/Pricing`
      );
    };
  };
  return (
    <main className=" w-full h-full dark:bg-color-c7 dark:text-white">
      {filterData.map((items, index) => (
        <>
          <section
            key={index}
            className={`py-6 px-2 w-full md:h-[60vh] h-full ${kanit.className}`}
          >
            <div className="w-full h-full flex md:flex-row flex-col-reverse md:px-14">
              <div className="md:w-2/5 w-full h-full py-4">
                <div className="md:px-8px-4 w-full h-full flex flex-col md:gap-6 gap-2 justify-center items-center md:items-start">
                  <h1 className="md:text-6xl text-3xl capitalize">
                    {items.title}
                  </h1>
                  <div className={`text-3xl text-red-500`}>
                    {items.price === 0 ? "free" : ` Rp ${items.price}`}
                  </div>
                  <button
                    onClick={
                      items.price !== 0
                        ? handleClass
                        : () =>
                            router.push(
                              `/class/material/detail/${items.title}/lesson`
                            )
                    }
                    className="btn w-[240px] text-xl bg-color-c9 hover:bg-color-c10 text-color-c10 hover:text-color-c9"
                  >
                    {items.price === 0 ? "join class" : "beli class"}
                  </button>
                </div>
              </div>
              <div className="md:w-3/5 w-full h-full md:px-4">
                <div className="w-full h-full p-4">
                  <Image
                    src={items.img}
                    alt={""}
                    width={300}
                    height={300}
                    className="w-full h-full rounded-3xl"
                  />
                </div>
              </div>
            </div>
          </section>
          <section
            className={` w-full md:h-[170px] h-full md:p-8 p-4 ${kanit.className}`}
          >
            <div className="bg-color-c9 w-full h-full rounded-3xl py-2 md:px-14 px-6">
              <div className="w-full h-full flex flex-col md:flex-row justify-between">
                <div className="md:w-3/5 w-full h-full flex flex-col md:flex-row justify-center items-center gap-3 py-4">
                  <div className="md:w-16 w-24 h-full">
                    <Image
                      src={"/assets/icons/skilbadge-icon1.png"}
                      alt={""}
                      width={200}
                      height={200}
                      className="w-full h-full"
                    />
                  </div>
                  <p className="text-xl text-color-c10 text-center md:text-start">
                    You can join this class and get your TECHBadge (Certificate)
                    for passing the class!
                  </p>
                </div>
                <div className="md:w-2/5 w-full h-full py-4 md:px-8">
                  <button
                    onClick={() =>
                      router.push(`/pre/courses/class/badge/${items.title}/checkout`)
                    }
                    className="btn w-full h-full bg-color-c10 text-white border-none hover:bg-color-c2 hover:text-color-c10 capitalize md:text-xl"
                  >
                    Lihat Selengkapnya
                  </button>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full h-full md:px-8 px-4 py-8">
            <div className="w-full h-full flex flex-col md:flex-row gap-8 justify-center">
              <div className="md:w-1/2 w-full h-full flex flex-col gap-2 border border-black dark:border-color-c2 dark:border-2 rounded-3xl">
                <div className="w-full h-full rounded-3xl px-6 py-8 flex flex-col gap-2">
                  <h3 className="text-2xl font-bold text-color-c10 dark:text-color-c2">
                    About Class
                  </h3>
                  <div className="flex flex-col gap-4">
                    {items.aboutClass.map((items, index) => (
                      <p key={index} className="text-lg">
                        {items.text}
                      </p>
                    ))}
                  </div>
                </div>
                <div className="w-full h-full rounded-3xl px-6 py-8 flex flex-col gap-6">
                  <h3 className="text-2xl font-bold text-color-c10 dark:text-color-c2">
                    MATERIAL TO BE LEARNED
                  </h3>
                  <div className="flex flex-col gap-4">
                    {items.materialToBeLearn.text}
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 w-full md:h-screen h-full flex flex-col gap-6">
                <div className="border border-black dark:border-color-c2 dark:border-2 w-full rounded-3xl p-4 flex flex-col gap-6 pb-8">
                  <h3 className="text-color-c10 dark:text-color-c2 text-xl font-bold">
                    Class Detail
                  </h3>
                  <div className="flex flex-col gap-4">
                    <div className="flex gap-4 md:w-[444px] items-center text-2xl">
                      <div>
                        <FaClipboardList
                          size={40}
                          className="fill-yellow-400"
                        />
                      </div>
                      <div className="flex md:w-[444px] gap-4 font-semibold px-2">
                        {items.classDetail.materials}
                        <p>Material</p>
                      </div>
                    </div>
                    <div className="flex gap-4 md:w-[444px] items-center text-2xl">
                      <div>
                        <FaMedal size={40} className="fill-yellow-400" />
                      </div>
                      <div className="flex  md:w-[444px] gap-4 font-semibold px-2">
                        {items.classDetail.points}
                        <p>Max TECHPoin</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-bgDetailClass w-full md:h-[28%] h-full rounded-3xl">
                  <div className="w-full h-full flex justify-center items-center bg-black/50 flex-col p-24 gap-4 rounded-3xl">
                    <h3 className="text-3xl text-white font-semibold">
                      Locked
                    </h3>
                    <p className="text-center text-xl text-white font-semibold">
                      Purchase a TECHBadge (Certificate) and complete the class
                      to earn a TECHBadge for passing this class.
                    </p>
                  </div>
                </div>
                <div className="border border-black dark:border-color-c2 dark:border-2  w-full rounded-3xl p-4 flex flex-col gap-6 pb-6">
                  <h3 className="text-color-c10 dark:text-color-c2 text-xl font-bold">Mentor</h3>
                  <div className="flex flex-col gap-4">
                    {items.mentor.map((items, index) => (
                      <div className="flex gap-4 items-center" key={index}>
                        <Image
                          src={""}
                          alt={""}
                          width={100}
                          height={100}
                          className="rounded-full w-[40px] h-[40px]"
                        />
                        <p className="text-xl font-semibold capitalize">
                          {items.name}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      ))}
    </main>
  );
};

export default Dynamic;
