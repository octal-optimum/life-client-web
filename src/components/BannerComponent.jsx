import React, { useEffect, useState } from "react";
import banner from "../assets/banner.png";
import Form from "react-bootstrap/Form";
import { Button, Row, Col } from "react-bootstrap";
import "./banner.css";

const BannerComponent = () => {
  const [isSmallScreen, setScreen] = useState("");
  useEffect(() => {
    const isSmallScreen1 = window.innerWidth <= 767;
    setScreen(isSmallScreen1);
  }, [isSmallScreen]);

  return (
    <div id="getlifereferral">
      <Row className="w-100">
        <Col
      
          lg={{ span: 6, order: 1 }} // Applying ml-20% for large screens
          md={{ span: 12, order: 2 }}
          className="mt-4"
        >
          {" "}
          
            <h5
            className="responsive-heading"
            >
              Prepare for your exams with an
              <br />
              adaptive spiral learning module
              <br />
              Made For Every Learner
            </h5>
          
        </Col>

        <Col
          lg={{ span: 6, order: 2 }} // Applying ml-20% for large screens
          md={{ span: 12, order: 2 }}
        >
          {" "}
          <img
            src={banner}
            alt="Banner"
          className="bannerImage"
          />
        </Col>
      </Row>

      <div className="form-component">
        <div
          style={{
            textAlign: "start",
            backgroundColor: "white",
   
            paddingTop: "20px",
            paddingBottom: "30px",
          }}
        >
          <div className="text-center">
            <h3>
              Join <span style={{ color: "violet" }}>L</span>
              <span style={{ color: "blue" }}>I</span>
              <span style={{ color: "green" }}>F</span>
              <span style={{ color: "orange" }}>E</span> App
            </h3>
            <p>Get Referral Link by fill up the form</p>
          </div>

          <Form className="p-4">
            <Form.Group className="mb-3">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" placeholder="first name" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" placeholder="last name" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email Id</Form.Label>
              <Form.Control type="text" placeholder="Enter email here" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Phone No</Form.Label>
              <Form.Control type="text" placeholder="Enter phone no here" />
            </Form.Group>
          </Form>
          <div className="text-center">
            <Button>Continue</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerComponent;
