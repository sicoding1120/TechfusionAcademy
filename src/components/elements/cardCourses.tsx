import React from "react";
import { Circle } from "@chakra-ui/react";

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
  return (
    <div className="w-full bg-color-c10 h-full pb-20" key={key}>
      <div className="w-full h-[60px] flex justify-center items-center">
        <div className="px-2 py-1 rounded-lg flex gap-2 items-center text-lg justify-center bg-color-c9">
          <Circle size={2} className="bg-color-c10"></Circle>
          {headTitle}
        </div>
      </div>
      <div className="w-full h-full px-4">
        <div className=" w-full h-full flex">
          <div className="w-1/3 h-full flex flex-col justify-center gap-3">
            <h1 className="text-4xl text-color-c9">{title}</h1>
            <p className="text-sm text-color-c9">{subTitle}</p>
            <button className="w-[100px] px-4 py-2 bg-color-c9 rounded-xl">
              see all
            </button>
          </div>
          <div className="w-2/3 h-full flex justify-center items-center text-4xl capitalize text-color-c9">
            {isTopic === true ? children : `not ${headTitle} yet`}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardCourses;
