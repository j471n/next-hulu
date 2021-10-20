import Image from "next/image";
import { ThumbUpIcon } from "@heroicons/react/outline";
import { forwardRef } from "react";

const Thumbnail = forwardRef(({ result }, ref) => {
  const NOT_FOUND_IMAGE = "https://rb.gy/afrcgj";
  const BASE_URL = "https://image.tmdb.org/t/p/original";
  return (
    <div
      ref={ref}
      className="p-2 group cursor-pointer transition duration-200 ease-in sm:hover:scale-105 hover:z-50  rounded-lg shadow-xl sm:shadow-none my-3 sm:my-0"
    >
      <Image
        src={
          `${BASE_URL}${result.backdrop_path}` ||
          result.poster_path ||
          `${BASE_URL}${result.poster_path}` ||
          NOT_FOUND_IMAGE
        }
        width={1280}
        height={720}
        alt=""
        layout="responsive"
      />

      <div className="p-2">
        <p className="truncate max-w-md">{result.overview}</p>
        <h2 className="mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">
          {result.title || result.original_name}
        </h2>
        <p className="flex items-center opacity-0 group-hover:opacity-100">
          {result.media_type && `${result.media_type}`}
          {result.release_date || result.first_air_date}
          <ThumbUpIcon className="h-5 mx-2" /> {result.vote_count}
        </p>
      </div>
    </div>
  );
});

export default Thumbnail;
