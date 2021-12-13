import React from "react";
import {
  FaReact,
  FaPython,
  FaNodeJs,
  FaJsSquare,
  FaBootstrap,
  FaCss3,
  FaHtml5,
  FaVuejs,
} from "react-icons/fa";

import { SiDjango } from "react-icons/si";

function Carousel() {
  return (
    <div>
      <div className="carousel-container position-relative">
        <h1 className="position-absolute top-0 start-0 end-0 text-center mt-5">
          Technologies I use
        </h1>
        <div className="gallery">
          <span style={{ "--i": 1 }}>
            <FaReact color="cyan" />
          </span>
          <span style={{ "--i": 2 }}>
            <FaPython color="darkblue" />
          </span>
          <span style={{ "--i": 3 }}>
            <FaNodeJs color="green" />
          </span>
          <span style={{ "--i": 4 }}>
            <FaJsSquare color="yellow" />
          </span>
          <span style={{ "--i": 5 }}>
            <FaBootstrap color="purple" />
          </span>
          <span style={{ "--i": 6 }}>
            <FaCss3 color="blue" />
          </span>
          <span style={{ "--i": 7 }}>
            <FaHtml5 color="orange" />
          </span>
          <span style={{ "--i": 8 }}>
            <SiDjango color="darkgreen" />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
