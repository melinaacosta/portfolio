import React, { Fragment, useRef, useState } from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Presentation = () => {

  let popup2 = useRef();
  const [popup, setPopup] = useState("");
  

  const myFunction = e => {
    e.preventDefault()
    setPopup(popup2.current.classList.toggle("show"));
  };

  return (
    <Fragment>
      <div className="presentacion">
        <h3 className="name">Melina Acosta</h3>
        <p>Programmer • Web Developer • Designer</p>
        <a
          className="a"
          rel="noreferrer"
          target="_blank"
          href="https://www.linkedin.com/in/melina-acosta/"
        >
          <FaLinkedin className="icon" />
        </a>
        <a
          className="a"
          rel="noreferrer"
          target="_blank"
          href="https://github.com/melinaacosta"
        >
          <FaGithub className="icon" />
        </a>
          <div className="popup" onClick={myFunction}>
            <FaEnvelope  className="icon envelope" />
            <span ref={popup2} className="popuptext">meliacostaa@gmail.com</span>
          </div>
      </div>
    </Fragment>
  );
};

export default Presentation;
