import React from "react";
import Title from "../../components/TItle/Title";
import "./work.css";
import project1 from "../../assets/img/project1.png";
import project2 from "../../assets/img/project2.png";
import project3 from "../../assets/img/project3.png";
import Zoom from "react-reveal/Zoom";

const WorkExperience = () => {
  return (
    <>
      <div className="mamu-work" id="work">
        <div className="container">
          <Title title="my recent projects" />
          <Zoom bottom>
            <div className="row py-3">
              <div className="col-md-4">
                <div className="card text-center mamu-cards">
                  <div className="card-image">
                    <img className="img-thumbnail" src={project1} alt="" />
                  </div>
                  <div className="card-img-content">
                    <span>CSS</span>
                    <span>REact</span>
                    <span>express</span>
                    <span>mongodb</span>
                  </div>
                  <div className="card-body mamu-cards-body">
                    <h4>eCOmmerce website</h4>
                    <div className="mamu-buttons mt-5">
                      <a
                        href="https://github.com/mahmudhussaininfo/eCommerce-redux"
                        target="_blank"
                        className=""
                      >
                        view
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card text-center mamu-cards">
                  <div className="card-image">
                    <img className="img-thumbnail" src={project2} alt="" />
                  </div>
                  <div className="card-img-content">
                    <span>wordpress</span>
                    <span>elementor</span>
                    <span>php</span>
                    <span>css</span>
                  </div>
                  <div className="card-body mamu-cards-body">
                    <h4>landing page</h4>
                    <div className="mamu-buttons mt-5">
                      <a
                        href="https://www.conquerdebt.net/"
                        target="_blank"
                        className=""
                      >
                        view
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card text-center mamu-cards">
                  <div className="card-image">
                    <img className="img-thumbnail" src={project3} alt="" />
                  </div>
                  <div className="card-img-content">
                    <span>Node</span>
                    <span>Express</span>
                    <span>MongoDb</span>
                    <span>React</span>
                  </div>
                  <div className="card-body mamu-cards-body">
                    <h4>backend dashboard</h4>
                    <div className="mamu-buttons mt-5">
                      <a
                        href="https://github.com/mahmudhussaininfo/react-admin"
                        target="_blank"
                        className=""
                      >
                        view
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Zoom>
        </div>
      </div>
    </>
  );
};

export default WorkExperience;
