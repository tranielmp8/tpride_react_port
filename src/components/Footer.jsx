import React from "react";
import { AiFillLinkedin, AiFillGithub, AiFillFacebook } from "react-icons/ai";
function Footer() {
  return (
    <div className="footer">
      <ul className="foot-list">
        <li className="foot-item">
          <a
            href="#"
          >
            <AiFillLinkedin />
          </a>
        </li>
        <li className="foot-item">
          <a href="#">
            <AiFillGithub />
          </a>
        </li>
        <li className="foot-item">
          <a href="#">
            <AiFillFacebook />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
