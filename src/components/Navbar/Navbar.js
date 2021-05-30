import React, { Fragment } from "react";
import logo from "../../images/logo.jpg";
import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  return (
    <Fragment>
      <div className="navbar">
        <nav className="nav">
          <div className="nav-content">
            <img src={logo} className="nav-logo" alt="Logo" />
            <ul className="nav-items">
              <li className="nav-item">
                <Link
                  activeClass="active"
                  to="About me"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="section"
                >
                  About me
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="section"
                  to="Skills"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Skills
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="section"
                  to="Projects"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Projects
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </Fragment>
  );
};

export default Navbar;
