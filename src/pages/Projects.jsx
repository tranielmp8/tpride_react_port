import React from "react";
import Header from "../components/Header";
import { FaLaptopCode } from "react-icons/fa";
import projectsdata from "./projectsdata";

function Projects() {
  return (
    <div className="project-section">
      <Header />
      <div className="container projects-intro">
        <div className="row flex-with-center ">
          {/* <div className="col-md-6 n-box2 p-3 mt-5 py-5 ">
            <div>
              <h1 className="font-bold">Projects</h1>
              <p className="font-bold">React, Javascript, HTML/CSS</p>
              <button className=" project-btn">Get Started</button>
            </div>
          </div> */}
          <div className="col-md-4 position-relative">
            <h1 className="font-bold">Projects</h1>
            <p className="font-bold">React, Javascript, HTML/CSS</p>
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path
                fill="#000000"
                d="M42,-57.3C54.5,-48.7,64.9,-36.6,72.1,-21.7C79.4,-6.8,83.7,10.9,80.6,28C77.5,45,67,61.5,52.4,70.1C37.7,78.7,18.9,79.4,-0.2,79.7C-19.2,79.9,-38.3,79.5,-50.9,70.2C-63.5,61,-69.5,42.8,-75.2,24.6C-80.8,6.5,-86.1,-11.6,-81,-26C-75.9,-40.4,-60.4,-51.1,-45.2,-58.9C-30,-66.6,-15,-71.4,-0.1,-71.2C14.7,-71,29.5,-65.9,42,-57.3Z"
                transform="translate(100 100)"
              />
            </svg>
            <FaLaptopCode
              color="rgb(152, 58, 240)"
              size="300"
              className="position-absolute top-50 start-50 translate-middle"
            />
          </div>
        </div>
      </div>

      <div className="container projects-list">
        <h3
          className="font-bold"
          style={{ textAlign: "center", color: "white", fontSize: "40px" }}
        >
          Take a look at my projects
        </h3>
        <hr style={{ height: ".5rem", background: "rgb(152, 58, 240)" }} />

        <div className="row">
          {projectsdata.map((project) => {
            return (
              <div className="proj-item col-md-4">
                <div className="position-relative project">
                  <img src={project.image} alt="" />
                  <div className="project-content">
                    <h3>{project.title}</h3>
                    <hr />
                    <p>{project.description}</p>
                    <button className="demo-button">DEMO</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Projects;
