import React from "react";
import Title from "../../components/TItle/Title";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { MdSchool } from "react-icons/md";
import "./Qualification.css";

const Qualification = () => {
  return (
    <>
      <div className="mamu-qualification" id="qualification">
        <div className="container">
          <Title title="My qualification" />
          <div className="mamu-quali-content py-5">
            <VerticalTimeline>
              <VerticalTimelineElement
                className="vertical-timeline-element--work mamu-verti-content"
                contentStyle={{ background: "#040d1b" }}
                contentArrowStyle={{
                  borderRight: "17px solid  #fff",
                }}
                date="2015"
                iconStyle={{
                  background: "#03142b",
                  color: "#fff",
                }}
                icon={<MdSchool />}
              >
                <h3 className="vertical-timeline-element-title py-2">SSC</h3>
                <h4 className="vertical-timeline-element-subtitle">
                  Sylhet, Bangladesh
                </h4>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work mamu-verti-content"
                contentStyle={{ background: "#040d1b" }}
                contentArrowStyle={{
                  borderRight: "17px solid  #fff",
                }}
                date="2017"
                iconStyle={{
                  background: "#03142b",
                  color: "#fff",
                }}
                icon={<MdSchool />}
              >
                <h3 className="vertical-timeline-element-title py-2">HSC</h3>
                <h4 className="vertical-timeline-element-subtitle">
                  Sylhet, Bangladesh
                </h4>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work mamu-verti-content"
                contentStyle={{ background: "#040d1b" }}
                contentArrowStyle={{
                  borderRight: "17px solid  #fff",
                }}
                date="2017"
                iconStyle={{
                  background: "#03142b",
                  color: "#fff",
                }}
                icon={<MdSchool />}
              >
                <h3 className="vertical-timeline-element-title py-2">
                  BSC HONOURS
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  Sylhet, Bangladesh
                </h4>
              </VerticalTimelineElement>
            </VerticalTimeline>
          </div>
        </div>
      </div>
    </>
  );
};

export default Qualification;
