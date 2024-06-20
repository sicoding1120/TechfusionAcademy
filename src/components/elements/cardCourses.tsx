import React from "react";
import { Circle } from "@chakra-ui/react";
import { useRouter } from "next/router";

const CardCourses = ({
  headTitle,
  title,
  subTitle,
  key,
  isTopic,
  children,
}: {
  headTitle: string;
  title: string;
  subTitle: string;
  key: any;
  isTopic: boolean;
  children: React.ReactNode;
  }) => {
  const router =useRouter()
  return (
    <div
      className="w-full bg-color-c10 h-full flex flex-col gap-8 md:gap-0 pb-20"
      key={key}
    >
      <div className="w-full h-[60px] flex justify-center items-center">
        <div className="px-2 py-1 rounded-lg flex gap-2 mt-2 items-center text-lg justify-center bg-color-c9">
          <Circle size={2} className="bg-color-c10"></Circle>
          {headTitle}
        </div>
      </div>
      <div className="w-full h-full px-4">
        <div className=" w-full h-full flex flex-col md:flex-row gap-8">
          <div className="md:w-1/3 w-full h-full flex flex-col justify-center items-center md:items-start gap-3">
            <h1 className="md:text-4xl text-3xl text-color-c9 text-center md:text-start">
              {title}
            </h1>
            <p className="text-sm text-color-c9 text-center md:text-start">
              {subTitle}
            </p>
            <button
              className="w-[100px] flex justify-center px-4 py-2 bg-color-c9 rounded-xl"
              onClick={
                headTitle == "Class" ? () => router.push("/Class") : () => null
              }
            >
              see all
            </button>
          </div>
          <div className="md:w-2/3 w-full h-full flex justify-center items-center text-4xl capitalize text-color-c9">
            {isTopic === true ? children : `not ${headTitle} yet`}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardCourses;
