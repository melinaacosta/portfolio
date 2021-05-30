import React, { Fragment } from "react";
import html from "../../images/html.png";
import css from "../../images/css.png";
import js from "../../images/js.png";
import mysql from "../../images/mysql.png";
import node from "../../images/node.png";
import apis from "../../images/apis.png";
import react from "../../images/react.png";
import sequelize from "../../images/sequelize.png";
import { Element } from "react-scroll";

const Skills = () => {
  return (
    <Fragment>
      <Element name="Skills">
      <h1 className="titulos">Skills</h1>
      <hr className="hr"></hr>
      <div className="skills-display" id="page-2">
      <div>
          <img className="skills" src={react} />
        </div>
        <div>
          <img className="skills" src={html} />
        </div>
        <div>
          <img className="skills" src={css} />
        </div>
        <div>
          <img className="skills" src={js} />
        </div>
        <div>
          <img className="skills" src={mysql} />
        </div>
        <div>
          <img className="skills" src={node} />
        </div>
        <div>
          <img className="skills" src={apis} />
        </div>
        <div>
          <img className="skills" src={sequelize} />
        </div>
      </div>
      <hr className="hr"></hr>
      </Element>
    </Fragment>
  );
};

export default Skills;