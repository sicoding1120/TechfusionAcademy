"use client";
import React from "react";
import { Flex, Box, Card, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

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
    <Card
      className="md:w-1/3 w-full h-[316px] py-14 px-4 shadow-2xl border-none"
      key={key}
    >
      <Flex
        flexDirection={"column"}
        className="flex justify-center items-center gap-6"
      >
        <Image src={urlImage} alt={""} width={50} height={50} />
        <Box className="flex flex-col gap-2">
          <Text className="text-center text-xl">{title}</Text>
          <Text className="text-center text-sm">{detail}</Text>
        </Box>
        <Link href={"/"} className="text-color-c2 hover:text-color-c6">
          learn more
        </Link>
      </Flex>
    </Card>
  );
};

export default CardElement;
