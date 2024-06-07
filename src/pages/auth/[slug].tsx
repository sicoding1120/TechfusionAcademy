import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { Kanit, Inter } from "next/font/google";
import { Circle } from "@chakra-ui/react";
import dataRandom from "../../components/data/json/dataRandom.json";
import InputNormal from "@/components/elements/inputNormal";
import user from "../../../data/user.json";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const kanit = Kanit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600"],
});
const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600"],
});
const validOfId = [
  ...Array.from({ length: 9 }, (_, i) => (i + 1).toString()), // Angka 1 sampai 9
  ...Array.from({ length: 8 }, (_, i) => String.fromCharCode(97 + i)), // Huruf a sampai h
];

const Authentification = () => {
  const { query } = useRouter();
  const router = useRouter();
  const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [handleSubmitState, setHandleSubmitState] = useState({});
  const [response, setResponse] = useState("");
  // const image = <Image src={imageUrl} alt={""} width={20} height={20} />;
  // const [classNameInput, setClassNameInput] = useState("");
  const [password, setPassword] = useState("");
  const [count, setCount] = useState("");
  // const [input, setInput] = useState("");
  // const valueInput = (e: any) => {
  //   setClassNameInput(
  //     e.target.value === "" ||
  //       !e.target.value.includes("@") ||
  //       !e.target.value.includes("gmail.com")
  //       ? "input-error"
  //       : "input-success"
  //   );
  //   return classNameInput;
  // };

  // const simbol = ["!", "#", "$", "%", "&"];
  // const passwordValid = (e: any) => {
  //   const { value, name: inputName } = e.target;
  //   setInput(e.target.value);
  //   setPassword(
  //     e.target.value.length < 8 || e.target.value === ""
  //       ? "input-error"
  //       : simbol.some((s) => e.target.value.includes(s))
  //       ? "input-success"
  //       : "input-warning"
  //   );
  // }

  const createIdRandom = () => {
    // Tentukan panjang acak antara 3 dan 5
    const idLength = Math.floor(Math.random() * (16 - 3 + 1)) + 3;
    let id = "";

    // Buat ID dengan panjang yang ditentukan
    for (let i = 0; i < idLength; i++) {
      const randomIndex = Math.floor(Math.random() * validOfId.length);
      id += validOfId[randomIndex];
    }

    setCount(id);
    return id;
  };

  // Contoh penggunaan
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    let id:any;
    if (!count) {
      const newId = createIdRandom();
      setCount(newId);
      toast.warning("server error harap ulangi langkah tadi")
    } else {
      if (!name || !password) {
        toast("nama atau password harus di isi")
      } else {
        toast.success("akun anda terbuat")
        localStorage.setItem(`user_@${name}`, JSON.stringify({ name, password }));
        setName("");
        setPassword("");
      }
    }
  };
  const handleUser = (event: any) => {
    event.preventDefault();
    let arr:any = [];
    const login = arr;
    const nameU = localStorage.getItem(`user_@${name}`);
    const file = JSON.parse([nameU] as never)
arr.push(file)
      if (login.length > 0) {
        toast.success("berhasil login");
        router.push(`/e/account/me/@${name}/dashboard`)
      } else if (!name || !password) {
        toast(`masukan ${!password ? "password" : ""} ${!name ? "name" : ""} terlebih dahulu`)
      } else {
        const CustomToast = ({ closeToast }: any) => (
          <div className="flex flex-col gap-4">
            <p>akun belum terdaftar pergi ke register</p>
            <div className="flex gap-4">
              <button
                className="w-1/2 btn"
                onClick={() => {
                  handleConfirm();
                  closeToast();
                }}
              >
                Yes
              </button>
              <button onClick={closeToast} className="btn w-1/2">
                No
              </button>
            </div>
          </div>
        );
        toast.error(<CustomToast />);
        const handleConfirm = () => {
          // Tindakan yang dilakukan saat pengguna mengklik "Yes"
          router.push("/auth/register");
          toast.success("anda di arahkan ke register", {
            position: "top-left",
          });
        }
    }
  };

  return (
    <section className={`${kanit.className} w-full h-screen md:bg-white flex`}>
      <div
        className={`md:w-2/5 w-full h-full px-8 py-14 bg-bgLogin3 md:bg-bgLogin4`}
      >
        <div className="w-full h-full flex flex-col justify-center md:gap-14 gap-8">
          <div className="flex flex-col gap-4">
            <div className="w-full h-12 justify-start flex md:hidden">
              <Link
                href={"/"}
                className="w-12 h-12 bg-white rounded-md cursor-pointer"
              >
                <Image
                  src={"/TechfusionAcademy/assets/logoWeb.png"}
                  alt={""}
                  width={100}
                  height={100}
                />
              </Link>
            </div>

            <div className="flex flex-col">
              <p className={"md:text-4xl md:text-black text-white text-2xl"}>
                {query.slug === "login"
                  ? "Log in to your account"
                  : "Register for a new account"}
              </p>
              <p className="md:text-md text-sm md:text-color-text-2 text-white/70">
                {query.slug === "register"
                  ? "Welcome Buddy, please register to join with us"
                  : "Welcome back, select method to login"}
              </p>
            </div>
          </div>
          {query.slug === "login" ? (
            <div className={inter.className}>
              <div className="flex gap-4">
                {dataRandom.id.button.type[2].data.map(
                  (items: any, index: any) => (
                    <button
                      className="md:px-14 px-8 btn bg-white border border-grey"
                      key={index}
                    >
                      <Image
                        src={items.leftIconUrl}
                        alt="Image Alt Text"
                        width={20}
                        height={20}
                      />

                      {items.title}
                    </button>
                  )
                )}
              </div>
            </div>
          ) : null}
          <div className="flex flex-col gap-8">
            <form
              action=""
              onSubmit={query.slug === "register" ? handleSubmit : undefined}
            >
              {query.slug === "register" ? (
                <div className="flex flex-col gap-4">
                  {/* {dataRandom.id.input.type[1].data.map((items, index) => (
                    <Input
                      placeholder={`enter your ${items.name}`}
                      key={index}
                      iconFirst={true}
                      imageUrl={items.iconUrl}
                      type={items.type}
                      iconLast={false}
                      image={undefined}
                      classNameInput={classNameInput}
                      password={password}
                      passwordValid={passwordValid}
                      valueInput={valueInput}
                    />
                  ))} */}
                  <InputNormal
                    type={"text"}
                    onchange={(e: any) => setName(e.target.value)}
                    value={name}
                  >
                    d
                  </InputNormal>
                  <InputNormal
                    type={"password"}
                    onchange={(e: any) => setPassword(e.target.value)}
                    value={password}
                  >
                    d
                  </InputNormal>
                </div>
              ) : (
                <div className="flex flex-col gap-4">
                  {/* {dataRandom.id.input.type[2].data.map((items, index) => (
                    <Input
                      placeholder={`enter your ${items.name}`}
                      key={index}
                      iconFirst={true}
                      imageUrl={items.iconUrl}
                      type={items.type}
                      iconLast={false}
                      image={undefined}
                      classNameInput={undefined}
                      password={undefined}
                      passwordValid={undefined}
                      valueInput={undefined}
                    />
                  ))} */}
                  <InputNormal
                    type={"text"}
                    onchange={(e: any) => setName(e.target.value)}
                    value={name}
                  >
                    d
                  </InputNormal>

                  <InputNormal
                    type={"password"}
                    onchange={(e: any) => setPassword(e.target.value)}
                    value={password}
                  >
                    d
                  </InputNormal>
                </div>
              )}
            </form>
            <div className="w-full flex flex-col gap-4 text-center">
              <button
                className="btn w-full bg-bgButton bg-cover  text-white"
                type="submit"
                onClick={query.slug === "register" ? handleSubmit : handleUser}
              >
                {query.slug === "register" ? "Register" : "Log in"}
              </button>
              <div className="md:text-color-text-2 text-white/70 flex gap-2 justify-center">
                {query.slug === "register"
                  ? "Do you have an account?"
                  : "Don't have an account?"}
                <Link
                  href={
                    query.slug === "register" ? "/auth/login" : "/auth/register"
                  }
                  className="text-blue-500 cursor-pointer"
                >
                  {query.slug === "register" ? "Log in" : "create an account"}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <RightSection query={query.slug} />
    </section>
  );
};

