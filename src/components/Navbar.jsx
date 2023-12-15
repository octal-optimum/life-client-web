import React from "react";
import { Container, Nav } from "react-bootstrap";
import LIFE from "../assets/LIFE-Logo.png";
import { Link as ScrollLink } from "react-scroll";

const MyNavbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-white custom-navbar ">
      <Container className="pt-2">
        {/* Replace the brand with an image */}
        <ScrollLink className="navbar-brand" href="#home">
          <img
            src={LIFE}
            width="60"
            height="30"
            className="d-inline-block align-top"
            alt="Logo"
          />
        </ScrollLink>

        {/* Move the links to the right */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <ScrollLink
                activeClass="active"
                to="getlifereferral" // Provide the ID of the target section
                spy={true}
                smooth={true}
                offset={-70} // Adjust the offset as needed
                duration={300}
                className="nav-link font-weight-bold text-dark"
                href="#getlifereferral"
              >
                Get life referral
              </ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink
                activeClass="active"
                to="whatislife" // Provide the ID of the target section
                spy={true}
                smooth={true}
                offset={200} // Adjust the offset as needed
                duration={300}
                className="nav-link font-weight-bold text-dark"
                href="#whatislife"
              >
                What is Life?
              </ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink
              activeClass="active"
              to="whyuselife" // Provide the ID of the target section
              spy={true}
              smooth={true}
              offset={20} // Adjust the offset as needed
              duration={300}
                className="nav-link font-weight-bold text-dark"
                href="#whyuselife"
              >
                Why to use Life?
              </ScrollLink>
            </li>
           
            
          </ul>
        </div>
      </Container>

    </nav>
  );
};

export default MyNavbar;
