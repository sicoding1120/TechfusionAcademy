import React from "react";
import { FaBars, FaBook } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const HeaderNav = () => {
  const router = useRouter()
  return (
    <header className="bg-color-c9 p-4 flex items-center justify-between rounded-lg">
      <div className="md:flex items-center hidden">
        <Image
          src="/assets/logo/logoWeb.png"
          alt="Logo"
          className="h-10 w-10 mr-4 cursor-pointer"
          width={20}
          onClick={() => router.push("/")}
          height={20}
        />
        <div>
          <div className="flex ga-2 items-center">
            <h1 className="font-bold text-lg pr-2 mr-2  border-r border-black">
              TECHFUSION ACADEMY
            </h1>
            <div className="text-sm breadcrumbs">
              <ul>
                <li>
                  <Link href={""} className="">
                    part 1.1 Strukture
                  </Link>
                </li>
                <li>
                  <Link href={""}>part 1.2 Tag</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-4 items-center justify-between md:justify-center">
        <div className="md:flex items-center bg-color-c9 p-2 rounded-lg mr-4 hidden">
          <div className="w-2 h-2 bg-green-600 rounded-full mr-2"></div>
          <span className="text-sm">1/50 Exercises Completed</span>
        </div>
        <Link href={"/"} className="text-md font-bold uppercase">tehfusion</Link>
        <div className="flex">
          <button className="bg-green-400 text-gray-900 p-2 rounded-lg flex items-center mr-4">
            <FaBook className="mr-2" />
            Playground Guide
          </button>
          <button title="button" className="text-gray-900 p-2 rounded-lg">
            <FaBars />
          </button>
        </div>
      </div>
    </header>
  );
};

export default HeaderNav;
