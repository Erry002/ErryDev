import React from "react";
import { Link } from "react-router-dom";

export default function CardLink({
  title,
  description,
  imageUrl,
  urlGit,
  urlSito,
  btnTesto1,
  btnTesto2,
}) {
  const handleButtonClick = (url) => {
    window.open(url);
  };

  return (
    <div className=" gap-10 h-[620px] sm:w-[350px] flex flex-col items-center rounded-lg m-4 bg-blue-900 overflow-hidden hover:bg-blue-800 hover:scale-105 transition">
      <img className="w-full" src={imageUrl} alt="Card" />
      <div className="px-6 sm:-mb-14 sm:h-[250px]">
        <div className="font-bold text-blue-300 text-2xl mb-2">{title}</div>
        <p className="text-slate-100 h-full">{description}</p>
      </div>
      <div className="px-6 py-7 w-full flex flex-col justify-end items-end">
        <button
          className="bg-blue-700 w-full p-2 mb-4 rounded-xl transition-all hover:underline hover:bg-blue-600 underline-offset-4 mt-auto"
          onClick={() =>
            handleButtonClick(
              urlGit
            )
          }
        >
          {btnTesto1}
        </button>
        <Link
            to={urlSito}
            className="bg-red-700 w-full p-2 mb-4 rounded-xl transition-all hover:underline hover:bg-red-600 underline-offset-4 text-center "
        >
            {btnTesto2}
        </Link>
      </div>
    </div>
  );
}