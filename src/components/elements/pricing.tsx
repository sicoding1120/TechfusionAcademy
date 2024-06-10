import React from "react";
import Link from "next/link";

const Pricing = ({
  className,
  price,
  type,
  fiturAccess,
  key,
  time,
  onclick
}: {
  className?: string;
  price: number;
  type: any;
  fiturAccess: any;
    key: any;
    time: any;
  onclick:any
}) => {
  return (
    <div
      onClick={onclick}
      className={`w-full mb-8 lg:mb-0 max-w-[400px] h-full dark:text-color-c4 transition-all border-2 rounded-xl border-color-c2 ${className}`}
      key={key}
    >
      <div className="max-w-sm lg:max-w-none pt-10 px-10 pb-8 bg-gray-100 dark:bg-transparent  rounded-xl h-[670px]">
        <div className="text-center mb-6">
          <h5 className="text-2xl font-semibold mb-3 capitalize">
            {type}
          </h5>
          <span className="block text-5xl font-bold mb-3 dark:text-color-c2">
            {price == 0 ? "free" : `$${price}`}
          </span>
          <span className="block text-gray-600 dark:text-color-c4 font-medium mb-6">
            {price == 0 ? "for user, limited" : `for user, for ${time}`}
          </span>
          <Link href="#">
            <div className="relative group inline-block w-full py-4 px-6 text-center hover:text-gray-50 bg-color-c2 font-semibold rounded-full overflow-hidden transition duration-200">
              <div className="absolute top-0 right-full w-full h-full bg-gray-900 dark:bg-color-text-1 transform group-hover:translate-x-full group-hover:scale-102 transition duration-500"></div>
              <span className="relative">
                {price == 0 ? "Start 7-days Trial" : `buy and start 1 ${time}`}
              </span>
            </div>
          </Link>
        </div>
        <ul>
          {fiturAccess.map((items: any, index: any) => (
            <li className="flex mb-4 items-center" key={index}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                className="w-6 h-6 fill-current text-color-c2"
              >
                <path d="M7.293 13.293l-3-3a1 1 0 011.414-1.414L8 12.586l8.293-8.293a1 1 0 111.414 1.414l-9 9a1 1 0 01-1.414 0z"></path>
              </svg>
              <span className="ml-2 ">{items.title}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Pricing;
