import React, { useState } from "react";
import { TiThMenuOutline } from "react-icons/ti";
import { CgClose } from "react-icons/cg";
import { Link } from "react-router-dom";

function Header() {
  const [showHeader, setShowHeader] = useState(false);
  const path = window.location.pathname;
  return (
    <div className="header">
      {showHeader ? (
        <CgClose
          onClick={() => setShowHeader(!showHeader)}
          className="menu-icon position-fixed top-0 end-0 close-menu"
        />
      ) : (
        <TiThMenuOutline
          className="  menu-icon position-fixed top-0 end-0"
          onClick={() => setShowHeader(!showHeader)}
        />
      )}

      <ul
        className={`${
          showHeader ? "show-header" : "hide-header"
        } n-box1 main-header`}
      >
        <li className={`${path == "/" && "active"}`}>
          <Link to="/">Home</Link>
        </li>
        {/* <li className={`${path == "/About" && "active"}`}>
          <Link to="/About">About</Link>
        </li> */}
        <li className={`${path == "/Projects" && "active"}`}>
          <Link to="/Projects">Projects</Link>
        </li>
        <li className={`${path == "/Contact" && "active"}`}>
          <Link to="/Contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
