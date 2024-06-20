import React from "react";
import { useRouter } from "next/router";
import Courses from "@/components/layouts/courses";
import Blog from "@/components/layouts/blog";
import Price from "@/components/layouts/pricing";
import ClassNew from "@/components/layouts/classNew";

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
    case "Class":
      content = <ClassNew />;
      break;
    default:
      content = <div>Halaman tidak ditemukan</div>;
  }

  return <main>{content}</main>;
};

export default Dynamic;
