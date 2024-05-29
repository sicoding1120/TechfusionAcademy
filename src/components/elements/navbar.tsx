"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Kanit, Inter } from "next/font/google";
import {
  useColorMode,
  Button,
  Flex,
  Box,
  useColorModeValue,
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
  MenuItem,
  Menu,
  MenuList,
  Circle,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon, HamburgerIcon } from "@chakra-ui/icons";
import dataRandom from "../data/json/dataRandom.json";
import DataMenu from "../data/json/menu.json";
import { IoIosSearch, IoIosClose, IoMdArrowDropdown } from "react-icons/io";

const kanit = Kanit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600"],
});
const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600"],
});

const Navbar = () => {
  const [searchBar, setSearchBar] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const bgColor = useColorModeValue("#EDFFF3", "gray.800");
  const textColor = useColorModeValue("black", "white");

  const SearchBar = () => {
    setSearchBar(!searchBar);
  };
  const DropDown = () => {
    setDropDown(!dropDown);
    console.log(dropDown);
  };
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      bg={bgColor}
      color={textColor}
      className={`md:px-20 md:py-2 py-2 px-4 ${kanit.className}`}
    >
      <Link href={"/"} className="flex items-center cursor-pointer">
        <Image
          src={"/assets/logo/logoWeb.png"}
          alt={""}
          width={100}
          height={100}
          className="w-14 h-14 md:w-28 md:h-28"
        />
        <Text
          className="md:text-lg text-sm font-bold uppercase"
          display={{ base: "none", md: "block" }}
        >
          techfusion academy
        </Text>
      </Link>
      <Box className="md:block hidden">
        <Flex className="flex gap-6 capitalize ">
          {DataMenu.map((items, index) =>
              <Link key={index} href={items.link} className="cursor-pointer">
                {items.title}
              </Link>
            )
          }
        </Flex>
      </Box>
      <Box>
        <Flex className="flex items-center md:gap-4 gap-2">
          <Button
            onClick={toggleColorMode}
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
          <Box>
            <IoIosSearch
              size={30}
              className="cursor-pointer"
              onClick={SearchBar}
            />
            <Box
              className={` flex gap-4 items-center ${
                searchBar === false ? "hidden" : "block"
              } w-[20rem] h-10 absolute right-4 top-[8.2rem] transition-all ease-linear`}
            >
              <input
                type="text"
                className="px-2 py-1 border-none outline-none rounded-lg w-full h-full outline-color-c2 bg-white text-black"
              />
              <Circle
                className="bg-color-c1 group hover:bg-color-c2 transition-all"
                size={8}
              >
                <IoIosClose
                  size={30}
                  className="cursor-pointer group-hover:fill-white"
                  onClick={SearchBar}
                />
              </Circle>
            </Box>
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
