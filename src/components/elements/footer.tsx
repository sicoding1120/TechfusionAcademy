import { Circle } from "@chakra-ui/react";
import React from "react";
import DataRandom from "../data/json/dataRandom.json";
import Image from "next/image";
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";

const icons = [
  {
    icons: <FaFacebook size={24} />,
  },
  {
    icons: <FaInstagram size={24} />,
  },
  {
    icons: <FaWhatsapp size={24} />,
  },
];
const Footer = () => {
  return (
    <section className="w-full h-screen">
      <div className="w-full h-3/6 md:px-24 px-4 bg-bgFooter bg-white dark:bg-color-c7">
        <div className="w-full md:h-[330px] h-[200px] bg-bgButton bg-no-repeat bg-cover rounded-3xl flex flex-col md:flex-row items-center justify-center  overflow-hidden md:gap-56 relative md:top-52 top-72">
          <div className="md:w-1/2 w-full h-full md:p-8 flex flex-col justify-between items-center md:items-start py-4 px-4">
            <h2 className="text-2xl font-bold capitalize text-center md:text-start">
              Plan your learning now with your friends together
            </h2>
            <button className="px-4 py-2 bg-black text-white rounded-lg w-[120px]">
              Join us
            </button>
          </div>
          <div className="md:w-1/2 h-full pl-36 hidden md:block">
            <div className="w-full h-full md:flex justify-center items-center hidden">
              <Image
                src={"/assets/icons/bubles.png"}
                alt={""}
                width={300}
                height={300}
              />
            </div>
          </div>
        </div>
      </div>
      <footer className="md:px-24  w-full bg-color-c7 dark:bg-color-c5/75 pt-40 pb-4 ">
        <div className="w-full h-full flex flex-col md:flex-row gap-8">
          <div className="md:w-3/6 w-full flex flex-col md:h-[300px] px-4 py-8 md:pt-8 md:pb-4 md:justify-between justify-center gap-6 md:gap-0">
            <div className="flex flex-col gap-2 text-center md:text-start">
              <h2 className="md:text-4xl text-2xl font-bold text-white">
                TECHFUSION ACADEMY
              </h2>
              <p className="text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="flex gap-3 justify-center md:justify-start">
              {icons.map((items, index) => (
                <Circle size={10} className="bg-color-text-1" key={index}>
                  {items.icons}
                </Circle>
              ))}
            </div>
          </div>
          <div className="w-full md:w-3/5 md:h-[300px] md:flex md:flex-row md:justify-center text-center md:text-start items-start grid grid-cols-3 md:gap-8 py-8">
            {DataRandom.id.Text.data.type.textFooter.map((items, index) => (
              <div key={index} className="flex flex-col gap-[4px]">
                <h4 className="text-xl font-bold text-white">{items.title}</h4>
                {items.menuTitle.map((items, index) => (
                  <ul key={index}>
                    <li className="text-md text-white">{items.menu}</li>
                  </ul>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="border-t-4 border-white/20 w-full h-[20px] pt-6 pb-4 flex justify-center items-center text-white">
          &copy;2024, TECHFUSION ACADEMY.
        </div>
      </footer>
    </section>
  );
};

export default Footer;
