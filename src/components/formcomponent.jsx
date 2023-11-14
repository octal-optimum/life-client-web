import React from "react";
import LIFE from "../assets/LIFE-Logo.png";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";

const Formcomponent = () => {



    
  return (
    <div>
      
     
          <div className="text-center">
            <h3>
              Join <span style={{ color: "violet" }}>L</span>
              <span style={{ color: "blue" }}>I</span>
              <span style={{ color: "green" }}>F</span>
              <span style={{ color: "orange" }}>E</span> App
            </h3>
            <p>Get Referral Link by fill up the form</p>
          </div>

          <Form className="p-5">
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

  );
};

export default Formcomponent;
