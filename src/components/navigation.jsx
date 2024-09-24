import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const Navigation = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = (event) => {
    event.preventDefault();
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleHashClick = (hash) => {
    navigate("/"); // Navigate to the base route first
    setTimeout(() => {
      window.location.hash = hash; // After navigating, set the hash
    }, 0); // Timeout to ensure routing works
  };

  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <Link className="navbar-brand page-scroll" to="/#page-top">
            <img
              src="/img/portfolio/logo.png"
              alt="Logo"
              style={{ height: '70px' }}
            />
            Bhawan Care
          </Link>
        </div>

        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#features" className="page-scroll">
                Features
                <span onClick={toggleDropdown} style={{ marginLeft: '5px', cursor: 'pointer' }}>
                  ▼
                </span>
              </a>
              {isDropdownOpen && (
                <ul className="dropdown-menu">
                  <li><a href="#feature1" className="page-scroll">Feature 1</a></li>
                  <li><a href="#feature2" className="page-scroll">Feature 2</a></li>
                  <li><a href="#feature3" className="page-scroll">Feature 3</a></li>
                </ul>
              )}
            </li>
            <li>
              <a href="#about" className="page-scroll" onClick={(e) => { e.preventDefault(); handleHashClick("#about"); }}>
                About
              </a>
            </li>
            <li>
              <a href="#services" className="page-scroll" onClick={(e) => { e.preventDefault(); handleHashClick("#services"); }}>
                Services
              </a>
            </li>
            <li>
              <a href="#team" className="page-scroll" onClick={(e) => { e.preventDefault(); handleHashClick("#team"); }}>
                Team
              </a>
            </li>
            <li>
              <a href="#app" className="page-scroll" onClick={(e) => { e.preventDefault(); handleHashClick("#app"); }}>
                Download App
              </a>
            </li>
            <li>
              <a href="#contact" className="page-scroll" onClick={(e) => { e.preventDefault(); handleHashClick("#contact"); }}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
