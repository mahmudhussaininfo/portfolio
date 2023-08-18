import "./Menu.css";
import { Link } from "react-scroll";
import { AiOutlineHome } from "react-icons/ai";
import { RxAvatar } from "react-icons/rx";
import { TbUserCode } from "react-icons/tb";
import { MdMilitaryTech } from "react-icons/md";
import { BsSignIntersectionT, BsJournalCode } from "react-icons/bs";
import { TiContacts } from "react-icons/ti";
import Fade from "react-reveal/Fade";

const Menu = ({ toggle }) => {
  return (
    <>
      {toggle ? (
        <>
          <Fade left>
            {" "}
            <div className="nav-items py-5">
              <div className="nav-item">
                <div className="nav-link py-3">
                  <Link
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <AiOutlineHome title="HOME" />

                    <span>HOME</span>
                  </Link>
                </div>
                <div className="nav-link py-3">
                  <Link
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <RxAvatar title="ABOUT" />
                    <span>About</span>
                  </Link>
                </div>
                <div className="nav-link py-3">
                  <Link
                    to="tech"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <MdMilitaryTech title="TECH STACK" />
                    <span>Tech Stack</span>
                  </Link>
                </div>
                <div className="nav-link py-3">
                  <Link
                    to="work"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={100}
                  >
                    <BsJournalCode title="Portfolio" />
                    <span>portfolio</span>
                  </Link>
                </div>
                <div className="nav-link py-3">
                  <Link
                    to="qualification"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={100}
                  >
                    <TbUserCode title="qualification" />
                    <span>qualification</span>
                  </Link>
                </div>
                <div className="nav-link py-3">
                  <Link
                    to="testimonial"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={100}
                  >
                    <BsSignIntersectionT title="TESTIMONIAL" />
                    <span>Testimonial</span>
                  </Link>
                </div>
                <div className="nav-link py-3">
                  <Link
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={100}
                  >
                    <TiContacts title="CONTACT" />
                    <span>Contact</span>
                  </Link>
                </div>
              </div>
            </div>
          </Fade>
        </>
      ) : (
        <>
          <div className="nav-items py-5">
            <div className="nav-item">
              <div className="nav-link py-3">
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <AiOutlineHome title="HOME" />
                </Link>
              </div>
              <div className="nav-link py-3">
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <RxAvatar title="ABOUT" />
                </Link>
              </div>
              <div className="nav-link py-3">
                <Link
                  to="tech"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <MdMilitaryTech title="TECH STACK" />
                </Link>
              </div>
              <div className="nav-link py-3">
                <Link
                  to="work"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={100}
                >
                  <BsJournalCode title="Portfolio" />
                </Link>
              </div>
              <div className="nav-link py-3">
                <Link
                  to="qualification"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={100}
                >
                  <TbUserCode title="qualification" />
                </Link>
              </div>
              <div className="nav-link py-3">
                <Link
                  to="testimonial"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={100}
                >
                  <BsSignIntersectionT title="TESTIMONIAL" />
                </Link>
              </div>
              <div className="nav-link py-3">
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={100}
                >
                  <TiContacts title="CONTACT" />
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Menu;
