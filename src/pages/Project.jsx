import React from "react";
//import { Link } from "react-router-dom";
import Card from "../components/Card.jsx";

import logo from "../assets/landing.png";
import fatcs from "../assets/cat_facts.png";
import games from "../assets/Sito_giochi.png";

export default function Project() {
  const handleButtonClick = (url) => {
    // window.open(url, "_blank"); //questa é una funzione che permette di aprire i link in un altra pagina
    window.location.href = url; //questa é una proprietá che permette di cambiare url della pagina
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
            <Card
              title="Landing page"
              description="Questo è un esempio di landing page di una agenzia di viaggi, completa anche di form per le richieste, completamente
        responsive. Clicca il bottone per vedere il codice su GitHub."
              imageUrl={logo}
              urlGit="https://github.com/Erry002/simulazione-landing/tree/main/code"
              urlSito="https://erryairlines.netlify.app/"
              btnTesto1="Apri su GitHub"
              btnTesto2="Provalo subito"
            />

            {/* seconda card */}
            <Card
              title="Piccolo progetto personale con API"
              description="Questo è un esempio è composto da altri piccoli progetti
              personali che ho fatto durante un corso di programmazione, in questo mostro come utilizzare le API"
              imageUrl={fatcs}
              urlGit="https://github.com/Erry002/Cartella-documentazione-corsi-WebDev/blob/main/Corso%20Opinno%20WebDev/Programma%20corso%20Opinno/Giorno_21_introduzione_react/Progetti_con_React_%2B_Vite/progetto_con_vit/doc_amo/src/EsFect.jsx"
              urlSito="/catFact"
              btnTesto1="Apri su GitHub"
              btnTesto2="Provalo subito"
            />

            {/* terza card */}
            <Card
              title="Progetto di gruppo di un sito di giochi"
              description="Questo progetto rappresenta un'opera collaborativa, nel
              quale ho contribuito non solo alla realizzazione della
              pagina iniziale, ma anche alla creazione del gioco
              denominato 'Reaction Time'."
              imageUrl={games}
              urlGit="https://github.com/Erry002/Cartella-documentazione-corsi-WebDev/tree/main/Corso%20Opinno%20WebDev/Programma%20corso%20Opinno/Lavoro_gruppo_dicembre_Sito_giochi"
              urlSito="https://siteplaygame.netlify.app/"
              btnTesto1="Apri su GitHub"
              btnTesto2="Provalo subito"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
