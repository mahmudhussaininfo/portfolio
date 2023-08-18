import React from "react";
import "./Tech.css";
import { techIcon } from "../../utils/TechIcon/TechIcon";
import Title from "../TItle/Title";
import Flash from "react-reveal/Flash";
import Slide from "react-reveal/Slide";

const TechStack = () => {
  return (
    <>
      <div className="mamu-tech" id="tech">
        <div className="container">
          <div className="row">
            <div className="col">
              <Flash>
                <div className="mamu-tech-content">
                  <Title title="Technology Stack" />
                  <p>
                    My versatile skill set spans both front-end and back-end
                    technologies, <br />
                    enabling me to create seamless end-to-end experiences.
                    Here's a glimpse into my technology stack
                  </p>
                </div>
              </Flash>
            </div>
          </div>

          <div className="row py-4">
            {techIcon &&
              techIcon.map((item, index) => {
                return (
                  <div className="col-md-3">
                    <div className="card m-3 mamu-card">
                      <div className="card-body">
                        <Slide left>
                          <div className="mamu-media ">
                            <div className="icon">
                              <item.icon />
                            </div>
                            <div className="mamu-media-content">
                              <h4>{item.name}</h4>
                            </div>
                          </div>
                        </Slide>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default TechStack;
