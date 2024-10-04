import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  FaAngleDown,
  FaTools,
  FaVoteYea,
  FaClipboard,
  FaCar,
  FaMusic,
  FaUsers,
} from 'react-icons/fa'; // Importing the needed icons

export const Navigation = ({ features }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleCall = () => {
    window.open('tel:+1800 2575 2244'); // Your phone number
  };

  // Handle click outside the dropdown to close it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
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
            <div
              style={{ position: 'relative', textAlign: 'center' }}
              onContextMenu={(e) => {
                e.preventDefault();
                alert('Due to privacy reasons, you are not allowed to download this logo.');
              }}
            >
              <img
                src="/img/portfolio/logo.png"
                alt="Logo"
                style={{ height: '120px', width: 'auto', paddingTop: '10px' }}
                draggable="false"
              />
              <div className="logo"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  backgroundColor: 'transparent',
                }}
              ></div>
            </div>

            Bhawan Care
          </Link>
        </div>

        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav navbar-right">
            <li>
              <Link to="/#about" className="page-scroll">
                About Us
              </Link>
            </li>
            <li className="dropdown-feature" ref={dropdownRef}>
              <a className="page-scroll" onClick={toggleDropdown} style={{ cursor: 'pointer' }}>
                <span style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                  Features
                  <FaAngleDown
                    className="custom-arrow"
                    style={{ cursor: 'pointer', fontSize: "20px", marginLeft: '5px', color: "#E8A905" }}
                  />
                </span>
              </a>
              {isDropdownOpen && (
                <div className="dropdown-container">
                  <div className="dropdown-content">
                    <div className="dropdown-column">
                      <div style={{ padding: 15, backgroundColor: "#F0F0F0	", borderRadius: 15, height: 200 }}>
                        <img src="../img/header/small4.jpg" alt="description of image" style={{ width: 2000, height: 120, objectFit: "cover" }} />
                        <h4>Management & Services</h4>
                      </div>
                      <div>
                        <div className="featureIcon">
                          <FaTools className="iconStyle" />
                          <Link to="#">Maintenance Charge</Link>
                        </div>

                        <div className="featureIcon">
                          <FaVoteYea className="iconStyle" />
                          <Link to="#">Election</Link>
                        </div>
                        <div className="featureIcon">
                          <FaClipboard className="iconStyle" />
                          <Link to="#">Service Request</Link>
                        </div>
                        <div className="featureIcon">
                          <FaCar className="iconStyle" />
                          <Link to="#">Garage Rent</Link>
                        </div>
                        <div className="featureIcon">
                          <FaMusic className="iconStyle" />
                          <Link to="#">Festival</Link>
                        </div>
                        <div className="featureIcon">
                          <FaUsers className="iconStyle" />
                          <Link to="#">Meeting Arrangement</Link>
                        </div>
                        <div className="featureIcon">
                          <FaClipboard className="iconStyle" />
                          <Link to="#">Collection & Expenses</Link>
                        </div>
                        <div className="featureIcon">
                          <FaClipboard className="iconStyle" />
                          <Link to="#">Ladies Club</Link>
                        </div>
                        <div className="featureIcon">
                          <FaClipboard className="iconStyle" />
                          <Link to="#">Security Gate</Link>
                        </div>
                        <div className="featureIcon">
                          <FaClipboard className="iconStyle" />
                          <Link to="#">Fun2shh Chat</Link>
                        </div>
                        <div className="featureIcon">
                          <FaClipboard className="iconStyle" />
                          <Link to="#">Sent/Rent</Link>
                        </div>
                      </div>
                    </div>
                    <div className="dropdown-column with-line">
                      <div style={{ padding: 15, backgroundColor: "#F0F0F0	", borderRadius: 15, height: 200 }}>
                        <img src="../img/header/small5.jpg" alt="description of image" style={{ width: 2000, height: 120, objectFit: "cover" }} />
                        <h4>Society Information</h4>
                      </div>
                      <Link to="#">Notice Board</Link>
                      <Link to="#">Emergency Contacts</Link>
                      <Link to="#">External workers</Link>
                      <Link to="#">Laundry</Link>
                      <Link to="#">Corpus Fund</Link>
                      <Link to="#">Local Programs</Link>
                      <Link to="#">Society Information</Link>
                      <Link to="#">Society Rule</Link>
                      <Link to="#">Internal Worker</Link>
                      <Link to="#">Intercom Details</Link>
                      <Link to="#">Holidays</Link>
                      <Link to="#">Society Members History</Link>
                      <Link to="#">Society Bank Details</Link>
                    </div>

                  </div>
                </div>
              )}
            </li>
            <li>
              <Link to="/#app" className="page-scroll">
                Download App
              </Link>
            </li>
            <li>
              <Link to="/#contact" className="page-scroll">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/#" className="page-scroll" onClick={handleCall}>
              +1800 2575 2244
              </Link>
             
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
