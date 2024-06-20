import React, { useState } from "react";
import BtnPricing from "../elements/btnPricing";
import dataPricing from "../data/json/pricing.json";
import Pricing from "../elements/pricing";
import Modal from "react-modal"; // removed because it's not being used
import CoursesPricing from "../elements/ClassPricing";
import { FaX } from "react-icons/fa6";
import Image from "next/image";
import { useRouter } from "next/router";
import ToggleSwicth from "../elements/toggleSwicth";
import { MdInfoOutline } from "react-icons/md";
import PopUp from "../elements/PopUp";


Modal.setAppElement("#__next");
const Price = () => {
  const [boolean, setBoolean] = useState(false)
    const [modalIsOpen, setIsOpen] = useState(false);

  const router = useRouter();

  const handleInfo = () => {
      setIsOpen(true);
  }
    function closeModal() {
      setIsOpen(false);
    }

  console.log(boolean);
  return (
    <main className="dark:bg-color-c7 dark:text-white bg-gray-50">
      {/* <section className="w-full h-full  flex flex-col md:gap-24 gap-8 md:px-14 px-4 border-b-2 border-black pb-24">
        <h2 className="text-6xl font-bold capitalize text-center">{"diskon dan promo"}</h2>
        <section className="grid md:grid-cols-5 grid-cols-2 gap-4 w-full h-full">
          {diskon.map((item, index) => (
            <div
              className="w-full md:h-[306px] cursor-pointer hover:scale-110 transition-all"
              key={index}
            >
              <Image
                src={`/TechfusionAcademy/assets/coupons/diskon${item.price}.png`}
                alt=""
                height={200}
                width={200}
                className="w-full h-full"
              />
            </div>
          ))}
        </section>
      </section> */}
      {/* <section className="w-full h-full md:mt-24 pt-4 border-black">
        <CoursesPricing />
      </section> */}
      {/* <section className="flex flex-col justify-center w-full md:gap-24 gap-8 md:py-24 py-14">
        <div className="flex gap-8 w-full h-full bg-bgFooter justify-center capitalize py-24">
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
      </section> */}
      <section className="w-full h-screen bg-bgPricing bg-cover flex justify-center items-center mb-96">
        <h1 className=" text-[5rem] font-bold w-3/5 text-center relative bottom-36 left-8">
          Pricing Plans for You Every Need
        </h1>
      </section>
      <section className="w-full h-24 relative bottom-[33rem] flex flex-col items-center gap-14 justify-center py-14">
        <div className="flex items-center gap-5 capitalize relative left-8">
          <span>month</span>
          <ToggleSwicth onclick={() => setBoolean(!boolean)} />
          <span>years</span>
          <span className="cursor-pointer" onClick={handleInfo}>
            <MdInfoOutline size={20} />
          </span>
        </div>
        <div className="flex gap-24">
          {dataPricing.map((items, index) => {
            return (
              <Pricing
                key={index + 1}
                price={boolean === true ? items.price * 12 : items.price}
                type={boolean === true ? "years" : "mounth"}
                fiturAccess={items.fitur}
                title={items.title}
                onclick={undefined}
                index={index}
              />
            );
          })}
        </div>
      </section>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
        className="relative bg-white rounded-lg shadow-lg w-full max-w-md p-4"
        contentLabel="Example Modal"
      >
        <button
          onClick={closeModal}
          className="w-full flex justify-end text-2xl px-8 relative top-4 text-color-c2"
          title="exit"
        >
          <FaX size={20} />
        </button>
        <PopUp
          title="will you buy this class ?"
          btnLeft="yes"
          btnRight="no"
          linkBtnLeft={`/pre/courses/class/get/checkout`}
        />
      </Modal>
    </main>
  );
};

export default Price;
