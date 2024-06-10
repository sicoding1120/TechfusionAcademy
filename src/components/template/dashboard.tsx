// import Image from "next/image";
import React from "react";
import { Kanit } from "next/font/google";
import Sidebar from "../elements/sidebar";

const kanit = Kanit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600"],
});

const Dashboard = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className={`${kanit.className} flex flex-col md:flex-row bg-gray-100`}>
      <section className="md:w-1/5 hidden md:block h-screen fixed p-2">
        <Sidebar/>
      </section>
      <section className="w-full h-full flex flex-col md:ml-[20%] py-2">
        {children}
      </section>
    </main>
  );
};

export default Dashboard;
//w-1/5 h-screen fixed p-2