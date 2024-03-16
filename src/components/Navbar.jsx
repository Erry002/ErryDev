import { Link } from "react-router-dom";
import React, { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { IoHome } from "react-icons/io5";
import { BsPersonArmsUp } from "react-icons/bs";
import { GrVulnerability } from "react-icons/gr";
import { IoBuildSharp } from "react-icons/io5";
import { FaWpforms } from "react-icons/fa6";

export default function Navbar() {

  const [activeLink, setActiveLink] = useState('home');
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  }

  return (
    <div className="flex w-full items-center">
      <nav className="flex bg-blue-950 shadow-2xl top-0 h-[60px] mb-[-60px] z-10 justify-center w-full">
        <div className="flex items-center w-full max-w-7xl justify-between px-5">
          <div className="font-sans font-bold text-3xl rounded-xl p-2">
            <Link
              to="/"
              onClick={() => setActiveLink('/')}
              className="text-slate-50 rounded-lg p-1"
            >
              Er<span className="text-blue-300">r</span>y.Dev
            </Link>
          </div>
          <div className="block sm:hidden">
            <FiMenu onClick={toggleMenu} className="text-white text-3xl cursor-pointer mr-2" />
          </div>
          <div className={`sm:flex sm:space-x-5 pl-5 ${showMenu ? 'mx-5 flex flex-col space-y-4 absolute top-[60px] right-3 pr-4 bg-blue-900 shadow-2xl rounded-lg w-[500px] py-4 items-start' : 'hidden'}`}>
            <Link
              to="/"
              onClick={() => { setActiveLink('/'); setShowMenu(false); }}
              className={`${activeLink === '/' ? 'text-blue-300 underline' : 'text-slate-50'} hover:text-blue-300 hover:underline underline-offset-4 transition-all flex items-center gap-2`}
            > 
             <IoHome /> Home
            </Link>
            <Link
              to="/about"
              onClick={() => { setActiveLink('/about'); setShowMenu(false); }}
              className={`${activeLink === '/about' ? 'text-blue-300 underline' : 'text-slate-50'} hover:text-blue-300 hover:underline underline-offset-4 transition-all flex items-center gap-2`}
            >
              <BsPersonArmsUp /> Chi sono
            </Link>
            <Link
              to="/skills"
              onClick={() => { setActiveLink('/skills'); setShowMenu(false); }}
              className={`${activeLink === '/skills' ? 'text-blue-300 underline' : 'text-slate-50'} hover:text-blue-300 hover:underline underline-offset-4 transition-all flex items-center gap-2`}
            >
              <GrVulnerability /> Abilità
            </Link>
            <Link
              to="/project"
              onClick={() => { setActiveLink('/project'); setShowMenu(false); }}
              className={`${activeLink === '/project' ? 'text-blue-300 underline' : 'text-slate-50'} hover:text-blue-300 hover:underline underline-offset-4 transition-all flex items-center gap-2`}
            >
              <IoBuildSharp /> Progetti
            </Link>
            <Link
              to="/form"
              onClick={() => { setActiveLink('/form'); setShowMenu(false); }}
              className={`${activeLink === '/form' ? 'text-blue-300 underline' : 'text-slate-50'} hover:text-blue-300 hover:underline underline-offset-4 transition-all flex items-center gap-2`}
            >
              <FaWpforms /> Form
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
