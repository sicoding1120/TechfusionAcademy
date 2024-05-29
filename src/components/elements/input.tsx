import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface Icons {
  iconFirst?: boolean | null;
  iconLast?: boolean | null;
  type?: string | null;
  key?: any;
  imageUrl: string;
  placeholder: string;
  error?: any;
}

const Input = ({
  iconFirst,
  iconLast,
  type,
  key,
  imageUrl,
  placeholder,
}: Icons) => {
  const image = <Image src={imageUrl} alt={""} width={20} height={20} />;
  const [classNameInput, setClassNameInput] = useState("");
  const [password, setPassword] = useState("");
  const valueInput = (e: any) => {
    setClassNameInput(
      e.target.value === "" ||
        !e.target.value.includes("@") ||
        !e.target.value.includes("gmail.com")
        ? "input-error"
        : "input-success"
    );
    return classNameInput;
  };
  const simbol = ["!", "#", "$", "%", "&"];
  const passwordValid = (e: any) => {
    setPassword(
      e.target.value.length < 8 || e.target.value === ""
        ? "input-error"
        : simbol.some((s) => e.target.value.includes(s))
        ? "input-success"
        : "input-warning"
    );
  };

  return (
    <label
      className={
        type === "password"
          ? "form-control w-full"
          : `input input-bordered flex items-center gap-2 py-8 ${classNameInput}`
      }
      key={key}
    >
      {type === "password" ? null : iconFirst === false ? null : image}
      {type === "password" ? (
        <label
          className={`input input-bordered flex gap-2 py-8 items-center ${password}`}
        >
          {iconFirst === false ? null : image}
          <input
            type={type || "text"}
            className={type === "password" ? "grow" : "grow"}
            placeholder={placeholder}
            onChange={passwordValid}
          />
        </label>
      ) : (
        <input
          type={type || "text"}
          className={
            type === "password"
              ? `input input-bordered ${password}  w-full max-w-xs`
              : "grow"
          }
          placeholder={placeholder}
          onChange={type === "email" ? valueInput : undefined}
        />
      )}
      {type === "password" ? (
        <div className="label">
          <span className="label-text-alt flex items-center gap-2 text-white md:text-black">
            <input type="checkbox" name="remember me" id="remmerber me" />
            Remember me
          </span>
          <Link
            href={"/forgotPassword  "}
            className="label-text-alt text-blue-500 "
          >
            forgot password
          </Link>
        </div>
      ) : null}
      {iconLast === false ? null : image}
    </label>
  );
};

export default Input;
