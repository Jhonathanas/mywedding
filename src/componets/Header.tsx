import ReactHowler from "react-howler";
import { useState } from "react";

export const Header = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  return (
    <div>
      <div className="h-screen lg:flex justify-center gap-20">
        {/* <div className="lg:relative text-right absolute z-10 flex flex-col justify-center">
          <h1 className="font-spicy">Kejadian 1:28</h1>
          <p className="font-poppins lg:text-lg text-xs">
            Allah memberkati mereka, lalu Allah berfirman kepada mereka:
            "Beranakcuculah dan bertambah banyak; penuhilah bumi dan
            taklukkanlah itu, berkuasalah atas ikan-ikan di laut dan
            burung-burung di udara dan atas segala binatang yang merayap di
            bumi."
          </p>
        </div> */}
        <div className="left-3 absolute z-10 top-44 w-1/2">
          <p className="text-5xl lg:text-5xl font-dancing">Jonathan</p>
          <span className="text-xl ">&</span>
          <p className="text-5xl lg:text-5xl font-dancing">Feronika</p>
        </div>
        <div className="h-screen flex">
          <img
            className="m-auto rounded-3xl bg-red-400"
            src="/duo.JPG"
            alt=""
          />
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
        className="absolute top-0 lg:h-72 h-36 z-20 rotate-90"
        height={70}
        src="/flower.png"
        alt=""
      />
      <img
        className="absolute top-0 right-0 lg:h-72 h-36 z-20 rotate-180"
        height={70}
        src="/flower.png"
        alt=""
      />
      <img
        className="absolute bottom-0 right-0 lg:h-72 h-36 z-20 -rotate-90"
        height={70}
        src="/flower.png"
        alt=""
      />
    </div>
  );
};
