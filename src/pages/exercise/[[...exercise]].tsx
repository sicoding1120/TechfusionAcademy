import Footer from "@/components/elements/footer";
import HeaderNav from "@/components/elements/headerNavExer";
import { Box, Circle } from "@chakra-ui/react";
import React from "react";
import { BsChatRightDots } from "react-icons/bs";
import { FaSearchPlus } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { Button, Radio, RadioGroup, Stack } from "@chakra-ui/react";
import BtnNext from "@/components/elements/btnNext";

const Dynamic = () => {
  return (
    <main className="w-full h-full py-6 flex flex-col gap-8">
      <div className="md:px-8 px-4 w-full h-full flex flex-col gap-8">
        <HeaderNav />
        <section className="w-full flex flex-col md:flex-row md:h-screen h-full rounded-xl border-2 pb-6 border-color-c7">
          <div className="md:w-1/4 w-full md:border-r-2 md:border-black p-4 flex flex-col gap-14 ">
            <div>
              <h3 className="text-2xl capitalize font-semibold">notes :</h3>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex gap-3 items-center">
                <Circle size={3} className="bg-color-c10" />
                <p>Check the final result before sending.</p>
              </div>
              <div className="flex gap-3 items-center">
                <Circle size={3} className="bg-color-c10" />
                <p>Check the final result before sending.</p>
              </div>
            </div>
            <div className="px-8">
              <button className="btn w-full bg-color-c9 capitalize text-lg hover:bg-color-c2 hover:text-white">
                <BsChatRightDots />
                ask forum
              </button>
            </div>
          </div>
          <div className="md:w-3/4 h-full px-4 py-2 flex flex-col gap-8">
            <div className="flex items-center gap-2 font-semibold capitalize text-color-c10">
              <FaSearchPlus />
              pertanyaan
            </div>
            <div className="px-4 py-2 w-full bg-color-c1/90 capitalize flex gap-2 rounded-lg items-center">
              <p>you get :</p>
              <FaStar className="text-yellow-400" />0 techpoints
            </div>
            <div className="w-full px-4 py-2 border rounded-lg border-black flex flex-col gap-4">
              <div className="flex flex-col gap-3">
                <p>{"(10 TEchPoin)"}</p>
                <h4 className="text-lg font-bold">
                  Fill in the dots below with the correct logical operators!
                </h4>
              </div>
              <div className="w-full h-full p-4 bg-color-c5/5">
                <code>
                  {`
                  let number1 = '2'; \n let number2 = 3; \n let findTheLogic = number1
                  === '2' && number2 === 3; console.log(findTheLogic);
                  //Output: true
                  `}
                </code>
              </div>
            </div>
            <div>
              <RadioGroup>
                <Stack direction="column" gap={3}>
                  <Box className="flex py-2 px-2 w-full border-2 rounded-lg border-black hover:border-color-c2 transition-all">
                    <Radio value="a" className="">
                      &&
                    </Radio>
                  </Box>
                  <Box className="flex py-2 px-2 w-full border-2 rounded-lg border-black hover:border-color-c2 transition-all">
                    <Radio value="b" className="">
                      ||
                    </Radio>
                  </Box>
                  <Box className="flex py-2 px-2 w-full border-2 rounded-lg border-black hover:border-color-c2 transition-all">
                    <Radio value="c" className="">
                      !
                    </Radio>
                  </Box>
                </Stack>
              </RadioGroup>
            </div>
            <div className="flex w-full justify-end">
              <button className="btn md:w-1/4 capitalize text-lg text-white bg-blue-600 hover:bg-blue-600">
                Kirim Jawaban
              </button>
            </div>
          </div>
        </section>
        <section className="w-full px-6 py-2 h-[8vh] bg-color-c9 rounded-xl flex justify-between items-center">
          <BtnNext reverse={true}/>
          <span className=" md:flex hidden md:text-xl text-sm w-[200px] md:w-[200px] bg-black/40 text-color-c9 rounded-md text-center font-semibold py-2 px-4 capitalize ">
            see material
          </span>
          <BtnNext reverse={false}/>
        </section>
      </div>
      <Footer />
    </main>
  );
};

export default Dynamic;
