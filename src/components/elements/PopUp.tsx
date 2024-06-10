import Link from 'next/link';
import React from 'react'

const PopUp = ({title,btnLeft,btnRight,linkBtnLeft,linkBtnRight }:any) => {
  return (
    <div
      role="alert"
      className="mx-auto max-w-lg rounded-lg sm:p-6 lg:p-8"
    >
      <div className="flex items-center gap-4">
        <span className="shrink-0 rounded-full bg-emerald-400 p-2 text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-4 w-4"
          >
            <path
              fill-rule="evenodd"
              d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </span>

              <p className="font-medium sm:text-lg text-emerald-600">{title}</p>
      </div>

      <p className="mt-4 text-gray-600">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore?
      </p>

      <div className="mt-6 sm:flex sm:gap-4">
        <Link
          href={linkBtnLeft ? linkBtnLeft : " "}
          className=" capitalize inline-block w-full rounded-lg bg-emerald-500 px-5 py-3 text-center text-sm font-semibold text-white sm:w-auto"
        >
                  {btnLeft}
        </Link>

        <Link
                  href={linkBtnRight ? linkBtnRight : ""}
          className=" capitalize mt-2 inline-block w-full rounded-lg bg-stone-300 px-5 py-3 text-center text-sm font-semibold text-gray-800 sm:mt-0 sm:w-auto"
        >
                  {btnRight}
        </Link>
      </div>
    </div>
  );
}

export default PopUp