// src/components/Login.js

import React, { useState } from "react";
import { Button, Container, Form, Row, Col } from "react-bootstrap";
import logo from "../images/kenndylog.png";
import ResetPasswordModal from "./ResetPasswordModal"; // Import the modal component
import ImageSection from "./ImageSection";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [schedule,setSchedule] = useState("");
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  // Functions to handle modal show/hide
  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const handleLogin = async (e) => {
    e.preventDefault();
  
    // Small delay to simulate async behavior (helps performance in real async tasks)
    await new Promise((resolve) => setTimeout(resolve, 0)); 
  
    // Retrieve users from localStorage (could be done outside the submit handler to reduce delay)
    const users = JSON.parse(localStorage.getItem("users")) || [];
  
    // Check if user exists and password matches
    const user = users.find(
      (user) => user.mobile === mobile && user.password === password && user.schedule === schedule
    );
  
    if (user) {
      alert("Login successful!");
      navigate("/schedule-manager"); // Redirect to schedule manager page
    } else {
      alert("Invalid credentials. Please try again.");
    }
  };

  return (
    <div>
      <Container fluid className="vh-100">
        <Row className="h-100">
          {/* Left Side: Image */}
          <Col md={6} className="p-0">
            <ImageSection />
          </Col>
          {/* Right Side: Form */}
          <Col
            md={6}
            className="d-flex flex-column justify-content-center align-items-center"
          >
            <img src={logo} alt="Logo" />

            {/* Welcome Message */}
            <h2 className="mb-4" style={{ color: "rgb(106, 9, 200)" }}>
              Welcome
            </h2>
            <h4 className="mb-4" style={{ color: "rgb(106, 9, 200)" }}>
              Sign In
            </h4>

            {/* Sign In Form */}
            <Form style={{ width: "300px" }} onSubmit={handleLogin}>
              {/* Scheduler Dropdown */}
              <Form.Group controlId="formScheduler">
                <Form.Control as="select" value={schedule}
                  onChange={(e) => setSchedule(e.target.value)} // Fix: Update the state when selecting an option
                  required>
                  <option value="" disabled>Select Scheduler</option>
                  <option value="scheduler1">Scheduler 1</option>
                  <option value="scheduler2">Scheduler 2</option>
                </Form.Control>
              </Form.Group>

              {/* Mobile Number Input */}
              <Form.Group controlId="formMobileNumber">
                <Form.Control
                  type="text"
                  placeholder="Enter your mobile number"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  required
                  style={{ marginTop: "15px" }}
                />
              </Form.Group>

              {/* Password Input */}
              <Form.Group controlId="formPassword">
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  style={{ marginTop: "15px" }}
                />
              </Form.Group>

              {/* Forgot Password Link */}
              <div className="text-right">
                <a
                  href="#"
                  onClick={handleShow}
                  style={{
                    fontSize: "14px",
                    marginTop: "15px",
                    marginLeft: "90px",
                    color: "rgb(106, 9, 200)",
                  }}
                >
                  Forgot Password?
                </a>
              </div>

              {/* Sign In Button */}
              <Button
                type="submit"
                className="mt-3"
                block
                style={{
                  backgroundColor: "rgb(106, 9, 200)",
                  marginLeft: "30%",
                }}
              >
                Sign In
              </Button>

              {/* Create New Account Link */}
              <div className="text-center mt-3">
                <Link
                  to="/signup"
                  style={{ fontSize: "14px", color: "rgb(106, 9, 200)" }}
                >
                  Create New Account
                </Link>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>

      {/* Modal for Reset Password */}
      <ResetPasswordModal show={showModal} handleClose={handleClose} />
    </div>
  );
};

export default Login;
