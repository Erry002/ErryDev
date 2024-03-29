import Axios from "axios";
import { useState } from "react";

export default function EsFect() {
  const endpoint = "https://catfact.ninja/fact";
  const [catFact, setCatFact] = useState("");

  //   fetch(endpoint).then((res) =>
  //     res.json().then((data) => {
  //       console.log(data);
  //     })
  //   );

  function getFact() {
    Axios.get(endpoint).then((res) => {
      console.log(res.data);
      setCatFact(res.data.fact);
    });
  }
  return (
    <div className=" flex items-center justify-center h-screen bg-blue-950">
      <div className=" flex flex-col shadow-2xl w-[300px] md:w-[600px] h-[400px] rounded-lg p-3 bg-blue-400 items-center justify-center gap-3">
        <button
          onClick={getFact}
          className="  shadow-2xl border-2 border-slate-200 rounded-2xl text-white bg-blue-700 p-4 mb-5 font-bold"
        >
          Clicca per stampa un fatto sui gatti!
        </button>
        {/* contenite sui fatti dei gatti */}
        <div className=" bg-blue-500 shadow-2xl rounded-2xl p-4 mb-4">
          <p className="text-center text-lg text-slate-200 drop-shadow-2xl rounded-lg p-2 ">
            {catFact}
          </p>
        </div>
      </div>
    </div>
  );
}

// import Axios from "axios";
// import { useEffect, useState } from "react";

// export default function CatsApi() {
//   const endpoint = "https://catfact.ninja/fact";
//   const [catFact, setCatFact] = useState("");
//   fetch(endpoint)
//     .then((res) => res.json())
//     .then((data) => {
//         console.log(data);
//     });

// MAI NELLA VITA
//   Axios.get(endpoint).then((res) => {
//     console.log(res.data);
//     setCatFact(res.data.fact);
//   });

// Anche questo MAI NELLA VITA
//   getFact();

//   function getFact() {
//     Axios.get(endpoint).then((res) => {
//       console.log(res.data);
//       setCatFact(res.data.fact);
//     });
//   }

//   useEffect(() => getFact(), []);

//   return (
//     <div className="gap-4 flex justify-center items-center flex-col bg-slate-500 p-8">
//       {/* Fatto sui gatti */}
//       <button
//         onClick={getFact}
//         className="shadow-xl border-2 text-slate-50 rounded-2xl p-4 font-bold bg-slate-900"
//       >
//         Stampa un fatto sui gatti
//       </button>
//       <div className="border-2 rounded-xl p-4">
//         <p className="text-center text-sm text-slate-200">{catFact}</p>
//       </div>
//     </div>
//   );
// }
