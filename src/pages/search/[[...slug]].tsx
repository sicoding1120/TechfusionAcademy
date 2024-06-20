import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import DataClass from "../../components/data/json/class.json";
import DataBlog from "../../components/data/json/blog.json";
import CourseCardNew from "@/components/elements/cardClassNew";
import { FaArrowLeft } from "react-icons/fa6";
import BlogCard from "@/components/elements/blogCard";

const Dynamic = () => {
  const [filter, setFilter] = useState([]);
  const { query } = useRouter();

  useEffect(() => {
    if (query.slug?.at(0) == "class") {
      handleSearchClass();
    } else {
      if (query.slug?.at(0) == "blog") {
        handleSearchBlog();
      }
      return handleError();
    }
  });
  const handleSearchClass = () => {
    const filter = DataClass.filter(
      (items) => items.title.toLowerCase() == query.slug?.at(1)?.toLocaleLowerCase()
    );
    console.log(filter);
    setFilter(filter as never);
  };
  const handleSearchBlog = () => {
    
    const filter = DataBlog.filter(
      (items) => items.title.toLowerCase() == query.slug?.at(1)?.toLocaleLowerCase()
    );
    // console.log(filter);
    setFilter(filter as never);
  };
  const handleError = () => {
    return
  }
  return (
    <>
      {query.slug?.at(0) == "class" ? (
        <main className="w-full h-screen md:p-8 p-4">
          <div className="w-16 h-16 flex justify-center items-center bg-green-500 hover:cursor-pointer mb-7 rounded-xl ">
            <FaArrowLeft size={24} className="text-white" />
          </div>
          <h3 className="px-8 md:text-xl font-bold capitalize">
            hasil pencarian dari : {query.slug.at(1)}
          </h3>
          <div className="grid md:grid-cols-3 gap-3 md:mt-0 mt-6">
            {filter &&
              filter.map((items: any, index) => (
                <CourseCardNew
                  title={items.title}
                  key={index}
                  subtitle={`learn the basic ${items.title}`}
                  price={items.price}
                  image={items.img}
                  kategori={items.kategori.map((items: any) => items.title)}
                />
              ))}
          </div>
        </main>
      ) : query.slug?.at(0) == "blog" ? (
        <main className="w-full h-screen md:p-8 p-4">
          <div className="w-16 h-16 flex justify-center items-center bg-green-500 hover:cursor-pointer mb-7 rounded-xl ">
            <FaArrowLeft size={24} className="text-white" />
          </div>
          <h3 className="px-8 md:text-xl font-bold capitalize">
            hasil pencarian dari : {query.slug.at(1)}
          </h3>
          <div className="grid md:grid-cols-3 gap-3 md:mt-0 mt-6">
            {filter &&
              filter.map((items: any, index:any) => (
                <BlogCard key={index} title={items.title} id={items.id} />
              ))}
          </div>
        </main>
      ) : null}
    </>
  );
};

export default Dynamic;
