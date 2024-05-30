"use client";
import React from "react";
import { Flex, Box } from "@chakra-ui/react";
import Image from "next/image";
import dataRandom from "../data/json/dataRandom.json";

const HeroSection = () => (
  <section className="bg-bg1 bg-cover bg-center bg-no-repeat md:h-screen h-[110vh] w-full md:px-14 px-4">
    <Topic />
  </section>
);

const Topic = () => (
  <Flex
    align="center"
    justify="space-between"
    gap={3}
    className="w-full md:h-[80vh] dark:text-color-c2 text-color-c5 h-screen md:flex-row flex-col-reverse"
  >
    <Box className="md:w-1/2 w-full h-full p-4">
      <Box className="w-full h-full flex items-center md:px-4">
        <Box className="flex flex-col justify-between gap-6">
          <Flex flexDirection={"column"} className="md:gap-3 gap-0">
            {dataRandom.id.Text.data.type.Text[1].map((items, index) => (
              <p
                key={index}
                className="font-semibold md:text-7xl text-4xl text-center md:text-start"
              >
                {items.text}
              </p>
            ))}
          </Flex>
          <Flex flexDirection={"column"}>
            {dataRandom.id.Text.data.type.subText[1].map((items, index) => (
              <p
                key={index}
                className="font-normal text-sm md:text-lg md:text-start text-center text-color-text-1"
              >
                {items.text}
              </p>
            ))}
          </Flex>
          <button className="btn md:w-[218px] md:h-full h-[40px] capitalize bg-color-c2 text-white hover:bg-color-c1 hover:text-color-c5 border-none shadow-lg">
            join for free
          </button>
        </Box>
      </Box>
    </Box>
    <Box className="md:w-1/2  w-full h-full flex justify-center items-center">
      <Image
        src={"/assets/olther/img-content1.png"}
        alt={""}
        width={600}
        height={600}
      />
    </Box>
  </Flex>
);

export default HeroSection;
