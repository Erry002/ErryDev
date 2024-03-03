export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-950 text-white">
      <div className="max-w-7xl w-full px-4">
        <div className="flex justify-between items-center h-screen">
          <div className="text-2xl font-black">
            <h1 className="font-thin text-base">
              Welcome to my personal Page
            </h1>
            <h2 className="text-4xl">Hi, I'm Enrico Garozzo</h2>
            <h2 className="text-blue-300 text-4xl">Web Developer.</h2>
            <h2 className="text-4xl">Based in Italy.</h2>
          </div>
          <div className="flex justify-center items-center w-64 h-64 bg-red-600">
            <h1>This is a photo</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
