import React, { useState } from "react";
import "./mobileNav.css";
import { MdOutlineMenuOpen, MdOutlineMenu } from "react-icons/md";
import { Link } from "react-scroll";
import { AiOutlineHome } from "react-icons/ai";
import { RxAvatar } from "react-icons/rx";
import { TbUserCode } from "react-icons/tb";
import { MdMilitaryTech } from "react-icons/md";
import { BsSignIntersectionT, BsJournalCode } from "react-icons/bs";
import { TiContacts } from "react-icons/ti";
import { Fade } from "react-awesome-reveal";

const MobileNav = () => {
  const [open, setOpen] = useState(false);
  const menuOpen = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className="mobile-nav">
        <div className="mobile-nav-header d-flex justify-content-between">
          {open ? (
            <MdOutlineMenuOpen onClick={menuOpen} />
          ) : (
            <MdOutlineMenu onClick={menuOpen} />
          )}

          <h1 className="text-center">Portfolio</h1>
        </div>
        {open && (
          <div className="mobile-nav-menu">
            <Fade direction="down">
              <div className="nav-items py-5">
                <div className="nav-item">
                  <div className="nav-link py-3">
                    <Link
                      to="home"
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={100}
                      onClick={menuOpen}
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
                      onClick={menuOpen}
                    >
                      <RxAvatar title="ABOUT" />
                      <span>About</span>
                    </Link>
                  </div>
                  <div className="nav-link py-3">
                    <Link
                      to="portfolio"
                      spy={true}
                      smooth={true}
                      offset={50}
                      duration={100}
                      onClick={menuOpen}
                    >
                      <BsJournalCode title="Portfolio" />
                      <span>portfolio</span>
                    </Link>
                  </div>
                  <div className="nav-link py-3">
                    <Link
                      to="tech"
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={100}
                      onClick={menuOpen}
                    >
                      <MdMilitaryTech title="TECH STACK" />
                      <span>Tech Stack</span>
                    </Link>
                  </div>

                  <div className="nav-link py-3">
                    <Link
                      to="qualification"
                      spy={true}
                      smooth={true}
                      offset={50}
                      duration={100}
                      onClick={menuOpen}
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
                      onClick={menuOpen}
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
                      onClick={menuOpen}
                    >
                      <TiContacts title="CONTACT" />
                      <span>Contact</span>
                    </Link>
                  </div>
                </div>
              </div>
            </Fade>
          </div>
        )}
      </div>
    </>
  );
};

export default MobileNav;
