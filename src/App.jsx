import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Background from "./Components/Background/Background";
import Navbar from "./Components/Navbar/Navbar";

import image1 from "./assets/image1.png";
import image2 from "./assets/image2.png";
import image3 from "./assets/image3.png";
import video from "./assets/video1.mp4";
import Hero from "./Components/Hero/Hero";

function App() {
  let backgroundObj = [
    { text1: "Dive into ", text2: "what you love" },
    { text1: "Indulge", text2: "your passions" },
    { text1: "Give in to", text2: "your passions" },
  ];
  const [heroCount, setHeroCount] = useState(1);
  const [playState, setPlayState] = useState(false);

  return (
    <div>
      <Background heroCount={heroCount} playState={playState} />;
      <Navbar />
      <Hero
        backgroundObj={backgroundObj}
        heroCount={heroCount}
        playState={playState}
        setHeroCount={setHeroCount}
        setPlayState={setPlayState}
      />
    </div>
  );
}

export default App;
