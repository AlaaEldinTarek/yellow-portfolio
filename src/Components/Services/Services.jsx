import React from "react";
import "./Services.css";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from "../Card/Card";
import Resume from "./Alaa-CV.pdf";
import { motion } from "framer-motion";

const Services = () => {
  const transition = { duration: 2, type: "spring" };

  return (
    <div className="services" id="Services">
      {/* left side */}
      <div className="awesome">
        <span>My Awesome</span>
        <span>Services</span>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo
          obcaecati iusto sapiente enim repellendus rem vitae maiores quam
          debitis delectus.
          <br />
          Ab quo facilis laboriosam ut eos quae veritatis eveniet architecto?
        </span>
        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div
          className="blur s-blur1"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
      {/* right side */}
      <div className="cards">
        {/* first card */}
        <motion.div
          initial={{ left: "8rem" }}
          whileInView={{ left: "-8rem" }}
          transition={transition}
          style={{ left: "8rem" }}
        >
          <Card
            emoji={HeartEmoji}
            heading={"Developer"}
            details={"HTML, CSS, JavaScrept, React"}
          />
        </motion.div>
        {/* Scound card */}
        <motion.div
          initial={{ left: "-8rem" }}
          whileInView={{ left: "8rem" }}
          transition={transition}
          style={{ left: "-8rem", top: "12rem" }}
        >
          <Card
            emoji={Glasses}
            heading={"Desigen"}
            details={"PhotoShop, Figma, Adobe"}
          />
        </motion.div>
        {/* There card */}
        <motion.div
          initial={{ left: "10rem" }}
          whileInView={{ left: "-10rem" }}
          transition={transition}
          style={{ left: "10rem", top: "19rem" }}
        >
          <Card
            emoji={Humble}
            heading={"UI/UX"}
            details={
              " Lorem ipsum dolor sit amet, consectetur adipisicing elit."
            }
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: " #abf1ff94" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
