import { useState } from "react";
import "./App.css";
import ReactHowler from "react-howler";
function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div className="bg-yellow-100">
      <div className="h-screen flex justify-center gap-20">
        <div className="flex flex-col justify-center">
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

        <div>
          <h1>React Howler Audio Player</h1>
          <ReactHowler src="/src/assets/song.mp3" playing={isPlaying} />
          <button onClick={() => setIsPlaying(!isPlaying)}>
            {isPlaying ? "Pause" : "Play"}
          </button>
        </div>
        <audio controls autoPlay>
          <source src="/song.mp3" type="audio/mp3" />
          Browser Anda tidak mendukung audio HTML5.
        </audio>
        <audio controls autoPlay>
          <source src="/assets/song.mp3" type="audio/mp3" />
          Browser Anda tidak mendukung audio HTML5.
        </audio>
      </div>
    </div>
  );
}

export default App;
