import about from "../../assets/img/about.png";
import "./About.css";
// import Bounce from "react-reveal/Bounce";
import { Bounce } from "react-awesome-reveal";

const About = () => {
  return (
    <>
      <div className="mamu-about-main" id="about">
        <div className="container">
          <Bounce bottom>
            <div className="row mamu-about">
              <div className="col-md-6">
                <div className="mamu-about-photo">
                  <img className="img-fluid" src={about} alt="" />
                </div>
              </div>
              <div className="col-md-6 about-content">
                <div className="mamu-about-content">
                  <h1>About me</h1>

                  <hr class="hr" />
                  <p>
                    Hello there! I'm Mahmud Husssain, a passionate and dedicated
                    full stack developer with a keen eye for detail and a deep
                    love for crafting innovative digital solutions. With 3 years
                    of experience in the world of web development,
                    <br /> <br />
                    My journey began with a fascination for coding during my
                    early years, and that curiosity has led me to become
                    proficient in both front-end and back-end technologies.
                    <br /> <br />
                    On the front-end, I excel at translating user needs and
                    design concepts into responsive, visually appealing
                    interfaces. I'm well-versed in HTML, CSS, and JavaScript,
                    and I have hands-on experience with popular libraries and
                    frameworks like React, I'm always up for the next adventure
                    that allows me to blend creativity, logic, and technology.
                    <br /> <br />
                    Thank you for taking the time to learn a bit about me. If
                    you're interested in discussing a project, sharing ideas, or
                    simply geeking out about technology, feel free to reach out.
                    Let's embark on a journey to turn ideas into reality! Feel
                    free to personalize and tailor this content to your own
                    experiences, skills, and style.
                  </p>
                </div>
              </div>
            </div>
          </Bounce>
        </div>
      </div>
    </>
  );
};

export default About;
