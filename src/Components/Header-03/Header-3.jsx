import React, { useState } from "react";

import "../Header-03/css/Header-3.css";
import Brakingnews from "../brakingnew/Brakingnews";
import deranalogo from "../Header-03/tv_derana_logo.png";
import Live_button from "../Live_button/Live_button";

import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const TopNav = (props) => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <div>
      <section>
        <div className="row justify-content-center">
          <Brakingnews />
        </div>

        <div className="container-fluid px-md-5">
          <div className="row justify-content-between">
            <div className="col-md-8 order-md-last">
              <div className="row p-3">
                <div className="col-md-6 text-center">
                  <Link to="/">
                    {" "}
                    <img src={deranalogo} />
                  </Link>
                </div>

                <div className="col-md-6 d-md-flex justify-content-end mb-md-0 ">
                  <form action="#" className="searchform order-lg-last">
                    <div className="form-group d-flex">
                      <input
                        type="text"
                        className="form-control pl-3"
                        placeholder="Search"
                      />
                      <button
                        type="submit"
                        placeholder
                        className="form-control search"
                      >
                        <span className="fa fa-search" />
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-md-4 d-flex">
              <div className="social-media">
                <Live_button />
              </div>
            </div>
          </div>
        </div>

        <nav
          className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light"
          id="ftco-navbar"
        >
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#ftco-nav"
              aria-controls="ftco-nav"
              aria-expanded={!isNavCollapsed ? true : false}
              aria-label="Toggle navigation"
              onClick={handleNavCollapse}
            >
              <span className="fa fa-bars" /> Menu
            </button>

            <div
              className={`${isNavCollapsed ? "collapse" : ""} navbar-collapse`}
              id="ftco-nav"
            >
              <ul className="navbar-nav m-auto">
                <li className="nav-item active">
                  <div className="nav-link">
                    <Link to="/">Home</Link>
                  </div>
                </li>
                <li className="nav-item ">
                  <Link to="/programmerShedule" className="nav-link">
                    Programme schedule
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/dramaEpisodes" className="nav-link">
                    Drama Episodes
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/Contactus" className="nav-link">
                    {" "}
                    Contact us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/#" className="nav-link">
                    {" "}
                    Gallery
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/#" className="nav-link">
                    {" "}
                    Reality shows
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/#" className="nav-link">
                    {" "}
                    About us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/#" className="nav-link">
                    {" "}
                    TV Derana-Srilanka
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section>
    </div>
  );
};

export default TopNav;
