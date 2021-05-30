import React, { Fragment } from "react";
import Card from "./Card";
import Proyectouno from "../../images/proyectouno.PNG";
import Proyectodos from "../../images/proyectodos.PNG";
import Proyectotres from "../../images/proyectotres.PNG";
import Proyectocuatro from "../../images/proyectocuatro.PNG";
import { Element } from "react-scroll";

const Projects = () => {
  let proyectouno = {
    img: { proy: Proyectouno },
    titulo: "E-commerce",
    descripcion: "Proyecto integrador DH",
    buton: "https://fulldesign.herokuapp.com/",
  };

  let proyectodos = {
    img: { proy: Proyectodos },
    titulo: "React App",
    descripcion: "User Random Api",
    buton: "https://userapp-react.herokuapp.com/",
  };
  const proyectotres = {
    img: { proy: Proyectotres },
    titulo: "Buenos Aires Web",
    descripcion: "Single Page",
    buton: "https://buenosairesweb.herokuapp.com/",
  };
  const proyectocuatro = {
    img: { proy: Proyectocuatro },
    titulo: "Dashboard Api React",
    descripcion: "Dashboard Design",
    buton: "https://react-dashboard-2021.herokuapp.com/",
  };

  let arrayCards = [proyectouno, proyectodos, proyectotres, proyectocuatro];

  return (
    <Fragment>
       <Element name="Projects">
      <h1 className="titulos">Projects</h1>
      <div className="allprojects">
        <br></br>
        {arrayCards.map((card, i) => {
          return <Card {...card} key={i} />;
        })}
      </div>
      </Element>
    </Fragment>
  );
};

export default Projects;
