import React from "react";
import "./Title.css";

import { Bounce } from "react-awesome-reveal";

const Title = ({ title, text }) => {
  return (
    <>
      <Bounce>
        <div className="mamu-title">
          <div className="row">
            <div className="col">
              <div className="mamu-title-content">
                <h1 className="text-center">{title}</h1>
                <p className="text-center">{text}</p>
              </div>
            </div>
          </div>
        </div>
      </Bounce>
    </>
  );
};

export default Title;
