import { Box, Flex, Text, Image, Circle } from "@chakra-ui/react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import DataMentor from "../data/json/mentor.json";
import React, { useState } from "react";
import Link from "next/link";

const Mentor = () => {
  const [id, setId] = useState(1); // Mulai dari indeks 1

  const nextMentor = () => {
    setId((prevIndex) => (prevIndex < 3 ? prevIndex + 1 : 1));
  };

  const prevMentor = () => {
    setId((prevIndex) => (prevIndex > 1 ? prevIndex - 1 : 3));
  };

  return (
    <section className="w-full h-full px-14 my-8">
      <Box className="flex flex-col w-full h-full gap-24">
        <Flex
          className="w-full"
          justifyContent={"space-between"}
          align={"center"}
        >
          <Text className="md:text-6xl text-3xl dark:text-color-c4">Search your mentor.</Text>
          <Box className="flex gap-4">
            <Circle
              className="bg-color-c1 size-14 text-black hover:bg-color-c2 hover:text-white"
              onClick={prevMentor}
            >
              <IoIosArrowBack size={30} />
            </Circle>
            <Circle
              className="bg-color-c2 size-14 text-white hover:bg-color-c1 hover:text-black"
              onClick={nextMentor}
            >
              <IoIosArrowForward size={30} />
            </Circle>
          </Box>
        </Flex>
        <Flex p={2} gap={16} className="flex flex-col md:flex-row">
          {DataMentor.id[id as unknown as keyof typeof DataMentor.id].map(
            (
              mentor: { name: string; image: string; title: string },
              index: number
            ) => (
              <Link
                href={`/mentor/${mentor.name}`}
                key={index}
                className="flex flex-col gap-4"
              >
                <Image src={mentor.image} alt={mentor.name} />
                <Box className="flex flex-col text-center dark:text-color-c4">
                  <Text className="font-bold text-xl ">{mentor.name}</Text>
                  <Text>{mentor.title}</Text>
                </Box>
              </Link>
            )
          )}
        </Flex>
      </Box>
    </section>
  );
};

export default Mentor;
