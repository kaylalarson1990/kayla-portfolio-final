import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
          <nav>
            <ul className="nav">
              <li>
                <a href="#">
                  <NavLink to="/home" exact activeClassName="active" className="home-page">
                    Kayla Larson
                  </NavLink>
                </a>
              </li>
              <li>
                <a href="#">
                  <NavLink to="/work" exact activeClassName="active" className="head work-page">
                    Work
                  </NavLink>
                </a>
              </li>
              <li>
                <a href="#">
                  <NavLink to="/about" exact activeClassName="active" className="head about-page">
                    About
                  </NavLink>
                </a>
              </li>
            </ul>
          </nav>
        </header>
  );
};

export default Header;
