"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Kanit, Inter } from "next/font/google";
import {
  Button,
  Flex,
  Box,
  IconButton,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Stack,
  Text,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon, HamburgerIcon } from "@chakra-ui/icons";
import dataRandom from "../data/json/dataRandom.json";
import DataMenu from "../data/json/menu.json";

const kanit = Kanit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600"],
});
const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600"],
});

const Navbar = () => {

    const [isDark, setIsDark] = useState(false);

useEffect(() => {
  if (isDark) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}, [isDark]);  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
    wrap="wrap"
      className={`md:px-20 md:py-2 py-2 px-4 bg-color-c1/40 dark:text-color-c4 dark:bg-color-c7 ${kanit.className}`}
    >
      <Link href={"/"} className="flex items-center cursor-pointer">
        <Image
          src={"/TechfusionAcademy/assets/logo/logoWeb.png"}
          alt={""}
          width={100}
          height={100}
          className="w-14 h-14 md:w-28 md:h-28 bg-red-500"
        />
        <Text
          className="md:text-2xl text-sm font-bold uppercase"
          display={{ base: "none", md: "block" }}
        >
          techfusion academy
        </Text>
      </Link>
      <Box className="md:block hidden">
        <Flex className="flex gap-6 capitalize ">
          {DataMenu.map((items, index) =>
              <Link key={index} href={items.link} className="cursor-pointer text-xl hover:text-color-c2 transition-all">
                {items.title}
              </Link>
            )
          }
        </Flex>
      </Box>
      <Box>
        <Flex className="flex items-center md:gap-4 gap-2">
          <Button
            onClick={() => { setIsDark(!isDark) }}
            variant="ghost"
            colorScheme="teal"
            size="md"
            paddingInline={"1rem"}
            leftIcon={isDark ? <SunIcon /> : <MoonIcon />}
            className={inter.className}
          >
            {isDark ? "Light" : "Dark"}
          </Button>
          <Box className="md:flex hidden gap-4">
            {dataRandom.id.button.type[1].data.map((items, index) => (
              <Link
                href={items.link}
                key={index}
                className={`${items.className} ${inter.className}`}
              >
                {items.title}
              </Link>
            ))}
          </Box>
          <SideBar />
        </Flex>
      </Box>
    </Flex>
  );
};
const SideBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box display={{ base: "block", md: "none" }} onClick={onOpen}>
        <IconButton
          aria-label="Menu"
          icon={<HamburgerIcon boxSize={7} />}
          variant="ghost"
          colorScheme="teal"
          size="sm"
        />
      </Box>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>
            <Stack spacing={4}>
              {DataMenu.map((items, index) =>
                  <Link
                    key={index}
                    href={items.link}
                    className="cursor-pointer"
                  >
                    {items.title}
                  </Link>
                )
              }
            </Stack>
          </DrawerBody>
          <Box display={{ base: "block", md: "none" }}>
            <DrawerFooter>
              <Flex className="flex gap-4">
                {dataRandom.id.button.type[1].data.map((items, index) => (
                  <Link
                    href={items.link}
                    key={index}
                    className={items.className}
                    onClick={onClose}
                  >
                    {items.title}
                  </Link>
                ))}
              </Flex>
            </DrawerFooter>
          </Box>
        </DrawerContent>
      </Drawer>
    </>
  );
};
export default Navbar;
