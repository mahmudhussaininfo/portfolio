import "./Home.css";
import mahmud from "../../assets/img/mahmud.png";
import Typewriter from "typewriter-effect";
import resume from "../../assets/file/resume.txt";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { Slide } from "react-awesome-reveal";
import { Fade } from "react-awesome-reveal";
import { Zoom } from "react-awesome-reveal";
const Home = () => {
  return (
    <>
      <div className="mamu-home" id="home">
        <div className="container">
          <div className="row">
            <div className="col-md-7 col-sm-12">
              <div className="mamu-content py-5">
                <Fade direction="down">
                  <div className="social">
                    <span>
                      <a
                        href="https://www.facebook.com/mahmudhussainn/"
                        target="_blank"
                      >
                        <FaFacebook />
                      </a>
                      <a
                        href="https://www.instagram.com/mahmudhussaindev/"
                        target="_blank"
                      >
                        <FaInstagram />
                      </a>
                      <a
                        href="https://github.com/mahmudhussaininfo"
                        target="_blank"
                      >
                        <BsGithub />
                      </a>
                      <a
                        href="https://www.linkedin.com/in/mahmudhussain76/"
                        target="_blank"
                      >
                        <BsLinkedin />
                      </a>
                    </span>
                  </div>
                </Fade>

                <Slide direction="left">
                  <h3 className="text-light">
                    Hello, welcome to <br />
                    my Home! 🧡
                  </h3>
                  <h1 className="mt-5">
                    <Typewriter
                      options={{
                        strings: [
                          "Full Stack Developer!",
                          "React Expert!",
                          "wordpress expert!",
                        ],
                        autoStart: true,
                        loop: true,
                      }}
                    />
                  </h1>
                </Slide>
                <div className="mamu-button py-3 d-flex">
                  <a
                    className="mamuu"
                    href="https://api.whatsapp.com/send?phone=+8801776757650"
                    rel="noreferrer"
                    target="_blank"
                  >
                    Hire me
                  </a>
                  <a
                    className="mamuu text-center"
                    href={resume}
                    download="mahmud_resume"
                  >
                    Download Resume
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-5 col-sm-12">
              <Zoom>
                <div className="mamu-photo">
                  <img className="" src={mahmud} alt="mahmud" />
                </div>
              </Zoom>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
