import React, { Fragment } from "react";
import Me from "../../images/aboutme2.png";

const Image = () => {
  return (
    <Fragment>
      <div className="img-footer">
        <img src={Me} width="100%" alt="me" className="img-section" />
      </div>
    </Fragment>
  );
};

export default Image;