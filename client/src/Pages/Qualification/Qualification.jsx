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
                contentStyle={{ background: "#00ddd3" }}
                contentArrowStyle={{
                  borderRight: "17px solid  #00ddd3",
                }}
                date="2015"
                iconStyle={{
                  background: "#256675",
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
                contentStyle={{ background: "#00ddd3" }}
                contentArrowStyle={{
                  borderRight: "17px solid  #00ddd3",
                }}
                date="2017"
                iconStyle={{
                  background: "#256675",
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
                contentStyle={{ background: "#00ddd3" }}
                contentArrowStyle={{
                  borderRight: "17px solid  #00ddd3",
                }}
                date="2018-2022"
                iconStyle={{
                  background: "#256675",
                  color: "#fff",
                }}
                icon={<MdSchool />}
              >
                <h3 className="vertical-timeline-element-title py-2">
                  HONOURS
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  Sylhet, Bangladesh
                </h4>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work mamu-verti-content"
                contentStyle={{ background: "#00ddd3" }}
                contentArrowStyle={{
                  borderRight: "17px solid  #00ddd3",
                }}
                date="2021-Present"
                iconStyle={{
                  background: "#256675",
                  color: "#fff",
                }}
                icon={<MdSchool />}
              >
                <h3 className="vertical-timeline-element-title py-2">
                  WEB DEVELOPER
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  Dhaka, Bangladesh
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
