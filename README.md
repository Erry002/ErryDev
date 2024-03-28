# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


Ho creato questo progetto vergine di react creato con vite, per risparmiare tempo nella creazione di nuovi progetti
futuri, facendo gia pulizia dei file pre-creati da vite, integrando tutti i componenti necessari come tailwind, con tutte le modifiche del caso ai file, aggiunta di rect ruter dom e axios, 

Nel dubbio qui c'è il link con la guida completa:
https://vitejs.dev/guide/


Passagi da segure per creare un progetto da zero con vite

PRIMO:

- npm create vite@latest

SECONDO:

- cd vite-project
- npm install
- npm run dev //questo comando serve per far partire la preview del nostro progetto
dopo aver rannato questo comando fare pulizia dei file presenti

TERZO:

- npm install -D tailwindcss postcss autoprefixer
- npx tailwindcss init -p

QUARTO:

dopo aver rannato questo comando creare un file Global.css con questo dentro
@tailwind base;
@tailwind components;
@tailwind utilities;

IMPORTANTE PERCHE POI NON FUNZIONA NIENTE 

e ricordiamoci di importarlo nel main.jsx
import './global.css';

QUINTO:

dopo aggiungiamo nel file di configurazione di tailwind quetse cose nella sezione 'content'
"./index.html",
"./src/**/*.{js,ts,jsx,tsx}",

SESTO:

- npm install react-router-dom
questo e da aggiungere nel componente madre
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


nb. si può usare la scorciatoia 'rfce' per creare una struttura pre compilata di un componente su react.
