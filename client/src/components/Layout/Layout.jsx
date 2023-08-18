import React, { useState } from "react";
import { HiArrowCircleRight, HiArrowCircleLeft } from "react-icons/hi";
import "./Layout.css";
import Menu from "../Menus/Menu";

const Layout = () => {
  const [toggle, setToggle] = useState(true);

  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <>
      <div className="sidebar-section">
        <div className={toggle ? "sidebar-toogle sidebar" : "sidebar"}>
          <div className="sidebar-toogle-icon">
            <span onClick={handleToggle}>
              {toggle ? <HiArrowCircleLeft /> : <HiArrowCircleRight />}
            </span>
          </div>
          <div className="menu">
            <Menu toggle={toggle} />
          </div>
        </div>
        {/* 
        <div className="container">
          <Home />
        </div> */}
      </div>
    </>
  );
};

export default Layout;
