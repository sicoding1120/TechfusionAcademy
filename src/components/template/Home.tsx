"use client";
import React from "react";
import HeroSection from "@/components/fragments/heroSection";
import Sponsor from "@/components/fragments/sponsor";
import About from "../fragments/about";
import Instructor from "../fragments/instructor";
import Mentor from "../fragments/mentor";
import Testimonial from "../fragments/testimonial";

const Home = () => {
  return (
    <div className="flex flex-col gap-4">
      <HeroSection />
      <Sponsor />
      <About />
      <Instructor />
      <Mentor />
      <Testimonial/>
    </div>
  );
};

export default Home;
