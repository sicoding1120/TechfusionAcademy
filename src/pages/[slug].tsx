import React from "react";
import { useRouter } from "next/router";
import Courses from "@/components/layouts/courses";
import Blog from "@/components/layouts/blog";
import Price from "@/components/layouts/pricing";

const Dynamic = () => {
  const { query } = useRouter();
  console.log(query.slug);
  let content;
  switch (query.slug) {
    case "courses":
      content = <Courses />;
      break;
    case "Blog":
      content = <Blog />;
      break;
    case "Pricing":
      content = <Price />;
      break;
    default:
      content = <div>Halaman tidak ditemukan</div>;
  }

  return <main>{content}</main>;
};

export default Dynamic;
