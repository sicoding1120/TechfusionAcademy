import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import materialClass from "../../components/data/json/materiOfClass.json";
import BtnNext from "@/components/elements/btnNext";

const Dynamic = () => {
  const [id, setId] = useState(0);
  const { query } = useRouter();
  const router = useRouter()
  console.log(query.class?.at(2));

  useEffect(() => {
    filter();
  });

  console.log(id);
  if (id > 13) {
    setId(id - 1);
  } else {
    if (id < 0) {
      setId(id + 1);
    }
  }

  const filter = () =>
    materialClass.filter((item) => item.title == query.class?.at(2));
  return (
    <main className="w-full h-full md:px-8 px-4 py-6 flex flex-col gap-8 dark:bg-color-c7 dark:text-white">
      <section className="w-full h-full rounded-xl border-2 border-color-c7 dark:border-color-c2 dark:border-2 p-4">
        {filter()
          .map((item) => item.material?.at(id))
          .map((materialItem: any, index: number) => (
            <div
              className="w-full h-full flex flex-col gap-6 pb-24 px-2"
              key={index}
            >
              <h1 className="capitalize md:text-3xl text-2xl text-center md:text-start font-bold">
                {materialItem?.title}
              </h1>
              <div className="">
                <iframe
                  className="w-full md:h-[90vh] h-[30vh] rounded-xl"
                  src={materialItem?.url}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="flex flex-col gap-2 md:px-6">
                <h2 className="capitalize text-3xl font-bold">
                  {materialItem?.subtitle}
                </h2>
                <div className="flex flex-col gap-4">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Doloribus voluptate nisi voluptates perspiciatis dolores
                    porro eaque culpa distinctio harum itaque aspernatur animi
                    velit vero, eligendi minus quidem in quisquam assumenda!
                    Alias nostrum expedita nesciunt vero ab nulla eveniet
                    tempora ipsam natus delectus nemo odit dolor voluptatum
                    consequuntur corporis at quo sunt, dicta autem! Inventore,
                    voluptas error quia accusantium placeat consectetur.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Doloribus voluptate nisi voluptates perspiciatis dolores
                    porro eaque culpa distinctio harum itaque aspernatur animi
                    velit vero, eligendi minus quidem in quisquam assumenda!
                    Alias nostrum expedita nesciunt vero ab nulla eveniet
                    tempora ipsam natus delectus nemo odit dolor voluptatum
                    consequuntur corporis at quo sunt, dicta autem! Inventore,
                    voluptas error quia accusantium placeat consectetur.
                  </p>
                </div>
                <div className="w-full md:h-[40vh] h-full border-t-2 border-black dark:border-color-c2 mt-4 md:p-6 py-8 md:py-0 ">
                  <div className="w-full h-full text-center justify-center items-center flex flex-col gap-14 md:px-36">
                    <div className="flex flex-col gap-4 items-center">
                      <h2 className="md:text-3xl text-lg font-bold ">
                        {"Let's test your knowledge with practice!"}
                      </h2>
                      <p className="md:w-[45rem] md:text-xl">
                        After reading the material, it is time for you to
                        measure your knowledge of this material. You can still
                        access this material when doing the exercises.
                      </p>
                    </div>
                    <button onClick={() => router.push(`/exercise/${materialItem.title}`)} className="btn w-[20rem] capitalize text-color-c10 text-xl font-bold hover:bg-color-c2 hover:text-color-c1 bg-color-c9">
                      start exercise
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </section>
      <section className="w-full px-6 py-2 h-[8vh] bg-color-c9 rounded-xl flex justify-between items-center">
        <BtnNext reverse={true} onclick={() => setId(id - 1)} />
        <span className="md:text-xl text-sm w-[200px] md:w-[100px] text-center font-semibold py-2 px-4  text-black capitalize ">
          page {id + 1}
        </span>
        <BtnNext reverse={false} onclick={() => setId(id + 1)} />
      </section>
    </main>
  );
};

export default Dynamic;
