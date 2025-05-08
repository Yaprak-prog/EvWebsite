import React from "react";
import "./Hero.css";

import pause_icon from "../../assets/pause_icon.png";
import play_icon from "../../assets/play_icon.png";
import arrow_btn from "../../assets/arrow_btn.png";

function Hero({
  backgroundObj,
  heroCount,
  playState,
  setHeroCount,
  setPlayState,
}) {
  return (
    <div className="hero">
      <div className="text">
        <p>{backgroundObj[heroCount].text1}</p>
      </div>
      <div className="text">
        <p>{backgroundObj[heroCount].text2}</p>
      </div>
      <div className="explore">
        <p>Explore the features</p>
        <img src={arrow_btn}></img>
      </div>

      <div className="circle-btn">
        <p
          className={heroCount === 0 ? "circle-color" : "circle"}
          onClick={() => setHeroCount(0)}
        ></p>
        <p
          className={heroCount === 1 ? "circle-color" : "circle"}
          onClick={() => setHeroCount(1)}
        ></p>
        <p
          className={heroCount === 2 ? "circle-color" : "circle"}
          onClick={() => setHeroCount(2)}
        ></p>
      </div>

      <div className="play">
        <img
          onClick={() => setPlayState(!playState)}
          className="play-img"
          src={playState ? pause_icon : play_icon}
        ></img>
        <p className="play-text">See the video</p>
      </div>
    </div>
  );
}

export default Hero;
