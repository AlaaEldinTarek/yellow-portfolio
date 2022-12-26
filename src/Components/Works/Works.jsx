import React from "react";
import "./Works.css";
import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";
import { motion } from "framer-motion";

const Works = () => {
  const transition = { duration: 2, type: "spring" };

  return (
    <div className="works" id="Works">
      {/* left side */}
      <div className="awesome">
        <span>Works For All These</span>
        <span>Brands & Clients</span>
        <span>
          adipisicing elit. Illo obcaecati iusto sapiente enim repellendus rem
          vitae maiores quam debitis delectus.
          <br />
          Ab quo facilis laboriosam ut eos quae veritatis eveniet architecto?
          <br />
          Ab quo facilis laboriosam ut eos quae veritatis eveniet architecto?
          <br />
          Ab quo facilis laboriosam ut eos quae veritatis eveniet architecto?
          <br />
          Ab quo facilis laboriosam ut eos quae veritatis eveniet architecto?
          <br />
        </span>
        <button className="button s-button">Hire Me</button>
        <div className="blur s-blur1" style={{ background: "#abf1ff94" }}></div>
      </div>
      {/* right side */}
      <div className="n-right">
        <motion.div
          initial={{ rotate: 45}}
          whileInView={{ rotate: 0 }}
          viewport={{margin:'-40px'}}
          transition={transition}
          className="n-mainCircle"
        >
          <div className="n-secCircle">
            <img src={Upwork} alt="" />
          </div>
          <div className="n-secCircle">
            <img src={Fiverr} alt="" />
          </div>
          <div className="n-secCircle">
            <img src={Amazon} alt="" />
          </div>
          <div className="n-secCircle">
            <img src={Shopify} alt="" />
          </div>
          <div className="n-secCircle">
            <img src={Facebook} alt="" />
          </div>
        </motion.div>
        {/* backgound Circles */}
        <div className="n-backCircle blueCircle"></div>
        <div className="n-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
