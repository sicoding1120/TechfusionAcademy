import React from "react";
import Image from "next/image";
import { FaBook, FaStar, FaPlusCircle, FaMinusCircle } from "react-icons/fa";
import Link from "next/link";
const CardClass = ({
  image,
  title,
  jmlMateri,
  jmlSkillPoint,
  price,
  key,
  link,
  handleFuncIn,
  handleFuncOut,
  isHandle,
  items,
  parse,
}: {
  image: string;
  title: string;
  jmlMateri: number;
  jmlSkillPoint: number;
  price: number;
  key: any;
  link: string;
  handleFuncIn: any | undefined;
  handleFuncOut: any | undefined;
  isHandle: any;
  items: any;
  parse: any;
}) => {
  return (
    <div
      className="w-full h-[550px] rounded-xl overflow-hidden border-2 bg-white"
      key={key}
    >
      <div className="w-full h-2/5">
        <Image
          src={image}
          alt=""
          width={300}
          height={300}
          className="w-full h-full bg-red-500"
        />
      </div>
      <div className="w-full h-3/5">
        <div className="w-full h-2/3 py-2 px-4">
          <div className=" w-full h-full flex flex-col justify-between">
            <h5 className="text-2xl font-semibold capitalize">{title}</h5>
            <div className="w-full grid grid-cols-2 py-4 gap-4">
              <div className="bg-color-c10/40 py-2 px-4 flex justify-center items-center rounded-xl gap-3">
                <FaBook size={18} className="fill-color-c10" />
                <p className="font-semibold text-md capitalize text-color-c10">
                  {jmlMateri} materi
                </p>
              </div>
              <div className="bg-color-c10/40 py-2 px-4 flex justify-center items-center rounded-xl gap-3">
                <FaStar size={18} className="fill-color-c10" />
                <p className="font-semibold text-md capitalize text-color-c10">
                  {jmlSkillPoint} TECHPoin
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-1/3  px-4 py-2 border-t">
          <div className="w-full h-full flex flex-col gap-4 justify-between ">
            <div className="flex justify-between items-center px-2">
              <p></p>
              <p className="uppercase font-semibold text-xl text-red-500">
                {price === 0 ? "gratis" : `Rp ${price}`}
              </p>
            </div>
            <div className="flex gap-4">
              <Link
                href={`Courses/class/${link}`}
                className={`${parse ? "w-full" : "w-4/5"}`}
              >
                <button className="btn bg-color-c10 text-white hover:bg-color-c10/70 border-none w-full">
                  lihat detail
                </button>
              </Link>
              {parse || parse === true ? null : (
                <button
                  className="btn bg-color-c10 text-white hover:bg-color-c10/70 border-none w-1/5"
                  title={isHandle ? "hapus dari kelas" : "tambah kelas"}
                  onClick={handleFuncIn}
                >
                  {isHandle &&
                  JSON.parse(isHandle).some(
                    (favItem: any) => favItem.id == items.id
                  ) ? (
                    <FaMinusCircle
                      size={26}
                      className="cursor-pointer"
                      onClick={handleFuncOut}
                    />
                  ) : (
                    <FaPlusCircle
                      onClick={handleFuncIn}
                      size={26}
                      className="cursor-pointer"
                    />
                  )}{" "}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardClass;
