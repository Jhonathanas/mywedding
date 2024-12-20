import { useState } from "react";
import "./App.css";
import ReactHowler from "react-howler";
// import Timer from "./componets/Timer";
function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div className="bg-yellow-100">
      <div className="h-screen flex justify-center gap-20">
        <div className="z-10 flex flex-col justify-center">
          <p className="text-5xl font-dancing">Jonathan Adi Saputro</p>
          <span className="text-9xl">&</span>
          <p className="text-5xl font-dancing">
            Feronika Krismawati Devi Deria
          </p>
          <p className="font-poppins">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed sequi
            impedit nobis ab a aliquam nihil cumque ratione culpa itaque?
          </p>
          <h1 className="font-spicy">This is Spicey Rice font</h1>
        </div>
        <img src="/duo.JPG" alt="" />
      </div>
      <div className="absolute z-20 h-10 w-10 rounded-full bottom-32 right-36 bg-red-500">
        <ReactHowler src="/song.mp3" playing={isPlaying} />
        <button onClick={() => setIsPlaying(!isPlaying)}>
          {isPlaying ? "Pause" : "Play"}
        </button>
      </div>
      <img className="absolute bottom-0  h-96" height={100}
      src="/flower.png" alt="" />
      <img className="absolute bottom-0 right-0  h-96" height={100}
      src="/rightFlower.png" alt="" />
      {/* <Timer/> */}
    </div>
  );
}

export default App;
