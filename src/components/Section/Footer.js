import React, { Fragment } from "react";
import Image from "../Section/Image"
import {animateScroll as scroll } from "react-dom"

const Footer = () => {

//  const scrollToTop =  () => {
//     scroll.scrollToTop();
// };
  return (
    <Fragment>
      <Image/>
      <footer className="page-footer">
        <small>
          Made with <span>❤</span> by{" "}
          <a href="">
            Melina Acosta
          </a>
        </small>
      </footer>
    </Fragment>
  );
};

export default Footer;