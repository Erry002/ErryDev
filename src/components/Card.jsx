import React from "react";

export default function Card({
  title,
  description,
  imageUrl,
  urlGit,
  urlSito,
  btnTesto1,
  btnTesto2,
}) {
  const handleButtonClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className=" gap-10 h-[620px] sm:w-[350px] flex flex-col items-center rounded-lg m-4 bg-blue-900 overflow-hidden hover:bg-blue-800 hover:scale-105 transition">
      <img className="w-full" src={imageUrl} alt="Card" />
      <div className="px-6 -mb-4 sm:h-[250px]">
        <div className="font-bold text-blue-300 text-2xl mb-2">{title}</div>
        <p className="text-slate-100 h-full text-base">{description}</p>
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
        <button
          className="bg-red-700 w-full p-2 mb-4 rounded-xl transition-all hover:underline hover:bg-red-600 underline-offset-4 mt-auto"
          onClick={() =>
            handleButtonClick(
              urlSito
            )
          }
        >
          {btnTesto2}
        </button>
      </div>
    </div>
  );
}


/* 
//Progetto di card non convertito in componente!

            <div className="h-[620px] sm:w-[350px] flex flex-col items-center rounded-lg m-2 bg-blue-900 overflow-hidden hover:bg-blue-800 hover:scale-105 transition ">
              <div className="">
                <img
                  src={logo}
                  alt="logo_card_landing"
                  className="rounded-lg shadow-xl my-2 w-full"
                />
              </div>
              <div className="p-5">
                <h1 className="mt-5 text-xl text-blue-300">
                  Un esempio di landing page personalizzata
                </h1>
                <p className="mt-5 text-slate-200 mb-6">
                  Questo è un esempio di landing page di una agenzia di viaggi,
                  completa anche di form per le richieste, completamente
                  responsive. <br />
                  Clicca il bottone per vedere il codice su GitHub.
                </p>
                <button
                  className="bg-blue-700 w-full p-2 mb-4 rounded-xl transition-all hover:underline hover:bg-blue-600 underline-offset-4 mt-auto"
                  onClick={() =>
                    handleButtonClick(
                      "https://github.com/Erry002/simulazione-landing/tree/main/code"
                    )
                  }
                >
                  Apri su GitHub
                </button>
                <Link
                  target="_blank" rel="noopener noreferrer"
                  to="https://erryairlines.netlify.app/"
                >
                  <button
                  className="bg-blue-700 w-full p-2 mb-4 rounded-xl transition-all hover:underline hover:bg-blue-600 underline-offset-4 mt-auto"
                  >
                    Provalo Subito!
                  </button>
                </Link>
              </div>
            </div> 
*/
