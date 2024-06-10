import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";

const paymentWithCompany = [
  {
    title: "Amazon",
  },
  {
    title: "GooglePay",
  },
  {
    title: "flip",
  },
  {
    title: "dana",
  },
  {
    title: "ovo",
  },
  {
    title: "paypal",
  },
];
const paymentWithBank = [
  {
    title: "btn",
  },
  {
    title: "bjb",
  },
  {
    title: "bca",
  },
  {
    title: "mandiri",
  },
  {
    title: "maybank",
  },
  {
    title: "cimb",
  },
];

const ShippingForm = () => {
  return (
    <div className="md:p-8 p-4 bg-gray-100 md:h-screen h-full flex-col md:flex-row flex gap-6 ">
      <LeftTopic />
      <div className="md:w-1/3 w-full h-1/2 bg-white p-8 rounded-lg flex flex-col justify-between gap-4">
        <div className="w-full h-2/6 flex flex-col gap-2 border-b-2 pb-4 border-slate-200">
          <h3 className="text-2xl font-bold capitalize">summary</h3>
          <p className="text-slate-500 text-sm">
            Lorem ipsum assumenda nulla, eveniet inventore natus reprehenderit
            quisquam sed dolore soluta?
          </p>
        </div>
        <div className="w-full h-3/6"></div>
        <div className="w-full h-2/6 pt-4 border-t-2 border-slate-200">
          <h3 className="text-2xl capitalize font-semibold">total :</h3>
        </div>
        <button className="py-3 rounded-lg bg-green-500 text-xl text-white capitalize">
          beli
        </button>
      </div>
    </div>
  );
};

