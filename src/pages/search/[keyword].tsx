import blogData from "@/components/data/json/blog.json";
import React from "react";

import { useRouter } from "next/router";

const Dynamic = () => {
  const router = useRouter();
  const { keyword } = router.query;
  const newData = blogData.filter((items) => {
    const title = items.title.toLowerCase();
    return title == keyword;
  });
  return (
    <div>
      {newData.map((items, index) => (
        <div key={index}>
          <h1>{items.title}</h1>
          <p>{items.subtitle}</p>
          <p>{items.date}</p>
        </div>
      ))}
    </div>
  );
};

export default Dynamic;
