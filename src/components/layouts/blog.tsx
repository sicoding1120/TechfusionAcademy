/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Kanit } from "next/font/google";
import { Circle } from "@chakra-ui/react";
import DataBlog from "../data/json/blog.json";
import { FaPlus, FaRegBookmark, FaBookmark } from "react-icons/fa6";
import Link from "next/link";
import InputSearch from "../elements/search";
import { useRouter } from "next/router";
import { FaSearch } from "react-icons/fa";
import BlogCard from "../elements/blogCard";

const kanit = Kanit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600"],
});

const SaveFavorit = (items: any) => {
  console.log("oks", items);
  const favorit = sessionStorage.getItem("favorit");
  if (!!favorit === false) {
    sessionStorage.setItem("favorit", JSON.stringify([items]));
  } else {
    const data = JSON.parse(favorit);
    const filter = data.filter((item: any) => item.id === items.id);
    console.log("filter", filter);
    if (filter?.length === 0) {
      sessionStorage.setItem("favorit", JSON.stringify([...data, items]));
    }
  }
  console.log("f", favorit);
  alert("telah tersimpan di favorit");
};

const Unfavorit = (items: any) => {
  const favorit = sessionStorage.getItem("favorit");
  if (!!favorit === false) {
    return;
  } else {
    const data = JSON.parse(favorit);
    const newData = data.filter((item: any) => item.id !== items.id);
    console.log(newData);
    sessionStorage.setItem("favorit", JSON.stringify(newData));
  }
  alert("telah dihapus dari favorit");
};

