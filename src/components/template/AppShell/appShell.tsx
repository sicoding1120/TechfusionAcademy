import React from "react";
import Navbar from "@/components/elements/navbar";
import Footer from "@/components/elements/footer";
import { useRouter } from "next/router";
const navigationHide = [
  "/auth/login",
  "/auth/register",
  "/404",
  "/auth/[slug]",
];
const AppShell = ({ children }: { children: React.ReactNode }) => {
  const { pathname } = useRouter();
  return (
    <>
      {!navigationHide.includes(pathname) && <Navbar />}
      {children}
      {!navigationHide.includes(pathname) && <Footer />}
    </>
  );
};

export default AppShell;
