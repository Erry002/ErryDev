export default function Project () {
    return (
        <footer className="bg-blue-950 text-slate-100 flex justify-center items-center z-10 mt-[-70px] gap-10 p-5">
            <h1 className="text-lg font-bold">Ciao Benvenuto nel mio portfoglio personale!</h1>
            <h1 className="">Scritto e ideato da @errygz</h1>
            <div className="footer-links md:flex md:flex-wrap md:justify-center md:items-center gap-5">
                <a className="underline underline-offset-4 hover:text-blue-300" href="https://www.instagram.com/errygz/">Il mio Instagram</a>
                <a className="underline underline-offset-4 hover:text-blue-300" href="https://github.com/Erry002">Il mio GitHub</a>
                <a className="underline underline-offset-4 hover:text-blue-300" href="https://www.linkedin.com/in/enrico-garozzo-756a31229/">Il mio Linkedin</a>
            </div>
            <h1 className="text-sm">@copyright 2024 by Enrico Garozzo</h1>
        </footer>
    );
}
