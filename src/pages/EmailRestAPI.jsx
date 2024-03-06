import React, { useState } from "react";
import axios from "axios";

function EmailRestAPI() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    //I dati di emailjs come sevice id, template id e la public key
    const serviceId = "service_hozzjlm";
    const templateId = "template_u42rl68";
    const publicKey = "vjw7dcQJizcn3ce0Z";

    //Creiamo un oggetto con emailjs servisid, templateid, public key e i parametri del templait
    const data = {
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      template_params: {
        from_name: name,
        from_email: email,
        to_name: "Enrico",
        message: message,
      },
    };

    //invio email con emailjs e utilizzo axios per controllare l'asincronicità della funzione
    try {
      const res = await axios.post(
        "https://api.emailjs.com/api/v1.0/email/send",
        data
      );
      console.log(res.data);
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex w-full">
      <div className="w-full flex bg-blue-950">
        <div className="text-slate-100 flex justify-center w-full min-h-screen">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center justify-center my-40 gap-10 md:w-[500px]"
          >
            <h1 className="text-slate-200  font-bold text-lg">
              Cercami se ti serve qualcosa!!
            </h1>
            <input
              type="text"
              placeholder="Inserisci il tuo nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="rounded-lg bg-blue-950 border-4 border-blue-900 p-4 w-full text-slate-100"
            />
            <input
              type="email"
              placeholder="Inserisci la tua email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="rounded-lg bg-blue-950 border-4 border-blue-900 p-4 w-full text-slate-100"
            />
            <textarea
              cols="30"
              rows="10"
              value={message}
              placeholder="Scrivi un messaggio"
              onChange={(e) => setMessage(e.target.value)}
              className="rounded-lg bg-blue-950 border-4 border-blue-900 p-4 w-full text-slate-100"
            ></textarea>
            <button
              type="submit"
              className="rounded-lg bg-blue-300 border-4 border-blue-900 p-4 w-full"
            >
              Invia il messaggio
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EmailRestAPI;
