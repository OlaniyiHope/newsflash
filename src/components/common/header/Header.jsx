import React, { useState } from "react";
import Head from "./Head";
import "./header.css";
import { Link } from "react-router-dom";
import Categories2 from "../../Categories2";

const Header = () => {
  const [navbar, setNavbar] = useState(false);

  return (
    <>
      <Head />
      <header>
        <div className="container paddingSmall">
          <nav>
            <ul
              className={navbar ? "navbar" : "flex"}
              onClick={() => setNavbar(false)}
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li className="yo" style={{ verticalAlign: "middle" }}>
                <Categories2 />
              </li>

              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/memegen">MemeGenerator</Link>
              </li>
            </ul>
            <button className="barIcon" onClick={() => setNavbar(!navbar)}>
              {navbar ? (
                <i className="fa fa-times"></i>
              ) : (
                <i className="fa fa-bars"></i>
              )}
            </button>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
