import React from "react";
import Accordion from "react-bootstrap/Accordion";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useEffect } from "react";
import { GeuserFaqs } from "../store/slices/Visitor";
import { useState } from "react";
import { useDispatch } from "react-redux";

const Helpsupport = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);

  useEffect(() => {
    dispatch(GeuserFaqs())
      .unwrap()
      .then((data) => {
        setData(data.user.data);
      })
      .catch(({ message }) => {
        // setModalMessage(message);
        // setShowModal(true);
      });
  }, []);

  return (
    <>
    
    <hr/>
    <div className="container">
  
      <div className="d-md-flex">
        <div className="help-right order-md-1">
          <div className="inner-help-right">
            <h4>Request Help</h4>
            <p>
              Get Support for your Problem just by
              <br />
              filling up the form below
            </p>

            <div className="text-start">
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
                    style={{ height: "150px" }}
                  />
                </Form.Group>
              </Form>
              <div className="text-center">
                <Button>Submit</Button>
              </div>
            </div>
          </div>
        </div>
        <div className="help-left text-left p-3 order-md-0">
        <div></div>
          <h5>Help & Support</h5>
          <p>Frequently Asked Questions (FAQ'S)</p>
            <div  className="help-lef-inner">
          <Accordion defaultActiveKey="0">
            {data.map((faq,index) => (
              <div className="mt-3">
                <Accordion.Item eventKey={index}>
                  <Accordion.Header>{faq.question}</Accordion.Header>
                  <Accordion.Body>{faq.answer}</Accordion.Body>
                </Accordion.Item>
              </div>
            ))}

           

            
          </Accordion>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Helpsupport;
