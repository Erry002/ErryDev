import { Link } from "react-router-dom";
import React, { useState } from 'react';

export default function Navbar() {

  const [activeLink, setActiveLink] = useState('home');

  return (
    <div className=" flex w-full items-center">
      <nav className=" flex bg-blue-950 top-0 h-[60px] mb-[-60px] z-10 justify-center w-full ">
        <div className=" flex items-center w-full max-w-7xl text-xl justify-between px-5">
          <div className="font-sans font-bold text-2xl rounded-xl p-2 ">
            <Link
              to="/"
              onClick={() => setActiveLink('/')}
              className=" text-slate-50 rounded-lg p-1 "
            >
              Er<span className=" text-blue-300">r</span>y.Dev
            </Link>
          </div>
          <div className="space-x-5">
            <Link
              to="/"
              onClick={() => setActiveLink('/')}
              className={`${
                activeLink === '/' ? ' underline underline-offset-4 decoration-blue-300 text-blue-300' : 'text-slate-50 transition-all shadow-sm'
              }  hover:underline underline-offset-4 hover:text-blue-300`}
              /* " text-slate-50 underline-offset-4 shadow-sm hover:underline decoration-blue-300 hover:text-blue-300 transition-all" */
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={() => setActiveLink('/about')}
              className={`${
                activeLink === '/about' ? ' underline underline-offset-4 decoration-blue-300 text-blue-300' : 'text-slate-50 transition-all shadow-sm'
              }  hover:underline underline-offset-4 hover:text-blue-300`}
              /* className=" text-slate-50 underline-offset-4 shadow-sm hover:underline decoration-blue-300 hover:text-blue-300 transition-all" */
            >
              About
            </Link>
            <Link
              to="/skills"
              onClick={() => setActiveLink('/skills')}
              className={`${
                activeLink === '/skills' ? ' underline underline-offset-4 decoration-blue-300 text-blue-300' : 'text-slate-50 transition-all shadow-sm'
              }  hover:underline underline-offset-4 hover:text-blue-300`}
            >
              Skills
            </Link>
            <Link
              to="/project"
              onClick={() => setActiveLink('/project')}
              className={`${
                activeLink === '/project' ? ' underline underline-offset-4 decoration-blue-300 text-blue-300' : 'text-slate-50 transition-all shadow-sm'
              }  hover:underline underline-offset-4 hover:text-blue-300`}
            >
              Project
            </Link>
            <Link
              to="/form"
              onClick={() => setActiveLink('/form')}
              className={`${
                activeLink === '/form' ? ' underline underline-offset-4 decoration-blue-300 text-blue-300' : 'text-slate-50 transition-all shadow-sm'
              }  hover:underline underline-offset-4 hover:text-blue-300`}
            >
              Form
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
