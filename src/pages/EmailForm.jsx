//EmailForm funzionante!!!


import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const EmailForm = () => {

  const [name, setName] =useState('');
  const [email, setEmail] =useState('');
  const [message, setMessage] =useState('');

  const handleSubmit = (e) =>{
    e.preventDefault();

    //I dati di emailjs come sevice id, template id e la public key
    const serviceId = 'service_hozzjlm';
    const templateId = 'template_u42rl68';
    const publicKey = 'vjw7dcQJizcn3ce0Z';


    //oggetto dinamico per creare il templai con i parametri presi
    const tamplateParams = {
      from_name: name,
      from_email: email,
      to_name: 'Mr.Meluccio',
      message: message,
    };
    
    //la parte che mi serve per mandare l'email con emailjs
    emailjs.send(serviceId, templateId, tamplateParams, publicKey)
      .then((response) => {
        console.log('Email inviata con successo!', response);
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch((error) => {
        console.log('Errore imprevisto!', error);
      });
  }


  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <textarea
        cols="30"
        rows="10"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>
      <button type="submit"> Sand email</button>
    </form>
  );
};

export default EmailForm;
