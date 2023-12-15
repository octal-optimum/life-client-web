import React from "react";
import { Row, Col } from "react-bootstrap";
import Life from "../assets/LIFE-Logo.png";
import innate from "../assets/innate.png";
import google from "../assets/google.png";
import footerrit from "../assets/footerrit.png";

const Footer = () => {
  return (
    <div id="footer" className="footer-cont">
      <hr style={{ border: "1px solid grey" }} />
      <hr />
      <Row>
        <div className="footer-col1 col-lg-6 ">
          <div>
            <img src={Life} className="life-logo"></img>
            <br />
            <img src={innate} className="innate"></img>
            <br />

            <h5>An adaptive spiral learning module</h5>
            <img src={google} className="google-logo"></img>
          </div>
        </div>
        <div className="footer-col2  col-lg-4">
          <div className="footer-right">
            <img
              src={footerrit}
              style={{ width: "auto", height: "150px", marginTop: "10px" }}
            ></img>
          </div>
        </div>
      </Row>

      <div className="text-primary text-center mt-5">
        © 2023.Octaloptimum.com. All rights reserved
      </div>
    </div>
  );
};

export default Footer;
