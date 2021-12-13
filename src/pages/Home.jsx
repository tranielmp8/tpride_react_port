import React from "react";
import Header from "../components/Header";
import Carousel from "../components/Carousel";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="introduction flex-with-center">
        <div>
          {/* <h1>TRANIEL</h1> */}
          <button className="primary-button home-btn font-bold">
            <a href="./Projects">Projects</a>
          </button>
        </div>
      </div>

      <div>
        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#5000ca"
            fill-opacity="0.5"
            d="M0,256L1440,0L1440,0L0,0Z"
          ></path>
        </svg> */}
      </div>

      <Carousel />

      <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#00000"
            fill-opacity="1"
            d="M0,0L1440,160L1440,0L0,0Z"
          ></path>
        </svg>
      </div>
      <div className="container mt-3">
        <div className="row justify-content-start">
          <div className="col-md-4">
            <div className="n-box2 px-3 py-4 font-bold">
              <h1>Web Development</h1>
              <p>Imagination on a browser</p>
            </div>
          </div>
        </div>

        <div className="row pt-5 justify-content-center">
          <div className="col-md-4">
            <div className="jsbuff">
              <img
                src="./jsbuff.svg"
                alt="jsbuff"
                height="200"
                classnAME="W-100"
              />
            </div>
          </div>
        </div>

        <div className="row pt-5 justify-content-end">
          <div className="col-md-4">
            <div className="n-box2 px-3 py-4 font-bold ">
              <p>
                Javascript is one of the most used programming languages in the
                world because of its ubiquitous use on all platforms and mass
                adoption. Javascript is well known especially for Web
                Development.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#00000"
            fill-opacity="1"
            d="M0,32L1440,288L1440,320L0,320Z"
          ></path>
        </svg>
      </div>
      {/* about me */}
      <div
        className="about-me "
        style={{ backgroundImage: `url('./aboutme.svg')` }}
      >
        <div className="about-left">
          <h1>About Me</h1>
        </div>

        <div className="about-center">
          <img className="about-image" src="./me_outside.png" />
        </div>

        <div className="">
          <pre>
            <h3 className="font-bold about-header">More about Traniel</h3>
            {JSON.stringify(
              {
                name: "Traniel Pride",
                Occupation: "Software Developer",
                Degree: "(CIS - Computer Information Systems)",
                gender: "Male",
              },
              null,
              3
            )}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default Home;
