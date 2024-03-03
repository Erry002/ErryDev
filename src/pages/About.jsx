export default function About() {
  return (
    <div className="flex flex-col min-h-screen bg-blue-950 text-white">
      <div className="flex justify-center pt-16">
        <div className="max-w-7xl w-full px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            <div className="border-2 border-emerald-600 h-[400px] md:h-auto w-full md:w-[300px] lg:w-[400px]">
              {/* Contenuto per la foto */}
            </div>

            <div>
              <h1 className="text-2xl font-bold mb-4">Qu<span className=" text-blue-300">a</span>lcosa su di Me...</h1>
              <p className=" ml-4">
                Con diversi anni di esperienza nel campo culinario, fermamente
                deciso a cambiare lavoro e fortemente motivato, studio
                informatica all'università di Catania, seguo diversi corsi di
                formazione sulla programmazione fruttando diverse piattaforme
                online come: Udemy, FreeCodeCamp.org, Opinno e YouTube.
              </p>
              <div className="h-1 w-full bg-blue-300 my-6"></div>
              <div>
                <h2 className="text-2xl font-bold mb-4">Ed<span className=" text-blue-300">u</span>cazione</h2>
                <ul className="">
                  <li className="ml-4 list-disc">
                    Laurea triennale in Informatica all'università di Catania: <br />
                    <span className="font-light text-blue-300">In corso</span>
                  </li>
                  <li className=" list-disc ml-4">
                    Corso WebDev con Opinno codice corso: <br />
                    <span className="font-extralight">002PROTD2370317</span>
                  </li>
                  <li className=" list-disc ml-4">
                    Corso WebDev con FreeCodeCamp.org codice attestato: <br />
                    <a
                      className="text-blue-300 hover:text-blue-500"
                      href="https://www.freecodecamp.org/certification/ErryGz/responsive-web-design"
                    >
                      FreeCodeCamp.org
                    </a>
                  </li>
                </ul>
              </div>
              <div className="h-1 w-full bg-blue-300 my-6"></div>
              <div>
                <h2 className="text-2xl font-bold mb-4">Es<span className=" text-blue-300">p</span>erienze lavorative</h2>
                <ul>
                  <li className="mb-2 ml-4 list-disc text-xl">
                    Family Hotel Schloss - Capo Partita Antipasti
                  </li>
                  <span className=" ml-4 text-lg">Luogo: Fieberbrunn, Austria | 11/2022 - 04/2023</span>
                  <p className=" ml-4 my-2 text-[17px]">
                    Ricoprendo il ruolo di capo partita degli antipasti, sono
                    specializzato nella gestione operativa e nel garantire
                    elevati standard culinari, mi occupavo della preparazione e
                    presentazione di piatti di alta qualità, collaborando con
                    uno staff multiculturale e gestendo con efficacia diverse
                    situazioni ad alta pressione.
                  </p>
                  <li className=" mb-2 ml-4 list-disc text-xl">Sikani Resort & SPA - Demi chef Antipasti</li>
                    <span className="ml-4 text-lg">Luogo: Butera, Agrigento | 06/2022 - 10/2022</span>
                  <p className=" ml-4 my-2 text-[17px]">
                    Collaborando con la brigata di cucina, ho coordinato la
                    creazione di diverse ricette per antipasti. La gestione di
                    situazioni ad alta pressione è diventata una parte della mia
                    routine quotidiana, mentre l'interazione con i clienti ha
                    contribuito a sviluppare una comprensione approfondita delle
                    loro preferenze culinarie. Questa esperienza mi ha permesso
                    di crescere professionalmente, offrendomi l'opportunità di
                    eccellere in un ambiente dinamico e stimolante.
                  </p>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