const RightSection = ({ query }: { query: any }) => (
  <div
    className={`md:w-3/5 hidden md:block h-full ${
      query === "register" ? "bg-bgLogin2" : "bg-bgLogin"
    } bg-no-repeat bg-cover p-4 pl-20`}
  >
    <div className=" w-full h-full flex flex-col p-4 gap-5">
      <div className="w-full h-16 justify-end flex">
        <Link
          href={"/"}
          className="w-16 h-16 bg-white rounded-md cursor-pointer"
        >
          <Image
            src={"/TechfusionAcademy/assets/logoWeb.png"}
            alt={""}
            width={100}
            height={100}
          />
        </Link>
      </div>
      <div className="w-full h-full text-white p-4 flex justify-center items-center">
        <div className="flex flex-col text-center gap-4 bg-gray-900/70 p-8 rounded-lg">
          <p className={`text-3xl`}>
            {query === "register" ? "Join us Buddy" : "Welcome Back Buddy"}
          </p>
          <p className="flex flex-col ">
            To get all the interesting features and many
            <span>courses that can be accessed</span>
          </p>
        </div>
      </div>
      <div className="w-full h-24  flex justify-center items-end gap-3">
        <Link href={"/auth/login"}>
          <Circle
            size={4}
            className={`${query === "login" ? "bg-white" : " bg-white/30"}`}
          ></Circle>
        </Link>
        <Link href={"/auth/register"}>
          <Circle
            size={4}
            className={`${query === "login" ? "bg-white/40" : " bg-white"}`}
          ></Circle>
        </Link>
      </div>
    </div>
  </div>
);

export default Authentification;
