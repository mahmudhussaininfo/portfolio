import React from "react";
import Title from "../../components/TItle/Title";
import "./testimonial.css";
import { Slider } from "../../components/Slider/Slider";

const Testimonial = () => {
  return (
    <>
      <div className="mamu-testimonial" id="testimonial">
        <div className="container">
          <Title title="Testimonial" text="my Happy clients said about me" />
          <div className="row py-3">
            <div className="col">
              <div className="mamu-sliders">
                <Slider />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
