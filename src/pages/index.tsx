import React from "react";
import Home from "@/components/template/Home";
import { Kanit } from "next/font/google";

const kanit = Kanit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600"],
});

const index = () => {
  return (
    <main className={kanit.className}>
        <Home/>
    </main>
  );
};

export default index;
