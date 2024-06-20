import React from "react";
import Link from "next/link";

const Pricing = ({
  price,
  type,
  fiturAccess,
  key,
  title,
  onclick,
  index
}: {
  price: number;
  type: any;
  fiturAccess: any;
    key: any;
    title: any
    index:number
  onclick: any;
  }) => {
  return (
    <div
      className={`w-[358px] h-[595px] p-6 bg-white hover:scale-110 transition-all ${
        index  === 1? "bg-color-c11" : ""
      }`}
      onClick={onclick}
      key={key}
    >
      <div className="w-full h-full">
        <div className="flex flex-col gap-6">
          <h3 className="text-xl font-bold">{title}</h3>
          <p>Lorem sed do eiusmod tempor</p>
        </div>
        <div className="flex gap-2 mt-4 items-end pb-10 border-b-2 border-black">
          <h2 className={`${price === 0 ? "text-6xl" : "text-6xl"} font-bold capitalize`}>
            {price == 0 ? "free" : `$${price}`}
          </h2>
          <span className="text-xl font-light"> |</span> <span>for {type}</span>
        </div>
        <div className="mt-10 flex flex-col gap-8">
          <h4 className="text-lg font-bold">{"What’s Include ?"}</h4>
          <ul>
            {fiturAccess.map((items: any, index: any) => (
              <li className="flex mb-4 items-center" key={index}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  className="w-6 h-6 fill-current text-black"
                >
                  <path d="M7.293 13.293l-3-3a1 1 0 011.414-1.414L8 12.586l8.293-8.293a1 1 0 111.414 1.414l-9 9a1 1 0 01-1.414 0z"></path>
                </svg>
                <span className="ml-2">{items.title}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
