import requests from "../utils/requests";
// import { useReducer } from "react";
import { useRouter } from "next/router";

export default function Nav() {
  const router = useRouter();
  return (
    <nav className="relative">
      <div className="flex px-10 sm:px-20 text-2xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide">
        {Object.entries(requests).map(([key, value]) => {
          return (
            <h2
              onClick={() => router.push(`/?genre=${key}`)}
              key={key}
              className="last:pr-24 capitalize cursor-pointer select-none transition duration-100 transform sm:hover:scale-125 sm:hover:text-white active:scale-110 active:text-white sm:active:text-red-500"
            >
              {value.title}
            </h2>
          );
        })}
      </div>

      {/* Gradient touch to the left and right */}
      <div className="absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-10 w-1/12" />
      <div className="absolute top-0 left-0 bg-gradient-to-r from-[#06202A] h-10 w-1/12" />
    </nav>
  );
}
