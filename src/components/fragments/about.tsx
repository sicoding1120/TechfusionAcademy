"use client";
import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import CardElement from "../elements/card";
import DataCard from "../data/json/card.json";
import dataRandom from "../data/json/dataRandom.json";

const About = () => {
  return (
    <section className="w-full md:h-screen h-full flex justify-center items-center py-24 md:px-14 px-4">
      <Flex gap={24} flexDirection={"column"} className="w-full h-full">
        <Box>
          <Flex flexDirection={"column"} gap={6}>
            <Text className="md:text-5xl text-3xl text-center dark:text-color-c4">
              More than just learning
            </Text>
            <Box>
              {dataRandom.id.Text.data.type.textAbout.map((items, index) => (
                <Text
                  className="md:text-lg text-sm text-center text-color-text-2"
                  key={index}
                >
                  {items.text}
                </Text>
              ))}
            </Box>
          </Flex>
        </Box>
        <Box className="w-full h-full ">
          <Flex className="w-full h-full p-4 gap-14 justify-center flex-col md:flex-row">
            {DataCard.map((items) => (
              <CardElement
                title={items.titleCard}
                detail={items.detail}
                key={items.id}
                urlImage={items.urlImage}
              />
            ))}
          </Flex>
        </Box>
      </Flex>
    </section>
  );
};

export default About;
