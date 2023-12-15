import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import {Form} from "react-bootstrap"
import { Button } from 'react-bootstrap';


const Helpsupport = () => {


    
  return (
    <div className='container'>
    <div className='d-md-flex'>

    <div className='help-right order-md-1'>
    <div className='inner-help-right'>
    <h4>Request Help</h4>
    <p>Get Support for your Problem just by
    <br/>
    filling up the form below</p>

    <div className='text-start'>
    <Form className="p-2 p-lg-5 ">
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
    <Form.Group className="mb-2">
    <Form.Label>Enter your problem here</Form.Label>
    <Form.Control
    as="textarea"
    placeholder="Enter description"
    style={{ height: '150px' }}
  />
  </Form.Group>
  </Form>
  <div className='text-center'>
  <Button  >
  Submit 
  </Button>    
  </div>
    </div>
    </div>
    </div>
    <div className='help-left text-left p-3 order-md-0'>
          <h5>Help & Support</h5>
          <p>Frequently Asked Questions (FAQ'S)</p>

<Accordion  defaultActiveKey="0">
<div className='mt-3'>
<Accordion.Item eventKey="0">
  <Accordion.Header>Accordion Item #1</Accordion.Header>
  <Accordion.Body>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
   
  </Accordion.Body>
</Accordion.Item>
</div>
<div className='mt-3'>
<Accordion.Item eventKey="1">
  <Accordion.Header>Accordion Item #2</Accordion.Header>
  <Accordion.Body>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
  </Accordion.Body>
</Accordion.Item>
</div>
<div className='mt-3'>
<Accordion.Item eventKey="2">
  <Accordion.Header>Accordion Item #3</Accordion.Header>
  <Accordion.Body>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
  </Accordion.Body>
</Accordion.Item>
</div>

<div className='mt-3'>
<Accordion.Item eventKey="3">
  <Accordion.Header>Accordion Item #4</Accordion.Header>
  <Accordion.Body>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
  </Accordion.Body>
</Accordion.Item>
</div>

<div className='mt-3'>
<Accordion.Item eventKey="4">
  <Accordion.Header>Accordion Item #5</Accordion.Header>
  <Accordion.Body>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
  </Accordion.Body>
</Accordion.Item>
</div>
<div className='mt-3'>
<Accordion.Item eventKey="5">
  <Accordion.Header>Accordion Item #6</Accordion.Header>
  <Accordion.Body>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
  </Accordion.Body>
</Accordion.Item>
</div>
<div className='mt-3'>
<Accordion.Item eventKey="6">
  <Accordion.Header>Accordion Item #7</Accordion.Header>
  <Accordion.Body>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
  </Accordion.Body>
</Accordion.Item>
</div>
<div className='mt-3'>
<Accordion.Item eventKey="7">
  <Accordion.Header>Accordion Item #8</Accordion.Header>
  <Accordion.Body>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
  </Accordion.Body>
</Accordion.Item>
</div>
</Accordion>

            
                  </div>

      
      </div>
    </div>
  );
};

export default Helpsupport;
