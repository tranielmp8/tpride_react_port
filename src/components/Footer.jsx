import React from "react";
import { AiFillLinkedin, AiFillGithub, AiFillFacebook } from "react-icons/ai";
function Footer() {
  return (
    <div className="footer">
      <ul className="foot-list">
        <li className="foot-item">
          <a
            href="https://www.linkedin.com/in/traniel-pride-019768212/"
            target="_blank"
          >
            <AiFillLinkedin />
          </a>
        </li>
        <li className="foot-item">
          <a href="https://github.com/tranielmp8" target="_blank">
            <AiFillGithub />
          </a>
        </li>
        <li className="foot-item">
          <a href="https://www.facebook.com/traniel.pride" target="_blank">
            <AiFillFacebook />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
