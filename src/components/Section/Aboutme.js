import React, { Fragment } from "react";
import Meli from "../../images/meli.jpeg";
import { FaArrowDown } from "react-icons/fa";
import { Element } from "react-scroll";
// import Cv from "../../../public/files/CV-MELINA-ACOSTA.pdf";
import {Link, BrowserRouter as Router} from "react-router-dom"

const Aboutme = () => {
  return (
    <Fragment>
      <Element name="About me">
      <h1 className="titulos">About me</h1>
      <div className="aboutme">
        <div className="my-info">
          <img src={Meli} alt="perfil" className="img-meli" />
          <button className="buttoncv">
          <Router>
          <Link className="download" to="./files/CV-MELINA-ACOSTA.pdf" target="_blank" download>Download CV <FaArrowDown className="arrow" /></Link> 
          </Router>
          </button>
          <p className="parrafo">
          Hello, my name is Melina and I am a Web Developer. I have a Bachelor’s
          Degree in Administration from the University of Buenos Aires and I
          love design. Previously, I worked in in a design Institute and a
          marketing agency over the last two years. My programming experience
          includes JavaScript, HTML, CSS, Node.js, React.js, Bootstrap, APIs,
          Express.js, MySQL, Sequelize, Heroku, GitHub, Postman and Visual
          Studio Code.
        </p>
        
        </div>
        {/* <div>
          <button className="button">About me</button>
        </div> */}
       
      </div>
      </Element>
    </Fragment>
  );
};

export default Aboutme;
