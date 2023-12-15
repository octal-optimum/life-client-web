import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import MyNavbar from "../Navbar";
import banner from "../../assets/banner.png";
import {
  Accordion,
  Button,
  ButtonGroup,
  Col,
  Form,
  Row,
} from "react-bootstrap";

import { useDispatch } from "react-redux";
import { GetCurrentAffairs, visitorsLogin } from "../../store/slices/Visitor";
import { useEffect } from "react";

const CurrentAffairs = () => {
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [loading, setLoading] = useState("idle");
  // const [buttons, setButtons] = useState();
  const [data, setData] = useState([]);
  const [alertname, setalertName] = useState("");
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));
  const id = user?.data?.id;
  console.log("id", id);
  useEffect(() => {
    dispatch(GetCurrentAffairs(id))
      .unwrap()
      .then((data) => {
        setData(data?.user?.data);
      })
      .catch(({ message }) => {
        // setModalMessage(message);
        // setShowModal(true);
      });
  }, []);

  const handleSelectPlan = (date) => {
    navigate(`/current-affairs/${date.date}`, {
      state: { date: date },
    });
  };

  return (
    <div>
      <MyNavbar />

      <div className="container d-flex justify-content-center mt-5 ">
        <Col lg={8} className="card pb-4 p-4">
          <Accordion defaultActiveKey="0">
            {data?.map((month, index) => (
              <div className="mt-3">
                <Accordion.Item eventKey={index}>
                  <Accordion.Header>{month.monthName}</Accordion.Header>
                  <Accordion.Body>
                    {month.currentAffairsData.map((date) => (
                      <div
                        onClick={() => handleSelectPlan(date)}
                        className="dateCard"
                      >
                        {date?.date?.split("T")[0]}
                      </div>
                    ))}
                  </Accordion.Body>
                </Accordion.Item>
              </div>
            ))}
          </Accordion>
        </Col>
      </div>
    </div>
  );
};

export default CurrentAffairs;