const LeftTopic = () => {
  const { query } = useRouter();
  const [shipTo, setShipTo] = useState({});
  const [taxesPaidBy, setTaxesPaidBy] = useState("Sender");
  const [count, setCount] = useState(30);
  const [countYear, setCountYear] = useState(30);
  const [target, setTarget] = useState(1);
  const handleselect = (e:any) => {
    const hasil = e.target.value == "month" ? 30 : 720
    setCountYear(hasil)
  }
  return (
    <>
      {query.checkout?.at(1) === "premium" ? (
        <div className="md:w-2/3 w-full bg-white p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-6 capitalize">premium</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block mb-2 text-gray-700">type :</label>
              <select title="select" className="w-full p-2 border rounded">
                <option>premium</option>
                <option>Pro</option>
                <option>vip</option>
                {/* Add more options as needed */}
              </select>
            </div>
            <div>
              <label className="block mb-2 text-gray-700">Category:</label>
              <select
                title="select"
                onChange={handleselect}
                className="w-full p-2 border rounded"
              >
                <option>month</option>
                <option>year</option>
                {/* Add more options as needed */}
              </select>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block mb-2 text-gray-700">
                {"jml pembelian"}
              </label>
              <div className="flex">
                <div className="w-full p-2 border rounded-l">
                  {" "}
                  $ {countYear == 30 ? count : 720 * target}
                </div>
                <select
                  title="select"
                  onChange={(e: any) => {
                    setCount(
                      countYear == 30 ? 30 : 720 * parseInt(e.target.value)
                    );
                    setTarget(e.target.value);
                  }}
                  className="p-2 border rounded-r"
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                  {/* Add more options as needed */}
                </select>
              </div>
            </div>
            <div>
              <label className="block mb-2 text-gray-700">
                apakah anda member langganan kami sebelumnya ?
              </label>
              <div className="flex">
                <button
                  onClick={() => setTaxesPaidBy("Sender")}
                  className={`flex-1 p-2 border ${
                    taxesPaidBy === "Sender"
                      ? "bg-green-500 text-white"
                      : "bg-white text-gray-700"
                  }`}
                >
                  yes
                </button>
                <button
                  onClick={() => setTaxesPaidBy("Receiver")}
                  className={`flex-1 p-2 border ${
                    taxesPaidBy === "Receiver"
                      ? "bg-green-500 text-white"
                      : "bg-white text-gray-700"
                  }`}
                >
                  no
                </button>
              </div>
            </div>
          </div>
          <div className="w-full h-full">
            <h1 className="font-semibold mb-6">Metode Pembayaran</h1>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex gap-4 flex-col justify-start items-start">
                <h4 className="text-lg font-semibold capitalize">
                  selain bank
                </h4>
                <div className="w-full grid grid-cols-2 gap-4">
                  {paymentWithCompany.map((items, index) => (
                    <div
                      className={`w-full h-[70px] border-2 group hover:border-color-c2 group-focus:border-color-c2  transition-all rounded-lg `}
                      key={index}
                    >
                      <div className="w-full h-full flex justify-center items-center">
                        <label
                          htmlFor="credit-card"
                          className="h-full flex gap-2 items-center justify-center text-lg w-full"
                        >
                          <div className="flex justify-center items-center md:gap-6 gap-3">
                            <div className="w-2/3 h-4 flex justify-center items-center">
                              <Image
                                src={`/assets/paymentIcons/${items.title}.png`}
                                alt={""}
                                width={200}
                                height={200}
                                className={`w-full h-full ${items.title == "Amazon" || items.title == "GooglePay" ? ",md:scale-110":"md:scale-[2] scale-125"}`}
                              />
                            </div>
                            <span className="w-2/3 h-full md:text-md text-sm capitalize font-bold">
                              {items.title}
                            </span>
                          </div>
                        </label>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex gap-4 flex-col justify-start items-start">
                <h4 className="text-lg font-semibold capitalize">
                  dengan bank
                </h4>
                <div className="w-full grid grid-cols-2 gap-4">
                  {paymentWithBank.map((items, index) => (
                    <div
                      className="w-full h-[70px] hover:border-color-c2 border-2 border-slate-300 rounded-lg"
                      key={index}
                    >
                      <div className="w-full h-full flex justify-center items-center">
                        <label
                          htmlFor="credit-card"
                          className="h-full flex gap-2 items-center justify-center text-lg w-full"
                        >
                          <div className="flex justify-center items-center md:gap-6 gap-3">
                            <div className="w-full h-4 flex justify-center items-center">
                              <Image
                                src={`/assets/paymentIcons/${items.title}.png`}
                                alt={""}
                                width={200}
                                height={200}
                                className="w-full h-full md:scale-[2] scale-125"
                              />
                            </div>
                            <span className="w-2/3 h-full md:text-md text-sm capitalize font-bold">
                              {items.title}
                            </span>
                          </div>
                        </label>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* <CardMetodePembayaran /> */}
            <div className="flex justify-between items-center mt-8">
              <button className="bg-green-500 text-white px-6 py-2 rounded-lg">
                Next Step
              </button>
            </div>
          </div>
        </div>
      ) : query.checkout?.at(2) === "badge" ? (
        <div className="md:w-2/3 w-full bg-white p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-6 capitalize">
            {query.checkout?.at(2)}
          </h2>
        </div>
      ) : (
        <div className="md:w-2/3 w-full bg-white p-8 rounded-lg flex flex-col">
          <h2 className="text-2xl font-bold mb-6 capitalize">
            {query.checkout?.at(1)}
          </h2>
          <div className="flex flex-col gap-4">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="w-full h-full flex flex-col gap-2">
                <h3 className=" capitalize">nama class </h3>
                <div className="py-2 px-4 border rounded-md">
                  {query.checkout?.at(3)}
                </div>
              </div>
              <div className="w-full h-full flex flex-col gap-2">
                <h3 className=" capitalize">type class </h3>
                <select
                  title="select"
                  className="w-full p-2 border rounded capitalize"
                >
                  <option value="basic">basic</option>
                  <option value="intermediate">intermediate</option>
                  <option value="hard">hard</option>
                  <option value="pro">pro</option>
                  {/* Add more options as needed */}
                </select>
              </div>
            </div>
            <div className="w-full h-full">
              <h1 className="font-semibold mb-6">Metode Pembayaran</h1>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex gap-4 flex-col justify-start items-start">
                  <h4 className="text-lg font-semibold capitalize">
                    selain bank
                  </h4>
                  <div className="w-full grid grid-cols-2 gap-4">
                    {paymentWithCompany.map((items, index) => (
                      <div
                        className={`w-full h-[70px] border-2 group hover:border-color-c2 group-focus:border-color-c2  transition-all rounded-lg `}
                        key={index}
                      >
                        <div className="w-full h-full flex justify-center items-center">
                          <label
                            htmlFor="credit-card"
                            className="h-full flex gap-2 items-center justify-center text-lg w-full"
                          >
                            <div className="flex justify-center items-center md:gap-6 gap-3">
                              <div className="w-2/3 h-4 flex justify-center items-center">
                                <Image
                                  src={`/assets/paymentIcons/${items.title}.png`}
                                  alt={""}
                                  width={200}
                                  height={200}
                                  className="w-full h-full md:scale-110"
                                />
                              </div>
                              <span className="w-2/3 h-full md:text-md text-sm capitalize font-bold">
                                {items.title}
                              </span>
                            </div>
                          </label>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex gap-4 flex-col justify-start items-start">
                  <h4 className="text-lg font-semibold capitalize">
                    dengan bank
                  </h4>
                  <div className="w-full grid grid-cols-2 gap-4">
                    {paymentWithBank.map((items, index) => (
                      <div
                        className="w-full h-[70px] hover:border-color-c2 border-2 border-slate-300 rounded-lg"
                        key={index}
                      >
                        <div className="w-full h-full flex justify-center items-center">
                          <label
                            htmlFor="credit-card"
                            className="h-full flex gap-2 items-center justify-center text-lg w-full"
                          >
                            <div className="flex justify-center items-center gap-3 md:gap-6">
                              <div className="w-full h-4 flex justify-center items-center">
                                <Image
                                  src={`/assets/paymentIcons/${items.title}.png`}
                                  alt={""}
                                  width={200}
                                  height={200}
                                  className="w-full h-full md:scale-[2]"
                                />
                              </div>
                              <span className="w-2/3 h-full md:text-md text-sm capitalize font-bold">
                                {items.title}
                              </span>
                            </div>
                          </label>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* <CardMetodePembayaran /> */}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default ShippingForm;
