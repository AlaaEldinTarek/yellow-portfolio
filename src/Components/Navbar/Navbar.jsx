import React from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-name">Alaa</div>
        <Toggle />
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul>
            <Link spy={true} to="Navbar" smooth={true} activeClass="activeClass">
              <li>Home</li>
            </Link>
            <Link spy={true} to="Services" smooth={true} >
              <li>Services</li>
            </Link>
            <Link spy={true} to="Experience" smooth={true} >
              <li>Experience</li>
            </Link>
            <Link spy={true} to="Portfolio" smooth={true} >
              <li>Portfolio</li>
            </Link>
            <Link spy={true} to="Testmonials" smooth={true} >
              <li>Testmonials</li>
            </Link>
          </ul>
        </div>
        <button className="button n-button">Countact</button>
      </div>
    </div>
  );
};

export default Navbar;
