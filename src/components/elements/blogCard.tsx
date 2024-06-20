import React from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { useRouter } from "next/router";

const BlogCard = ({ title, id, key, img }: any) => {
  const router = useRouter();

  const kategori = [{
    title: "UI/UX design"
  }, {
    title: "UI"
  }]
  return (
    <div className="w-full max-w-md mx-auto flex flex-col  bg-white overflow-hidden md:max-w-2xl" key={key}>
      <div className="md:flex w-full">
        <Image
          src={img}
          alt="Blog Image"
          width={600}
          height={400}
          className="w-full h-48 object-cover md:w-full bg-gray-300"
        />
      </div>
      <div className=" px-2 py-4">
        <div className="flex items-baseline">
          {kategori.map((items: any, index: any) => (
            <span className="inline-block border-2 border-black rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2" key={index}>
              {items.title}
            </span>
          ))}
        </div>
        <h2 className="mt-2 text-xl font-semibold text-gray-900">{title}</h2>
        <p className="mt-2 text-gray-600 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <button
          onClick={() => { router.push(`/Blog/${id}`); }}
          title="button"
          className="mt-4 text-green-500 hover:text-green-700 transition-all flex items-center"
        >
          Read more{" "}
          <span className="ml-2">
            <FaArrowRight />
          </span>
        </button>
      </div>
    </div>
  );
};

export default BlogCard;
