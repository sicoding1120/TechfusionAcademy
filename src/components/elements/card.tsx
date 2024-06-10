"use client";
import React from "react";
import Image from "next/image";

interface CardElementProps {
  title: any;
  detail: any;
  urlImage: any;
  key: any;
}

const CardElement: React.FC<CardElementProps> = ({
  title,
  detail,
  urlImage,
  key,
}) => {
  return (
    <div className="group flex flex-col justify-start items-start gap-2 md:w-96 w-80 h-56 duration-500 relative rounded-lg p-4 border-2 border-color-c2 hover:-translate-y-2 hover:shadow-xl hover:shadow-color-c1 dark:hover:shadow-color-c2 shadow-purple-400" key={key}>
      <div
        className="absolute duration-700 shadow-md group-hover:-translate-y-2 group-hover:-translate-x-4 -bottom-8 -right-6 w-1/2 h-1/2 rounded-lg border-2 border-color-c2 bg-white dark:bg-color-c7 flex justify-center items-center"
      >
        <Image src={urlImage} alt={""} width={70} height={70} />
      </div>

      <div className="">
        <h2 className="text-2xl font-bold mb-2 text-color-c5 dark:text-color-c4">{title}</h2>
        <p className="text-color-text-2 line-clamp-3">
          {detail}
        </p>
      </div>
      <button className="hover:bg-color-c1 bg-color-c2 text-white mt-6 rounded p-2 px-6 hover:text-color-c5 transition-all">
        Learn More
      </button>
    </div>
  );
};

export default CardElement;
