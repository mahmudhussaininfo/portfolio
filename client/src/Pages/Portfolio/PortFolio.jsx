import React from "react";
import "./Portfolio.css";
import Title from "../../components/TItle/Title";

const PortFolio = () => {
  return (
    <>
      <div className="mamu-portfolio">
        <div className="container">
          <Title title="Portfolio" text="Here is my previous work" />
          <div className="row">
            <div className="col">
              <h1>Hello</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortFolio;
