"use client";
import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import Image from "next/image";
import dataRandom from '../data/json/dataRandom.json'


const Sponsor = () => {
  return (
    <section className="w-full md:h-[50vh] h-[90vh] flex justify-center items-center md:px-14 px-4 dark:bg-color-c7">
      <Flex flexDirection={"column"} gap={8}>
        <Text className="md:text-5xl text-3xl text-center dark:text-color-c4">
          Collaborates with 100+ Institutions
        </Text>
        <Flex gap={4} className="text-center md:flex-row flex-col items-center">
          {dataRandom.id.sponsor.data.map((items, index) => (
            <Image
              src={items.urlLogo}
              alt={""}
              width={300}
              height={200}
              key={index}
              className="opacity-30 dark:opacity-70 dark:hover:opacity-100 bg-white hover:opacity-100 transition-all"
            />
          ))}
        </Flex>
      </Flex>
    </section>
  );
};

export default Sponsor;
