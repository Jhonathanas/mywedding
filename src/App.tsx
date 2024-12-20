import { useState } from "react";
import "./App.css";
import ReactHowler from "react-howler";
// import Timer from "./componets/Timer";
function App() {
  const [isPlaying, setIsPlaying] = useState(true);
  return (
    <div className="bg-yellow-100">
      <div className="h-screen lg:flex justify-center gap-20">
        <div className="lg:relative text-right absolute z-10 flex flex-col justify-center">
          <p className="text-xl lg:text-5xl font-dancing">
            Jonathan Adi Saputro <span className="text-xl">&</span>
          </p>
          <p className="text-xl lg:text-5xl font-dancing">
            Feronika Krismawati Devi Deria
          </p>
          <p className="font-poppins">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed sequi
            impedit nobis ab a aliquam nihil cumque ratione culpa itaque?
          </p>
          <h1 className="font-spicy">This is Spicey Rice font</h1>
        </div>
        <div className="h-screen flex">
          <img className="m-auto rounded-full bg-red-400" src="/duo.JPG" alt="" />
        </div>
      </div>
      <div className="absolute z-20 h-10 w-10 rounded-full bottom-5 lg:bottom-32 right-5 lg:right-36 bg-red-500">
        <ReactHowler src="/song.mp3" playing={isPlaying} />
        <button onClick={() => setIsPlaying(!isPlaying)}>
          {isPlaying ? "Pause" : "Play"}
        </button>
      </div>
      <img
        className="absolute bottom-0 lg:h-72 h-36"
        height={70}
        src="/flower.png"
        alt=""
      />
      <img
        className="absolute top-0 lg:h-72 h-36 rotate-90"
        height={70}
        src="/flower.png"
        alt=""
      />

      {/* <Timer/> */}
    </div>
  );
}

export default App;
