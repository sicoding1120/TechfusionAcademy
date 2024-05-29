/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import BlogData from "@/components/data/json/blog.json";
import Image from "next/image";
import { Circle } from "@chakra-ui/react";

const Dynamic = () => {
  const [popularBlog, setPopularBlog] = useState<any>(null);
  const [filter, setFilter] = useState<any>([]);
  const [viewUp,setViewUp] = useState<any>([])
  // console.log(popularBlog.views);
  useEffect(() => {
    setPopularBlog(getPopularBlog());
    handle();
  }, []);

  const { query } = useRouter();
  console.log(query.slug);
  const handle = () => {
    const filter = BlogData.filter((items: any) => items.id == query.slug);
    const viewsUp = sessionStorage.getItem(`views_${query.slug}`) || 0;
    setFilter(filter)
    setViewUp(viewsUp)
  };
  const getPopularBlog = () => {
    let totalViews = 0;
    let popularBlog = null;

    for (let key in sessionStorage) {
      if (key.startsWith("views_")) {
        const views = JSON.parse(sessionStorage.getItem(key) as never);
        totalViews += views;
        if (!popularBlog || views > popularBlog.views) {
          popularBlog = { id: key.slice(6), views: views }; // Mengambil id blog dari key
        }
      }
    }
    return popularBlog;
  };
console.log(popularBlog);
  return (
    <main>
      {filter.map((items :any, index: any) => (
        <section key={index} className="w-full h-screen">
          <div className="w-full h-screen py-4">
            <div className="w-full h-1/5 px-8 py-8 flex flex-col gap-4">
              <h1 className="text-5xl font-semibold">{items.title}</h1>
              <div className="flex items-center gap-2">
                <Circle size={4} className="bg-color-c9 border border-black" />
                <p className="text-color-text-2">
                  by{" "}
                  <span className="text-black font-semibold">
                    {items.author}
                  </span>{" "}
                  on, {items.date} .{" "}
                  <span className="text-color-c10 font-semibold">
                    {viewUp} views
                  </span>
                </p>
              </div>
            </div>
            <div className="w-full h-4/5 px-8 overflow-hidden">
              <Image
                src={items.Img}
                alt={items.title}
                width={300}
                height={300}
                className="w-full h-full rounded-xl"
              />
            </div>
          </div>
        </section>
      ))}
    </main>
  );
};

export default Dynamic;
