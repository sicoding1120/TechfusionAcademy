/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import BlogData from "@/components/data/json/blog.json";
import Image from "next/image";
import { Circle } from "@chakra-ui/react";
import { FaGithub, FaTiktok, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { FaX, FaXTwitter } from "react-icons/fa6";

const Dynamic = () => {
  const [popularBlog, setPopularBlog] = useState<any>(null);
  const [filter, setFilter] = useState<any>([]);
  const [viewUp, setViewUp] = useState<any>([]);
  // console.log(popularBlog.views);
  useEffect(() => {
    setPopularBlog(getPopularBlog());
    handle();
  }, []);

  const { query } = useRouter();
  const handle = () => {
    const filter = BlogData.filter((items: any) => items.id == query.slug);
    const viewsUp = sessionStorage.getItem(`views_${query.slug}`) || 0;
    setFilter(filter);
    setViewUp(viewsUp);
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
  const title = filter.map((item: any) => item.title);
  return (
    <main>
      {filter.map((items: any, index: any) => (
        <section
          key={index}
          className="w-full md:h-screen dark:bg-color-c7 dark:text-white h-full"
        >
          <div className="w-full h-full md:h-screen py-4">
            <div className="w-full h-1/5 px-8 py-8 flex flex-col gap-4">
              <h1 className="md:text-5xl text-4xl text-center md:text-start font-semibold">
                {items.title}
              </h1>
              <div className="flex items-center justify-center md:justify-start gap-2">
                <Circle size={4} className="bg-color-c9 border border-black" />
                <p className="text-color-text-2 text-sm md:text-md">
                  by{" "}
                  <span className="text-black font-semibold dark:text-white">
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
      <section className="w-full h-full flex flex-col-reverse md:flex-row md:px-8 px-4 gap-8 dark:bg-color-c7 dark:text-white">
        <div className="md:w-1/12 w-full h-full py-8 flex flex-col gap-4 md:sticky md:top-2">
          <h3 className="text-xl font-bold capitalize text-center">share</h3>
          <div className="md:grid md:grid-cols-1 gap-4 px-8 hidden">
            <div className="w-full h-14 flex justify-center items-center bg-black rounded-full">
              <FaWhatsapp className="text-white" size={34} />
            </div>
            <div className="w-full h-14 flex justify-center items-center bg-black rounded-full">
              <FaTiktok className="text-white" size={34} />
            </div>
            <div className="w-full h-14 flex justify-center items-center bg-black rounded-full">
              <FaGithub className="text-white" size={34} />
            </div>
            <div className="w-full h-14 flex justify-center items-center bg-black rounded-full">
              <FaXTwitter className="text-white" size={34} />
            </div>
            <div className="w-full h-14 flex justify-center items-center bg-black rounded-full">
              <FaTwitter className="text-white" size={34} />
            </div>
          </div>
          <div className="md:hidden flex w-full gap-4">
            <div className="w-14 h-14 flex justify-center items-center bg-black rounded-full">
              <FaWhatsapp className="text-white" size={34} />
            </div>
            <div className="w-14 h-14 flex justify-center items-center bg-black rounded-full">
              <FaTiktok className="text-white" size={34} />
            </div>
            <div className="w-14 h-14 flex justify-center items-center bg-black rounded-full">
              <FaGithub className="text-white" size={34} />
            </div>
            <div className="w-14 h-14 flex justify-center items-center bg-black rounded-full">
              <FaXTwitter className="text-white" size={34} />
            </div>
            <div className="w-14 h-14 flex justify-center items-center bg-black rounded-full">
              <FaTwitter className="text-white" size={34} />
            </div>
          </div>
        </div>
        <div className="md:w-11/12 w-full h-full flex flex-col md:px-4 py-4 gap-8">
          <div className="flex flex-col gap-6">
            <h2 className="text-4xl font-bold">{title}</h2>
            <p className="md:text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              quasi facilis qui totam consequatur porro provident ut nulla,
              ipsum veritatis magni adipisci error odio tempora alias, rem ad
              commodi sint! Quo ex laborum sequi. Pariatur, sequi ipsa sapiente
              autem nesciunt cum ducimus voluptatem libero facilis provident a
              nisi quae sunt mollitia distinctio dolore? Tempore laborum
              quaerat, perspiciatis repellendus autem velit. Quis corporis
              minus, impedit nobis nisi velit eos ratione consectetur, natus
              voluptatem, reiciendis minima voluptate obcaecati aperiam. Quam
              asperiores eum itaque mollitia quidem tenetur voluptate
              dignissimos laboriosam, quisquam enim placeat? Ut blanditiis sunt
              in unde itaque aut repudiandae cum iusto, officiis doloribus a
              voluptatum vero rem nam dolor ex eum amet odit explicabo. Eveniet
              fugiat culpa sequi corporis autem inventore? Exercitationem ea
              molestias modi impedit libero sint soluta sequi quidem consequatur
              in consectetur pariatur minima delectus ducimus natus, iste
              doloremque ipsa voluptatem eum quaerat nisi! Harum exercitationem
              maxime consequuntur consequatur.
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <h2 className="text-4xl font-bold capitalize">next paragraf</h2>
            <p className="md:text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              quasi facilis qui totam consequatur porro provident ut nulla,
              ipsum veritatis magni adipisci error odio tempora alias, rem ad
              commodi sint! Quo ex laborum sequi. Pariatur, sequi ipsa sapiente
              autem nesciunt cum ducimus voluptatem libero facilis provident a
              nisi quae sunt mollitia distinctio dolore? Tempore laborum
              quaerat, perspiciatis repellendus autem velit. Quis corporis
              minus, impedit nobis nisi velit eos ratione consectetur, natus
              voluptatem, reiciendis minima voluptate obcaecati aperiam. Quam
              asperiores eum itaque mollitia quidem tenetur voluptate
              dignissimos laboriosam, quisquam enim placeat? Ut blanditiis sunt
              in unde itaque aut repudiandae cum iusto, officiis doloribus a
              voluptatum vero rem nam dolor ex eum amet odit explicabo. Eveniet
              fugiat culpa sequi corporis autem inventore? Exercitationem ea
              molestias modi impedit libero sint soluta sequi quidem consequatur
              in consectetur pariatur minima delectus ducimus natus, iste
              doloremque ipsa voluptatem eum quaerat nisi! Harum exercitationem
              maxime consequuntur consequatur.
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <h2 className="text-4xl font-bold capitalize">next paragraf</h2>
            <p className="md:text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              quasi facilis qui totam consequatur porro provident ut nulla,
              ipsum veritatis magni adipisci error odio tempora alias, rem ad
              commodi sint! Quo ex laborum sequi. Pariatur, sequi ipsa sapiente
              autem nesciunt cum ducimus voluptatem libero facilis provident a
              nisi quae sunt mollitia distinctio dolore? Tempore laborum
              quaerat, perspiciatis repellendus autem velit. Quis corporis
              minus, impedit nobis nisi velit eos ratione consectetur, natus
              voluptatem, reiciendis minima voluptate obcaecati aperiam. Quam
              asperiores eum itaque mollitia quidem tenetur voluptate
              dignissimos laboriosam, quisquam enim placeat? Ut blanditiis sunt
              in unde itaque aut repudiandae cum iusto, officiis doloribus a
              voluptatum vero rem nam dolor ex eum amet odit explicabo. Eveniet
              fugiat culpa sequi corporis autem inventore? Exercitationem ea
              molestias modi impedit libero sint soluta sequi quidem consequatur
              in consectetur pariatur minima delectus ducimus natus, iste
              doloremque ipsa voluptatem eum quaerat nisi! Harum exercitationem
              maxime consequuntur consequatur.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Dynamic;
