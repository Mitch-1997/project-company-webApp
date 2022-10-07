import React from "react";
import ImageHome from "./Home.jpg";
import { NavLink } from "react-router-dom";

const Combined= ({service}) => {
  return (
    <>
      <div className="card">
        <h2>{service.title}</h2>
        <img src={service.image} alt="solution1" className="serviceimage" />
        <p>{service.description} </p>
        <div className="btnBox">
          <div className="btn">
            <NavLink to="/about" className="readmore">
              Begin Learning{" "}
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Combined;
