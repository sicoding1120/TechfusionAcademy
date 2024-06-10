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
    <main>
      <section className="w-full h-[60vh] px-8 py-8">
        <div className="w-full h-full bg-blue-600"></div>
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
      <section className="w-full h-full px-14">
        <CoursesPricing />
      </section>
      <section className="w-full h-full flex flex-col gap-24 px-14 mt-14">
        <h2 className="text-2xl font-bold capitalize">{"diskon dan promo"}</h2>
        <section className="grid grid-cols-5 gap-4 w-full h-full">
          {diskon.map((item, index) => (
            <div
              className="w-full h-[306px] cursor-pointer hover:scale-110 transition-all"
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
    </main>
  );
};

export default Price;