import React from "react";

export default function Card({
  title,
  description,
  imageUrl,
  urlGit,
  urlSito,
}) {
  const handleButtonClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className=" gap-10 h-[620px] sm:w-[350px] flex flex-col items-center rounded-lg m-2 bg-blue-900 overflow-hidden hover:bg-blue-800 hover:scale-105 transition">
      <img className="w-full" src={imageUrl} alt="Card" />
      <div className="px-6 py-0">
        <div className="font-bold text-blue-300 text-2xl mb-2">{title}</div>
        <p className="text-slate-100 text-base">{description}</p>
      </div>
      <div className="px-6 py-7 w-full flex flex-col justify-end items-end">
        <button
          className="bg-blue-700 w-full p-2 mb-4 rounded-xl transition-all hover:underline hover:bg-blue-600 underline-offset-4 mt-auto"
          onClick={() =>
            handleButtonClick(
              urlGit
              //"https://github.com/Erry002/simulazione-landing/tree/main/code"
            )
          }
        >
          Apri su GitHub
        </button>
        <button
          className="bg-red-700 w-full p-2 mb-4 rounded-xl transition-all hover:underline hover:bg-red-600 underline-offset-4 mt-auto"
          onClick={() =>
            handleButtonClick(
              urlSito
              //"https://erryairlines.netlify.app/"
            )
          }
        >
          Provalo subito!
        </button>
      </div>
    </div>
  );
}
