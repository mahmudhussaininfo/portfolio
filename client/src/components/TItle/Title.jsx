import React from "react";
import "./Title.css";
import Flash from "react-reveal/Flash";

const Title = ({ title, text }) => {
  return (
    <>
      <Flash>
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
      </Flash>
    </>
  );
};

export default Title;
