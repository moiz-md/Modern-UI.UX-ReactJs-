import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logoss.svg";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
// import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData.js";
import { IconContext } from "react-icons";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <div className="gpt3__navbar">
        <IconContext.Provider value={{ color: "#fff" }}>
          <div className="navbar">
            <a to="#" className="menu-bars">
              <FaIcons.FaBars onClick={showSidebar} />
            </a>
          </div>

          <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
            <ul className="nav-menu-items" onClick={showSidebar}>
              <li className="navbar-toggle">
                <a to="#" className="menu-bars">
                  <AiIcons.AiOutlineClose />
                </a>
              </li>
              {SidebarData.map((item, index) => {
                return (
                  <li key={index} className={item.cName}>
                    <a to={item.path}>
                      {item.icon}
                      <span>{item.title}</span>
                    </a>
                  </li>
                );
              })}

              <div className="gpt3__navbar-sign">
                <p>Sign in</p>
                <button type="button">Sign up</button>
              </div>
            </ul>
          </nav>
          <div className="gpt3__navbar-links_logo ">
            <img src={logo} />
          </div>
        </IconContext.Provider>
      </div>
    </>
  );
}

export default Navbar;
