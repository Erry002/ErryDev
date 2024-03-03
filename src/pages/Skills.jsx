export default function Skills() {
  return (
    <div className="flex flex-col min-h-screen bg-blue-950 text-white">
      <div className="flex justify-center pt-16">
        <div className="max-w-7xl w-full px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            <div className="border-2 border-emerald-600 h-[400px] md:h-auto w-full md:w-[300px] lg:w-[400px]">
              {/* Contenuto per la foto */}
            </div>

            <div className="text-slate-100 px-5 flex flex-col justify-center w-full max-w-7xl">
              <h1 className="font-bold text-4xl mb-8">
                Le <span className="text-blue-300">m</span>ie skill
              </h1>
              <div className="my-4 h-1 w-[400px] md:w-full bg-blue-300"></div>
              <div>
                <h1 className="mb-3 text-xl underline underline-offset-4">
                  Nell'arco della mia esperienza lavorativa in cucina ho
                  sviluppato diverse skill personali, quelle principali sono:
                </h1>
                <ul className="ms-5 py-3">
                  <li className="list-disc mb-2 font-bold text-lg text-blue-300">
                    Lavoro di squadra:
                  </li>
                  <p className="ms-3 mb-2">
                    Cosa sottovalutata in cucina ma molto importante, che ho
                    appreso con i diversi anni di lavoro in cucina.
                  </p>
                  <li className="list-disc mb-2 font-bold text-lg text-blue-300">
                    Organizzazione personale e del lavoro
                  </li>
                  <p className="ms-3 mb-2">
                    In cucina si dice che "Il tempo è tiranno", quì ho imparato
                    il significato di organizzare il lavoro in tutte le sue
                    sfaccettature, da prima di entrare in cucina, a quando si
                    esce per pensare già al domani.
                  </p>
                  <li className="list-disc mb-2 font-bold text-lg text-blue-300">
                    La collaborazione con i colleghi
                  </li>
                  <p className="ms-3 mb-2">
                    Sempre in cucina, si è in tanti e andare d'accordo con tutti
                    non è semplice ma è molto importante. In cucina ho imparato
                    a separare quello che sono i colleghi a lavoro dagli amici
                    fuori dal posto di lavoro.
                  </p>
                  <li className="list-disc mb-2 font-bold text-lg text-blue-300">
                    Controllo dello stress
                  </li>
                  <p className="ms-3 mb-2">
                    La ristorazione, in generale, è stressante. Si lavora tanto
                    e si riposa poco, i clienti sono quello che sono (e si sa,
                    non si può nascondere). Come detto prima, in cucina, il
                    tempo non basta mai per fare tutte le cose, questo porta ad
                    essere in uno stato continuo di ansia e stress, che col
                    tempo sono riuscito a gestire queste situazioni e a farne
                    una skill.
                  </p>
                  <li className="list-disc mb-2 font-bold text-lg text-blue-300">
                    Ci sarebbero molte altre skills, ma vi lascio un po' di
                    mistero per darvi la possibilità di mettermi alla prova e
                    vedere quello che so fare in campo personale!
                  </li>
                </ul>
              </div>
              <div className="my-4 h-1 w-[400px] md:w-full bg-blue-300"></div>
              <div>
                <h1 className="mb-3 text-xl underline underline-offset-4">
                  Invece per quanto riguarda le skill lavorative nel campo della
                  programmazione sono state apprese e maturate con l'università
                  e con i vari corsi che ho seguito con l'aggiunta di qualche
                  progetto personale, come questo portafoglio...
                </h1>
                <ul className="ms-5 py-3">
                  <li className="list-disc mb-2 font-bold text-lg text-blue-300">
                    Programmazione Web come Front End
                  </li>
                  <p className="ms-3 mb-2">
                    Dopo aver appreso le basi di come funziona un sito, ho
                    iniziato a studiare e seguire corsi sulle basi della
                    programmazione web, studiando le ultime tecnologie del
                    momento come HTML, CSS e JavaScript.
                  </p>
                  <li className="list-disc mb-2 font-bold text-lg text-blue-300">
                    Utilizzo di Framework e librerie specifiche
                  </li>
                  <p className="ms-3 mb-2">
                    Dopo aver appreso le basi e averle padroneggiate, ho
                    iniziato a studiare degli strumenti per facilitarmi il
                    lavoro. Con un corso di Oppinno ho imparato a usare React,
                    Tailwind e Node.js.
                  </p>
                  <li className="list-disc mb-2 font-bold text-lg text-blue-300">
                    Istruzione Universitaria
                  </li>
                  <p className="ms-3 mb-2">
                    Con l'università sto approfondendo il mondo della
                    programmazione con tutto ciò che la comprende. Conosco anche
                    altri linguaggi come C++, assembly e Processing.
                  </p>
                  <li className="list-disc mb-2 font-bold text-lg text-blue-300">
                    Continuo studio e approfondimento...
                  </li>
                  <p className="ms-3 mb-2">
                    Come è giusto che sia, "Chi si ferma è perduto". Per questo
                    sono in continua formazione e studio delle ultime tecnologie
                    richieste dal mercato. In questo momento sto studiando un
                    framework chiamato Angular, molto usato nel mondo dello
                    sviluppo web, e sto approfondendo Node.js.
                  </p>
                </ul>
              </div>
              <div className="my-4 h-1 w-[400px] md:w-full bg-blue-300"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
