import React from "react";

const Card = (props) => {
  return (
    <div className="display-card">
      <div className="card">
        <img className="card-img" src={props.img.proy}  alt="Avatar" />
        <div className="card-container">
          <h4>
            <b>{props.titulo}</b>
          </h4>
          <p>{props.descripcion} &amp; Engineer</p>
          <button className="button"><a className="enlaces" href={props.buton} target="_blank">Go to the project</a></button>
        </div>
      </div>
    </div>
  );
};

export default Card;
