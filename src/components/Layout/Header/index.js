import React from "react";
import { Link } from "react-router-dom";
import { phoneImg, questionImg } from "../../../asserts/images";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";


import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

import "./style.css";

import { logo } from "../../../asserts/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-regular-svg-icons";

const Header = () => {
  return (
    <>
      <header className="position-relative">
        <section className="header_navbar sec_padding">
          <div className="container-fluid">
            <Navbar expand="lg" className="">
              <Container fluid className="justify-content-between">
                <Navbar.Brand as={Link} to="/" className="header-logo">
                  <img src={logo} alt="" />
                </Navbar.Brand>
                {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
                <Navbar id="basic-navbar-nav">
                  <Nav className="justify-content-end w-100">
                    <a href="tel:(855) 288-8770" className="text-with-icon">
                      <FontAwesomeIcon icon={faPhone} style={{ color: '#ed0742' }} />
                      <p className="navbar_para">(855) 288-8770</p>
                      {/* <p className="navbar_para_bottom">Consultation</p> */}
                    </a>
                    <a href="javascript:;" className="text-with-icon">
                      <FontAwesomeIcon icon={faComment} style={{ color: '#ed0742' }} />
                      <p className="navbar_para">Live Chat</p>
                      {/* <p className="navbar_para_bottom">Consultation</p> */}
                    </a>
                  </Nav>
                </Navbar>
              </Container>
            </Navbar>
          </div>
        </section>
      </header>
    </>
  );
};

export default Header;
