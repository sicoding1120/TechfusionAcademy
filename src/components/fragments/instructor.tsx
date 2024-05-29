"use client";
import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import Image from "next/image";
import dataRandom from "../data/json/dataRandom.json";

const Instructor = () => {
  return (
    <section className="bg-bg2 bg-cover bg-center bg-no-repeat md:h-screen h-screen py-14">
      <Flex className="w-full h-full">
        <Box className="w-full h-full flex flex-col-reverse md:flex-row md:px-14 px-4 gap-8">
          <Flex
            className="md:w-1/2 w-full h-full flex flex-col justify-center items-center"
            flexDirection={"column"}
          >
            <Box className="flex flex-col justify-center gap-8">
              <Flex flexDirection={"column"} className="md:gap-3 gap-0">
                {dataRandom.id.Text.data.type.Text[2].map((items, index) => (
                  <p
                    key={index}
                    className="font-semibold md:text-6xl text-4xl text-center md:text-start"
                  >
                    {items.text}
                  </p>
                ))}
              </Flex>
              <Flex flexDirection={"column"}>
                {dataRandom.id.Text.data.type.subText[2].map((items, index) => (
                  <p
                    key={index}
                    className="font-normal text-sm md:text-lg md:text-start text-center text-color-text-1"
                  >
                    {items.text}
                  </p>
                ))}
              </Flex>
              <button className="btn md:w-[218px] md:h-[40px] h-[40px] capitalize bg-color-c2 text-white hover:bg-color-c1 hover:text-color-c5 border-none shadow-lg">
                join for free
              </button>
            </Box>
          </Flex>
          <Box className="md:w-1/2 w-full h-full  flex justify-center items-center">
            <Image
              src={"/assets/olther/img-content2.png"}
              alt={""}
              width={1000}
              height={1000}
            />
          </Box>
        </Box>
      </Flex>
    </section>
  );
};

export default Instructor;
