import React, { Fragment } from "react";
import Sky from "../../images/sky.jpg";
import "../../App.css";

const Imagen = () => {
  return (
    <Fragment>
      <img src={Sky} alt="sky" className="img-index" />
    </Fragment>
  );
};

export default Imagen;
