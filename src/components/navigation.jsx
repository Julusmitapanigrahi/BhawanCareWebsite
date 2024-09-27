import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaAngleDown, FaAngleRight } from 'react-icons/fa';

export const Navigation = ({ setActiveSection, features }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeFeature, setActiveFeature] = useState(null);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    setActiveFeature(null);
  };

  const toggleSubDropdown = (feature) => {
    setActiveFeature(activeFeature === feature ? null : feature);
  };

  // Handle click outside the dropdown to close it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
        setActiveFeature(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
          <Link className="navbar-brand page-scroll" to="/#page-top" onClick={() => setActiveSection('home')}>
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
              <Link to="/#about" className="page-scroll" onClick={() => setActiveSection('about')}>
                About Us
              </Link>
            </li>

            <li>
              <Link to="/#services" className="page-scroll" onClick={() => setActiveSection('services')}>
                Interface
              </Link>
            </li>
            <li className="dropdown-feature" ref={dropdownRef}>
              <a className="page-scroll" onClick={toggleDropdown} style={{ cursor: 'pointer' }}>
                <span href="#" style={{ display: 'flex', alignItems: 'center' }}>
                  Features
                  <FaAngleDown
                    className="custom-arrow"
                    style={{ cursor: 'pointer', fontSize: "20px", marginLeft: '5px', color: "#E8A905" }}
                  />
                </span>
              </a>
              {isDropdownOpen && (
                <ul className="dropdown-menu">
                  {features.map((feature, index) => (
                    <li key={index}>
                      <span style={{ display: 'flex', alignItems: 'center' }}>
                        <a href="#" className="page-scroll dropdown-item" onClick={() => toggleSubDropdown(feature.name)} >
                          {feature.name}
                        </a>
                        <FaAngleRight
                          className="custom-arrow"
                          style={{ cursor: 'pointer', fontSize: "18px", marginLeft: '5px', color: "#E8A905" }}
                        />
                      </span>
                      {activeFeature === feature.name && (
                        <ul className="sub-dropdown">
                          {feature.subFeatures.map((subFeature, i) => (
                            <li key={i}>
                              {/* <Link to={`/#${subFeature.replace(/\s+/g, '-').toLowerCase()}`} className="page-scroll dropdown-item" onClick={() => setActiveSection(subFeature)}>
                                {subFeature}
                              </Link> */}
                              <a href="#features" className="page-scroll dropdown-item">
                                {subFeature}
                              </a>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <li>
              <Link to="/#app" className="page-scroll" onClick={() => setActiveSection('app')}>
                Download App
              </Link>
            </li>
            <li>
              <Link to="/#contact" className="page-scroll" onClick={() => setActiveSection('contact')}>
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
