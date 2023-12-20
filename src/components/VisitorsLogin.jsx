import React, { useState } from "react";
import { Form, Button, Col,Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import MyNavbar from "./Navbar";
import banner from "../assets/banner.png";
import { useDispatch } from "react-redux";
import { GetCurrentAffairs, visitorsLogin } from "../store/slices/Visitor";
import { useEffect } from "react";

const VisitorsLogin = () => {
  const navigate = useNavigate("");
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [loading, setLoading] = useState("idle");
  // const [buttons, setButtons] = useState();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNo, setmobileNo] = useState("");
  const [qualification, setQualification] = useState("");
  const [alertname, setalertName] = useState("");
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();

  const user = JSON.parse(localStorage.getItem("user"));
  const id = user?.data?.id;
  console.log("id", id);
  useEffect(() => {
    dispatch(GetCurrentAffairs(id))
      .unwrap()
      .then((data) => {
        console.log(data);
      })
      .catch(({ message }) => {
        // setModalMessage(message);
        // setShowModal(true);
      });
  }, []);

  const handleChange = (e) => {
    const validationErrors = { ...errors };

    let { name, value } = e.target;
    switch (name) {
      case "name":
        setName(value);
        validationErrors[name] =
          value.trim() === "" || !isValidName(value)
            ? "Enter a valid name"
            : "";
        if (value.trim() !== "" && isValidEmail(value)) {
          validationErrors[name] = "";
        }

        break;
      case "email":
        setEmail(value);
        validationErrors[name] =
          value.trim() === "" || !isValidEmail(value)
            ? "Enter a valid email"
            : "";
        if (value.trim() !== "" && isValidEmail(value)) {
          validationErrors[name] = "";
        }
        break;

      case "mobileNo":
        setmobileNo(value);
        if (value.trim() === "") {
          validationErrors[name] = "Please enter a valid mobile number";
        } else if (!/^\d{10}$/.test(value.trim())) {
          validationErrors[name] = "Mobile number should be exactly 10 digits";
        } else {
          delete validationErrors[name];
        }
        break;
      case "qualification":
        setQualification(value);
        break;
      default:
        break;
    }
    setErrors(validationErrors);
  };

  const isValidName = (fullName) => {
    return /^(?!\d+$)[a-zA-Z][a-zA-Z0-9 ]{3,}$/.test(fullName);
  };
  const isValidmobile = (mobileNumber) => {
    return /^[0-9]{10}$/.test(mobileNumber);
  };

  const isValidEmail = (email) => {
    // Add your email validation logic here
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  async function addData(e) {
    e.preventDefault();
    const validationErrors = {};
    if (!email) {
      validationErrors.email = "Please enter your email";
    } else if (!isValidEmail(email)) {
      validationErrors.email = "Please enter a valid email";
    }
    if (!name) {
      validationErrors.name = "Please enter your name";
    } else if (!isValidName(name)) {
      validationErrors.name = "Name must be atleast 3 characters";
    }
    if (!mobileNo) {
      validationErrors.mobileNo = "Please enter your mbile number";
    } else if (!isValidmobile(mobileNo)) {
      validationErrors.mobileNo = "Mobile number should be exactly 10 digits";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      // console.log(validationErrors);

      return;
    } else {
      setLoading("loading");
      setButtonDisabled((prevState) => !prevState);
      setTimeout(() => {
        setButtonDisabled((prevState) => !prevState);
      }, 4000);
      let status = "active";
      let type = "fulltime";
      let item = {
        name: name,
        mobileNo: parseInt(mobileNo),
        email: email,
        qualification: qualification,
      };

      dispatch(visitorsLogin(item))
        .unwrap()
        .then((data) => {
      navigate("/current-affairs")
        })
        .catch(({ message }) => {
          // setModalMessage(message);
          // setShowModal(true);
        });
    }
  }


  return (
    <div>
      <MyNavbar />
      <div
      className="loginpage"
        style={{
          backgroundImage: `url(${""})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container d-flex justify-content-center align-items-center vh-100">
        <Col lg={10} className="card p-5">
        <Row>
          <Col   md={6}>
          
              <img
                src={
                  "https://assets.justinmind.com/wp-content/uploads/2018/10/inspiration-login-forms-list-768x492.png"
                }
                alt="banner"
                style={{ width: "100%",height:"100%" ,borderRadius:"20px"}}
              />
           
          </Col>
          <Col md={6}>

              <Form  className="p-3  mx-auto">
                <Form.Group className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    onChange={handleChange}
                    name="name"
                    type="text"
                    isInvalid={!!errors.name}
                    placeholder="Please enter your name"
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.name}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    onChange={handleChange}
                    name="email"
                    type="text"
                    isInvalid={!!errors.email}
                    placeholder="Enter email here"
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.email}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Phone No</Form.Label>
                  <Form.Control
                    onChange={handleChange}
                    name="mobileNo"
                    isInvalid={!!errors.mobileNo}
                    type="text"
                    placeholder="Enter phone no here"
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.mobileNo}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Qualification</Form.Label>
                  <Form.Control
                    type="text"
                    name="qualification"
                    onChange={handleChange}
                    placeholder="Enter your qualification"
                  />
                </Form.Group>
                <div className="text-center">
                <Button onClick={addData}>Continue</Button>
              </div>
              </Form>

             
            </Col>
            </Row>
          </Col>
        </div>
      </div>
    </div>
  );
};

export default VisitorsLogin;
