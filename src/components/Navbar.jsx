import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className=" flex w-full items-center">
      <nav className=" flex bg-blue-950 top-0 h-[60px] mb-[-60px] z-10 justify-center w-full ">
        <div className=" flex items-center w-full max-w-7xl text-xl justify-between px-5">
          <div className="font-sans font-bold text-2xl rounded-xl p-2 ">
            <Link
              to="/"
              className=" text-slate-50 rounded-lg p-1 "
            >
              Er<span className=" text-blue-300">r</span>y.Dev
            </Link>
          </div>
          <div className="space-x-5">
            <Link
              to="/"
              className="  text-slate-50 underline-offset-4 shadow-sm hover:underline decoration-blue-300 hover:text-blue-300 transition-all"
            >
              Home
            </Link>
            <Link
              to="/about"
              className=" text-slate-50 underline-offset-4 shadow-sm hover:underline decoration-blue-300 hover:text-blue-300 transition-all"
            >
              About
            </Link>
            <Link
              to="/skills"
              className=" text-slate-50 underline-offset-4 shadow-sm hover:underline decoration-blue-300 hover:text-blue-300 transition-all"
            >
              Skills
            </Link>
            <Link
              to="/project"
              className=" text-slate-50 underline-offset-4 shadow-sm hover:underline decoration-blue-300 hover:text-blue-300 transition-all"
            >
              Project
            </Link>
            <Link
              to="/form"
              className=" text-slate-50 underline-offset-4 shadow-sm hover:underline decoration-blue-300 hover:text-blue-300 transition-all"
            >
              Form
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
