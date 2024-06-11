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
  position,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon, HamburgerIcon } from "@chakra-ui/icons";
import dataRandom from "../data/json/dataRandom.json";
import DataMenu from "../data/json/menu.json";
import { useRouter } from "next/router";
import { BiLogOut } from "react-icons/bi";
import { toast } from "react-toastify";


const kanit = Kanit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600"],
});
const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600"],
});

const pathnameBgColorHide = ["/","/e"]

const Navbar = () => {
  const [isDark, setIsDark] = useState(false);
  const [logined, setLogined] = useState(false);
  const [user, setUser] = useState("");
  const { pathname } = useRouter();

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    const islogin: any = sessionStorage.getItem("isLogin");
    const user:any = sessionStorage.getItem("user")
    console.log(JSON.parse(user))
    const title = JSON.parse(user);
    const login = JSON.parse(islogin);
    setUser(title)
    setLogined(login)
  }, [isDark]);

      const handleLogout = () => {
        const CustomToast = ({ closeToast }: any) => {
          return (
            <div className="flex flex-col gap-4">
              <p>kamu yakin ingin log out</p>
              <div className="flex gap-4">
                <button
                  className="w-1/2 btn"
                  onClick={() => {
                    handleConfirm();
                    closeToast();
                  }}
                >
                  Yes
                </button>
                <button onClick={closeToast} className="btn w-1/2">
                  No
                </button>
              </div>
            </div>
          );
        };

        const handleConfirm = () => {
          const login = false;
          sessionStorage.setItem("isLogin", JSON.stringify(login))
          window.location.reload()
        }
        toast(<CustomToast />, {
          position: "top-left",
        });
      };


  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      className={`md:px-20 md:py-2 py-2 px-4 ${
        pathnameBgColorHide.includes(pathname) ? "bg-color-c1/40" : "bg-white"
      } dark:text-color-c4 text-black dark:bg-color-c7 ${kanit.className}`}
    >
      <Link href={"/"} className="flex items-center cursor-pointer">
        <Image
          src={"/TechfusionAcademy/assets/logo/logoWeb.png"}
          alt={""}
          width={100}
          height={100}
          className="w-14 h-14 md:w-28 md:h-28"
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
          {DataMenu.map((items, index) => (
            <Link
              key={index}
              href={items.link}
              className="cursor-pointer text-xl hover:text-color-c2 transition-all"
            >
              {items.title}
            </Link>
          ))}
        </Flex>
      </Box>
      <Box>
        <Flex className="flex items-center md:gap-4 gap-2">
          <Button
            onClick={() => {
              setIsDark(!isDark);
            }}
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
            {logined == true ? (
              <div className="dropdown">
                <div className=" placeholder" tabIndex={0} role="button">
                  <div className="flex justify-center items-center">
                    <div className="w-10 h-10 bg-color-c2  text-white flex justify-center items-center rounded-full">
                      <span className="text-3xl uppercase">
                        {user.at(0)}  
                      </span>
                    </div>
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] mt-2 absolute right-0 menu p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <Link href={`/e/account/me/@${user}/dashboard`}>
                      dashboard
                    </Link>
                  </li>
                  <li>
                    <button onClick={handleLogout}>
                      <BiLogOut />
                      log out
                    </button>
                  </li>
                </ul>
              </div>
            ) : (
              dataRandom.id.button.type[1].data.map((items, index) => (
                <Link
                  href={items.link}
                  key={index}
                  className={`${items.className} ${inter.className}`}
                >
                  {items.title}
                </Link>
              ))
            )}
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
              {DataMenu.map((items, index) => (
                <Link key={index} href={items.link} className="cursor-pointer text-xl">
                  {items.title}
                </Link>
              ))}
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
