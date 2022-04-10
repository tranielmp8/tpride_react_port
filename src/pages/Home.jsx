import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="introduction flex-with-center">
        <div className="btn-container">
          {/* <h1>TRANIEL</h1> */}

          <button className="primary-button home-btn font-bold">
            <Link
              to="/Projects"
              style={{ textDecoration: "none", color: "black" }}
            >
              Projects
            </Link>
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
      <div className="container dnp-section mt-3">
        {/* <img className="img-dnp" src="./dnp_logo.png" alt="dnp logo" /> */}
        <div className="row justify-content-start">
          <div className="col-md-4">
            <div className=" px-3 py-4 font-bold">
              <img
                className="left-img W-100"
                src="./left-img.png"
                alt="left img"
                height="300"
              />
              <p className="text-center">Frontend Development</p>
            </div>
          </div>
        </div>

        <div className="row pt-5 justify-content-center">
          <div className="col-md-4">
            <div className="fullstack">
              <img
                src="./fullstack.png"
                alt="fullstack"
                height="300"
                className="W-100"
              />
            </div>
            <p className="text-center">FullStack</p>
          </div>
        </div>

        <div className="row pt-5 justify-content-end">
          <div className="col-md-4">
            <div className="px-3 py-4 font-bold ">
              <img
                src="./right-img.png"
                alt="right-img"
                height="300"
                className="W-100 right-img"
              />
              <p className="text-center">Backend Development</p>
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
          <p>
            Hello I'm <span>Traniel Pride</span>,
          </p>
          <p>
            I am a developer with a big imagination. Coding is very exciting and
            I enjoy seeing dreams on a webpage.
          </p>
          <p>
            I have worked with Javascript, and some of the most popular
            frameworks such as React and Vue. I have knowledge in Python and
            Flask as well. Some other skills I have include: Nodejs, express,
            mongoose. I have understanding of NoSQL: MongoDb, and other RDMS's
            such as MySQL, and PostgreSQL.
          </p>
        </div>

        <div className="about-center">
          <center>
            <img className="about-image" src="./me_outside.png" alt="about" />
          </center>
        </div>

        <div className="about-right">
          <pre>
            <h3 className="font-bold about-header">More about Traniel</h3>
            {JSON.stringify(
              {
                name: "Traniel Pride",
                Occupation: "Software Developer",
                Degree: "(CIS - Computer Information Systems)",
              },
              null,
              3
            )}
          </pre>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
