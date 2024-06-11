import React, { useState } from "react";
import BtnPricing from "../elements/btnPricing";
import dataPricing from "../data/json/pricing.json";
import Pricing from "../elements/pricing";
import CoursesPricing from "../elements/ClassPricing";
import Image from "next/image";
import { useRouter } from "next/router";

const diskon = [
  { price: 25 },
  { price: 35 },
  { price: 40 },
  { price: 50 },
  { price: 75 },
];
const Price = () => {
    const [ismultiplication, setIsMultiplication] = useState(false);
    const router = useRouter()
  return (
    <main className="dark:bg-color-c7 dark:text-white">
      <section className="w-full h-full  flex flex-col md:gap-24 gap-8 md:px-14 px-4">
        <h2 className="text-6xl font-bold capitalize text-center">{"diskon dan promo"}</h2>
        <section className="grid md:grid-cols-5 grid-cols-2 gap-4 w-full h-full">
          {diskon.map((item, index) => (
            <div
              className="w-full md:h-[306px] cursor-pointer hover:scale-110 transition-all"
              key={index}
            >
              <Image
                src={`/assets/coupons/diskon${item.price}.png`}
                alt=""
                height={200}
                width={200}
                className="w-full h-full"
              />
            </div>
          ))}
        </section>
      </section>
      <section className="flex flex-col justify-center w-full md:gap-24 gap-8 md:py-24 py-14">
        <div className="flex gap-8 w-full h-full justify-center capitalize">
          <BtnPricing
            title="mounth"
            handleButtonPricing={() => setIsMultiplication(false)}
          />
          <BtnPricing
            title="years"
            handleButtonPricing={() => setIsMultiplication(true)}
          />
        </div>
        <div className="flex  flex-col md:flex-row px-6 md:px-0 justify-center items-center w-full gap-8">
          {dataPricing.map((items, index) => (
            <Pricing
              onclick={() => router.push(`/pre/e/premium/checkout`)}
              time={ismultiplication === true ? "years" : "mounth"}
              price={ismultiplication === true ? items.price * 12 : items.price}
              type={items.title}
              fiturAccess={items.fitur}
              key={index}
              className={index % 2 === 0 ? "" : "md:scale-110 scale-100"}
            />
          ))}
        </div>
      </section>
      <section className="w-full h-full md:px-14">
        <CoursesPricing />
      </section>
    </main>
  );
};

export default Price;
