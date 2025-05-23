import React, { useState } from "react";
import "./Background.css";

import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import video from "../../assets/video1.mp4";

function Background({ heroCount, playState }) {
  if (playState) {
    return (
      <video className="background" autoPlay loop muted>
        <source src={video} type="video/mp4"></source>
      </video>
    );
  } else if (heroCount === 0) {
    return <img src={image1} className="background" />;
  } else if (heroCount === 1) {
    return <img src={image2} className="background" />;
  } else if (heroCount === 2) {
    return <img src={image3} className="background" />;
  }
}

export default Background;
