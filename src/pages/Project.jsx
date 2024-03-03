import React from "react";
import logo from "../assets/landing.png";
import fatcs from "../assets/cat_facts.png";
import games from "../assets/Sito_giochi.png";

export default function Project() {
  const handleButtonClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="flex w-full min-h-screen bg-blue-950 items-center">
      <div className="w-full flex items-center justify-center">
        <div className="text-slate-100 flex flex-col justify-center px-5 items-center w-full max-w-7xl mb-16">
          <h1 className="mb-8 mt-20 text-2xl text-slate-200">
            Qualche mio progetto che potete trovare su GitHub!
          </h1>
          <div className="flex flex-col sm:flex-row items-center justify-between w-full px-5">
            {/* prima card */}

            <div className="h-[600px] sm:w-[350px] flex flex-col items-center rounded-lg m-2 bg-blue-900 overflow-hidden hover:bg-blue-800 hover:scale-105 transition ">
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
                  className="bg-blue-700 w-full p-2 rounded-xl transition-all hover:underline hover:bg-blue-600 underline-offset-4 mt-auto"
                  onClick={() =>
                    handleButtonClick(
                      "https://github.com/Erry002/simulazione-landing/tree/main/code"
                    )
                  }
                >
                  Apri su GitHub
                </button>
              </div>
            </div>

            {/* seconda card */}
            <div className="h-[600px] sm:w-[350px] flex flex-col items-center rounded-lg m-2 bg-blue-900 overflow-hidden hover:bg-blue-800 hover:scale-105 transition ">
              <div className=" ">
                <img
                  src={fatcs}
                  alt="logo_card_cat_facts"
                  className="rounded-lg shadow-xl my-2 w-full"
                />
              </div>
              <div className="w-full px-5 flex flex-col justify-between">
                <div>
                  <h1 className="mt-5 text-xl text-blue-300">
                    Piccolo progetto personale con API
                  </h1>
                  <p className="mt-5 text-slate-200 mb-6">
                    Questo è un esempio è composto da altri piccoli progetti
                    personali che ho fatto, in questo mostro come utilizzare le
                    API
                    <br />
                    Clicca il bottone per vedere il codice su GitHub.
                  </p>
                </div>
                <div className="flex justify-between mt-auto">
                  <button
                    className="bg-blue-700 w-full p-2 rounded-xl sm:mt-7 transition-all hover:underline hover:bg-blue-600 underline-offset-4 "
                    onClick={() =>
                      handleButtonClick(
                        "https://github.com/Erry002/Cartella-documentazione-corsi-WebDev/blob/main/Corso%20Opinno%20WebDev/Programma%20corso%20Opinno/Giorno_21_introduzione_react/Progetti_con_React_%2B_Vite/progetto_con_vit/doc_amo/src/EsFect.jsx"
                      )
                    }
                  >
                    Apri su GitHub
                  </button>
                </div>
              </div>
            </div>
            {/* terza card */}
            <div className="h-[600px] sm:w-[350px] flex flex-col items-center rounded-lg m-2 bg-blue-900 overflow-hidden hover:bg-blue-800 hover:scale-105 transition ">
              <div>
                <img
                  src={games}
                  alt="logo_card_games"
                  className="rounded-lg shadow-xl my-2 w-full"
                />
              </div>
              <div className="w-full px-5 flex flex-col justify-between">
                <div>
                  <h1 className="mt-5 text-xl text-blue-300">
                    Progetto di gruppo di un sito di giochi
                  </h1>
                  <p className="mt-5 text-slate-200 mb-9">
                    Questo progetto rappresenta un'opera collaborativa, nel
                    quale ho contribuito non solo alla realizzazione della
                    pagina iniziale, ma anche alla creazione del gioco
                    denominato 'Reaction Time'.
                    <br />
                    Clicca il bottone per vedere il codice su GitHub.
                  </p>
                </div>
                <div className="flex mt-auto">
                  <button
                    className="bg-blue-700 w-full p-2 rounded-xl transition-all hover:underline hover:bg-blue-600 underline-offset-4 mt-[-13px]"
                    onClick={() =>
                      handleButtonClick(
                        "https://github.com/Erry002/Cartella-documentazione-corsi-WebDev/tree/main/Corso%20Opinno%20WebDev/Programma%20corso%20Opinno/Lavoro_gruppo_dicembre_Sito_giochi"
                      )
                    }
                  >
                    Apri su GitHub
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
