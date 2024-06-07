import Image from "next/image";
import React from "react";
import { Kanit } from "next/font/google";

const kanit = Kanit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600"],
});

const Dashboard = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className={`${kanit.className} flex bg-gray-100`}>
      <section className="w-1/5 h-screen fixed p-2">
        <div className="bg-color-c7 w-full h-full rounded-xl px-3 py-3">
          <header className="flex items-center gap-4">
            <Image
              src={"/assets/logo/logoWeb.png"}
              alt={""}
              width={200}
              height={200}
              className="w-16 h-16 bg-white rounded-md"
            />
            <div className="flex flex-col">
              <h1 className="text-xl uppercase text-color-c4 font-bold">
                techfusion
              </h1>
              <h2 className="text-xl uppercase text-color-c4 font-bold">
                academy
              </h2>
            </div>
          </header>
          <nav className="flex flex-col"></nav>
        </div>
      </section>
      <section className="w-full h-[300vh] flex flex-col ml-[20%] py-2">
        {/* <Nav /> */}
        {children}
      </section>
    </main>
  );
};

export default Dashboard;
