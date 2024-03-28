export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-950 text-white">
      <div className=" flex items-center justify-center max-w-7xl w-full px-4">
        <div className="flex sm:flex-row flex-col sm:justify-between items-center justify-center mb-28 w-full">
          <div className="text-2xl mb-20 mt-24 font-black">
            <h1 className="font-thin text-base">
              Benvenuto nella mia pagina Web
            </h1>
            <h2 className="text-4xl">Ciao, Io sono Enrico Garozzo</h2>
            <h2 className="text-blue-300 text-4xl">Sviluppatore Web.</h2>
            <h2 className="text-4xl">Con base in Italia.</h2>
          </div>
          <div className="flex justify-center shadow-2xl items-center w-64 h-64 bg-red-600">
            <h1>This is a photo</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
