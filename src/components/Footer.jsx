import { FaInstagram } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

export default function Project() {
    return (
      <footer className="bg-blue-950 text-slate-100 flex justify-center items-center z-10 mt-[-90px] gap-10 p-5 flex-col md:flex-row">
        <h1 className="text-lg font-bold">Ciao Benvenuto nel mio portfoglio personale!</h1>
        <h1 className="">Scritto e ideato da @errygz</h1>
        <div className="footer-links flex md:justify-center md:items-center gap-5">
          <a className="underline underline-offset-4 hover:text-blue-300" href="https://www.instagram.com/errygz/"> <FaInstagram className=" size-7"/></a>
          <a className="underline underline-offset-4 hover:text-blue-300" href="https://github.com/Erry002"><FaGithubSquare className=" size-7 rounded-xl"/></a>
          <a className="underline underline-offset-4 hover:text-blue-300" href="https://www.linkedin.com/in/enrico-garozzo-756a31229/"><CiLinkedin className=" size-8 mt-[-3px]"/></a>
        </div>
        <h1 className="text-sm">@copyright 2024 by Enrico Garozzo</h1>
      </footer>
    );
  }
  