import React from "react";
import "./Portfolio.css";
import Title from "../../components/TItle/Title";
import project1 from "../../assets/img/project1.png";
import project2 from "../../assets/img/project2.png";
import project3 from "../../assets/img/project3.png";
import { Zoom } from "react-awesome-reveal";

const PortFolio = () => {
  return (
    <>
      <div className="mamu-portfolio" id="portfolio">
        <div className="container">
          <Title title="My recent projects" text="Here is my previous work" />
          <div className="portfolio">
            <Zoom>
              <div className="row">
                <div className="col-md-4">
                  <div className="card text-center portfolio-cards">
                    <div className="portfolio-card-image">
                      <img className="img-thumbnail" src={project1} alt="" />
                    </div>
                    <div className="portfolio-img-content">
                      <span>CSS</span>
                      <span>REact</span>
                      <span>express</span>
                      <span>mongodb</span>
                    </div>
                    <div className="card-body portfolio-cards-body">
                      <h4>eCOmmerce website</h4>
                      <div className="portfolio-buttons mt-5">
                        <a
                          href="https://github.com/mahmudhussaininfo/eCommerce-redux"
                          target="_blank"
                          className="button-portfolio"
                        >
                          view
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card text-center portfolio-cards">
                    <div className="portfolio-card-image">
                      <img className="img-thumbnail" src={project2} alt="" />
                    </div>
                    <div className="portfolio-img-content">
                      <span>wordpress</span>
                      <span>elementor</span>
                      <span>php</span>
                      <span>css</span>
                    </div>
                    <div className="card-body portfolio-cards-body">
                      <h4>landing page</h4>
                      <div className="portfolio-buttons mt-5">
                        <a
                          href="https://www.conquerdebt.net/"
                          target="_blank"
                          className="button-portfolio"
                        >
                          view
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card text-center portfolio-cards">
                    <div className="portfolio-card-image">
                      <img className="img-thumbnail" src={project3} alt="" />
                    </div>
                    <div className="portfolio-img-content">
                      <span>Node</span>
                      <span>Express</span>
                      <span>MongoDb</span>
                      <span>React</span>
                    </div>
                    <div className="card-body portfolio-cards-body">
                      <h4>backend dashboard</h4>
                      <div className="portfolio-buttons mt-5">
                        <a
                          href="https://github.com/mahmudhussaininfo/react-admin"
                          target="_blank"
                          className="button-portfolio"
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
      </div>
    </>
  );
};

export default PortFolio;