const Blog = () => {
  const [newChange, setNewChange] = useState([]);
  const [sortBlog, setSortBlog] = useState([]);
  const [latestPosts, setLatestPosts] = useState([]);
  const [latestViews, setLatestViews] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [favorit, setFavorit] = useState(sessionStorage.getItem("favorit"));
  const [hasil, setHasil] = useState(false);
  const [boolean, setBoolean] = useState(false);
  const router = useRouter();

  useEffect(() => {
    sortBlogsByViews();
    sortBlogsByDate();
    sortBlogsByLatestViews();
  }, []);

  const sortBlogsByViews = () => {
    const sortedBlogs = [...DataBlog].sort((a, b) => {
      const viewsA = getViews(a);
      const viewsB = getViews(b);

      // Urutkan berdasarkan jumlah views, dari yang terbesar ke yang terkecil
      return viewsB - viewsA;
    });

    const limitBlog = sortedBlogs.slice(0, 5);

    setSortBlog(limitBlog as never);
  };

  const updateLatestView = (items: any) => {
    const viewedBlogs =
      JSON.parse(sessionStorage.getItem("viewedBlogs") as never) || [];
    const existingBlogIndex = viewedBlogs.findIndex(
      (blog: any) => blog.id === items.id
    );

    if (existingBlogIndex !== -1) {
      viewedBlogs[existingBlogIndex].lastViewed = new Date().getTime();
    } else {
      viewedBlogs.push({ ...items, lastViewed: new Date().getTime() });
    }

    sessionStorage.setItem("viewedBlogs", JSON.stringify(viewedBlogs));
    sortBlogsByLatestViews();
  };

  const sortBlogsByDate = () => {
    const sortedBlogs = [...DataBlog].sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });

    const latestBlogs = sortedBlogs.slice(0, 10); // Ambil 5 postingan terbaru
    setLatestPosts(latestBlogs as never);
  };

  const sortBlogsByLatestViews = () => {
    const viewedBlogs =
      JSON.parse(sessionStorage.getItem("viewedBlogs") as never) || [];
    const sortedBlogs = viewedBlogs.sort(
      (a: any, b: any) => b.lastViewed - a.lastViewed
    );
    const latestViewedBlogs = sortedBlogs.slice(0, 5); // Ambil 5 postingan terakhir dilihat
    setLatestViews(latestViewedBlogs as never[]);
  };

  const getViews = (blog: any) => {
    const views = sessionStorage.getItem(`views_${blog.id}`);
    return views ? parseInt(views) : 0;
  };

  const UpdateViews = (items: any) => {
    console.log("oks", items.views);
    const storedViews = sessionStorage.getItem(`views_${items.id}`);
    const updatedViews = storedViews ? JSON.parse(storedViews) + 1 : 1;
    sessionStorage.setItem(`views_${items.id}`, JSON.stringify(updatedViews));
    console.log(updatedViews);
    // router.push(`/Blog/${items.id}`);
  };

  const searchHandle = (event: React.ChangeEvent<HTMLInputElement>) => {
    const keyword = event.target.value;
    setKeyword(keyword);
  };

  const JmlViews = (id: string) => {
    const views = sessionStorage.getItem(`views_${id}`);
    return views ? views : 0;
  };
  return (
    <main className={`w-full h-full ${kanit.className} dark:bg-color-c7`}>
      <header className="w-full h-[80vh] bg-fixed bg-no-repeat bg-cover bg-bgBlogHead hidden md:flex md:flex-col gap-6 justify-center items-center">
        <h2 className="text-white text-[4.3rem]">TECH Blog site</h2>
        <p className="text-2xl text-white w-[700px] text-center mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="w-[700px] bg-white h-[50px] rounded-lg overflow-hidden flex">
          <input
            type="text"
            className="w-11/12 h-full px-4 outline-none"
            onChange={searchHandle}
          />
          <div className="w-1/12 h-full p-1">
            <button
              className="w-full h-full bg-color-c9 rounded-md active:scale-90 transition-all flex justify-center items-center"
              title="search"
            >
              <FaSearch
                size={22}
                className="text-white"
                onClick={() =>
                  router.push(
                    `/search/blog/${keyword}`
                  )
                }
              />
            </button>
          </div>
        </div>
      </header>
      {/* <section className="w-full h-full md:px-8 px-4 py-14 flex flex-col gap-6">
        <div className="px-4">
          <InputSearch
            SearchHandle={searchHandle}
            placeholder="search your blog...."
          />
          <div className="flex justify-between">
            <h2 className="dark:text-white">
              kami menyediakan{" "}
              <span className="text-red-500">{DataBlog.length}</span> blog untuk
              anda
            </h2>
          </div>
        </div>
        <div
          className=" w-full h-full grid md:grid-cols-3 grid-cols-1 gap-6"
          id="blog"
        >
          {boolean === false
            ? DataBlog.map((items, index) => (
                <div
                  className="w-full h-[600px] px-4 py-8 flex flex-col gap-8 rounded-2xl items-center bg-white dark:border-2 dark:border-color-c2 dark:bg-color-c7 dark:text-white"
                  key={index}
                >
                  <div className="w-full h-1/2 rounded-lg overflow-hidden">
                    <Image
                      src={items.Img}
                      alt={""}
                      width={300}
                      height={300}
                      className="w-full h-full"
                    />
                  </div>
                  <div className="w-full h-1/2 flex flex-col justify-between">
                    <h1 className="text-3xl font-semibold">{items.title}</h1>
                    <p className="text-md">{items.subtitle}</p>
                    <div className="flex justify-between w-full items-center">
                      <div className="flex gap-4 items-center">
                        <Circle className="bg-green-500" size={12}></Circle>
                        <div className="flex flex-col">
                          <h3 className="text-lg">{items.profileName}</h3>
                          <p className="text-sm">{items.date}</p>
                        </div>
                      </div>
                      {favorit &&
                      JSON.parse(favorit).some(
                        (favItem: any) => favItem.id === items.id
                      ) ? (
                        <FaBookmark
                          onClick={() => Unfavorit(items)}
                          size={26}
                          className="cursor-pointer"
                        />
                      ) : (
                        <FaRegBookmark
                          onClick={() => SaveFavorit(items)}
                          size={26}
                          className="cursor-pointer"
                        />
                      )}
                    </div>
                    <Link
                      href={`/Blog/${items.id}`}
                      onClick={() => {
                        UpdateViews(items);
                        updateLatestView(items);
                      }}
                      className="text-center cursor-pointer text-color-c10 dark:text-color-c2"
                    >
                      see all
                    </Link>
                  </div>
                </div>
              ))
            : newChange &&
              newChange.map((items: any, index: number) => (
                <div
                  className="w-full h-[600px] px-4 py-8 flex flex-col gap-4 rounded-2xl items-center bg-white dark:border-2 dark:border-color-c2 dark:bg-color-c7 dark:text-white"
                  key={index}
                >
                  <div className="w-full h-1/2 rounded-lg overflow-hidden">
                    <Image
                      src={items.Img}
                      alt={""}
                      width={300}
                      height={300}
                      className="w-full h-full"
                    />
                  </div>
                  <div className="w-full h-1/2 flex flex-col justify-between">
                    <h1 className="text-3xl font-semibold">{items.title}</h1>
                    <p className="text-md">{items.subtitle}</p>
                    <div className="flex justify-between w-full items-center">
                      <div className="flex gap-4 items-center">
                        <Circle className="bg-green-500" size={12}></Circle>
                        <div className="flex flex-col">
                          <h3 className="text-lg">{items.profileName}</h3>
                          <p className="text-sm">{items.date}</p>
                        </div>
                      </div>
                      {favorit &&
                      JSON.parse(favorit).some(
                        (favItem: any) => favItem.id === items.id
                      ) ? (
                        <FaBookmark
                          onClick={() => Unfavorit(items)}
                          size={26}
                          className="cursor-pointer"
                        />
                      ) : (
                        <FaRegBookmark
                          onClick={() => SaveFavorit(items)}
                          size={26}
                          className="cursor-pointer"
                        />
                      )}
                    </div>
                    <Link
                      href={`/Blog/${items.id}`}
                      onClick={() => UpdateViews(items)}
                      className="text-center cursor-pointer text-color-c10 dark:text-color-c2"
                    >
                      see all
                    </Link>
                  </div>
                </div>
              ))}
        </div>
      </section> */}
      <section className="w-full h-full py-8 flex flex-col gap-6 px-4 mt-14">
        <h1 className="w-full px-2 font-bold text-4xl">New blog for you</h1>
        <div className="w-full h-full flex flex-col md:flex-row">
          <div className="md:w-1/2 h-full flex flex-col gap-4 p-2">
            <div className="w-full h-full">
              <div className="w-full max-w-md mx-auto flex flex-col  bg-white overflow-hidden md:max-w-2xl">
                <div className="md:flex w-full">
                  <Image
                    src="/path/to/your/image.jpg"
                    alt="Blog Image"
                    width={600}
                    height={400}
                    className="w-full md:h-[628px] object-cover md:w-full bg-gray-300"
                  />
                </div>
                <div className="px-2 pb-8 pt-6 flex flex-col gap-2 h-[250px] w-full">
                  <div className="flex items-baseline">
                    <span className="inline-block border-2 border-black rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                      UX things
                    </span>
                    <span className=" border-2 border-black rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                      UX things
                    </span>
                  </div>
                  <h2 className="mt-2 text-xl font-semibold text-gray-900">
                    Countries with the Most people online
                  </h2>
                  <p className="mt-2 text-gray-600 text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <a
                    href="#"
                    className="mt-4 text-green-500 hover:text-green-700 transition-all flex items-center"
                  >
                    Read more{" "}
                    <span className="ml-2">{/* <FaArrowRight /> */}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 h-full grid md:grid-cols-2 gap-2 p-2">
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
        </div>
      </section>
      <section className="w-full px-4 gap-6 mt-8 flex flex-col">
        <h1 className="text-4xl font-bold capitalize">any blog for you</h1>
        <div className="md:flex grid grid-cols-2 gap-4 w-full">
          <button className="btn bg-color-c2 text-white capitalize">
            all blog
          </button>
          <button className="btn">UI Design</button>
          <button className="btn">Coding</button>
          <button className="btn">News</button>
          <button className="btn">UX Experience</button>
          <button className="btn">Sport</button>
        </div>
        <div className="grid md:grid-cols-4 gap-4 w-full">
          {DataBlog.map((items, index) => {
            console.log(items.kategori);
            return (
              <BlogCard img={items.Img} title={items.title} id={items.id} key={index} />
            )
          })}
        </div>
      </section>
      <section className="w-full h-full mt-36 dark:text-white">
        <div className="w-full h-full flex flex-col md:flex-row">
          <div className="md:w-3/5 w-full md:px-8 px-4 flex flex-col gap-6">
            <div className=" pb-8 border-b-4 border-black dark:border-color-c4">
              <h2 className="text-4xl capitalize">lastest posts</h2>
            </div>
            <div className="w-full h-full grid md:grid-cols-2 grid-cols-1 gap-6">
              {latestPosts.map((items: any, index: any) => (
                <div
                  className="w-full md:h-[500px] h-full flex flex-col gap-4 dark:border-2 dark:border-color-c2 dark:bg-color-c7 dark:text-white p-4 rounded-lg"
                  key={index}
                >
                  <div className="w-full h-1/2">
                    <Image
                      src={items.Img}
                      alt={""}
                      width={300}
                      height={300}
                      className="w-full h-full"
                    />
                  </div>
                  <div className="w-full h-1/2 flex flex-col gap-3 px-4 py-2">
                    <h2 className="text-lg font-semibold">{items.title}</h2>
                    <p className="text-sm">{items.subtitle}</p>
                    <div className="flex flex-col">
                      <h3 className="text-md font-bold dark:text-color-c4">
                        {items.author}
                      </h3>
                      <p className="flex items-center gap-2">
                        {items.date}{" "}
                        <Circle
                          size={2}
                          className="bg-color-c9 border border-black"
                        />
                        <span className="text-color-c10">
                          {JmlViews(items.id)} views
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="md:w-2/5 w-full px-8 flex flex-col gap-14 h-full">
            <div className="w-full h-full flex flex-col gap-2">
              <div className=" pb-8 border-b-4 border-black dark:border-white">
                <h2 className="text-4xl capitalize ">popular posts</h2>
              </div>
              <div className="w-full h-full grid grid-cols-1 gap-4">
                {sortBlog.map((items: any, index: any) => (
                  <div
                    key={index}
                    className="w-full md:h-[200px] h-full flex flex-col md:flex-row md:gap-4"
                  >
                    <div className="md:w-1/3 w-full text-[8rem] flex h-full text-gray-500">
                      0 <span>{index + 1}</span>
                    </div>
                    <div className="md:w-2/3 w-full flex flex-col md:py-8 gap-2">
                      <h3 className="text-2xl">{items.title}</h3>
                      <p className="text-color-text-2">{items.subtitle}</p>
                      <div className="flex items-center gap-2">
                        <Circle
                          size={4}
                          className="bg-color-c9 border border-black"
                        />
                        <p className="text-color-text-2">
                          by{" "}
                          <span className="text-black font-semibold dark:text-white">
                            {items.author}
                          </span>{" "}
                          on, {items.date} .{" "}
                          <span className="text-color-c10 font-semibold">
                            {JmlViews(items.id)} views
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="">
              <div className=" pb-8 border-b-4 border-black dark:border-white">
                <h2 className="text-4xl capitalize ">lastest views</h2>
              </div>
              <div className="w-full h-full grid grid-cols-1 gap-4">
                {latestViews.map((items: any, index: any) => (
                  <div
                    key={index}
                    className="w-full h-[200px] flex flex-col md:flex-row gap-4"
                  >
                    <div className="md:w-1/3 w-full text-[8rem] flex h-full text-gray-500">
                      0 <span>{index + 1}</span>
                    </div>
                    <div className="md:w-2/3 w-full flex flex-col md:py-8 gap-2">
                      <h3 className="text-2xl">{items.title}</h3>
                      <p className="text-color-text-2">{items.subtitle}</p>
                      <div className="flex items-center gap-2">
                        <Circle
                          size={4}
                          className="bg-color-c9 border border-black"
                        />
                        <p className="text-color-text-2">
                          by{" "}
                          <span className="text-black font-semibold dark:text-white">
                            {items.author}
                          </span>{" "}
                          on, {items.date} .{" "}
                          <span className="text-color-c10 font-semibold">
                            {JmlViews(items.id)} views
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Blog;
