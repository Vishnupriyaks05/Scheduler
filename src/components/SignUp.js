// src/components/SignUp.js

import React, { useState } from "react";
import { Button, Container, Form, Row, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import logo from "../images/kenndylog.png";
import ImageSection from "./ImageSection"; // Import the image component

const SignUp = () => {
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [schedule, setSchedule] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();

    // Retrieve users from localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if user already exists
    const userExists = users.some((user) => user.mobile === mobile);

    if (userExists) {
      alert("User already exists!");
    } else if (password !== confirmPassword) {
      alert("Passwords do not match!");
    } else if (!schedule) {
      alert("Please select a scheduler!");
    } else {
      // Add new user to localStorage
      const newUser = { schedule, mobile, password };
      users.push(newUser);
      localStorage.setItem("users", JSON.stringify(users));
      alert("Sign-up successful!");
      navigate("/schedule-manager"); // Redirect to schedle manager
    }
  };

  const handleCancel = () => {
    navigate('/')
  }

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
              Sign Up
            </h4>

            {/* Sign In Form */}
            <Form style={{ width: "300px" }} onSubmit={handleSignUp}>
              {/* Scheduler Dropdown */}
              <Form.Group controlId="formScheduler">
                <Form.Control
                  as="select"
                  value={schedule}
                  onChange={(e) => setSchedule(e.target.value)} // Fix: Update the state when selecting an option
                  required
                >
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
                  style={{ marginTop: "15px" }}
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  required
                />
              </Form.Group>

              {/* Password Input */}
              <Form.Group controlId="formPassword">
                <Form.Control
                  type="password"
                  placeholder="Password"
                  style={{ marginTop: "15px" }}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </Form.Group>

              {/* confirm password */}
              <Form.Group controlId="formConfirmPassword">
                <Form.Control
                  type="password"
                  placeholder="Confirm Password"
                  style={{ marginTop: "15px" }}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </Form.Group>

              <div
                className="btn justify-content-center align-items-center"
                style={{ marginTop: "15px" }}
              >
                {/* Cancel Button */}
                <Button
                  variant="outline-secondary"
                  type="button"
                  className="mt-2"
                  style={{ color: "rgb(106, 9, 200)" }}
                  // block
                  onClick={handleCancel}
                >
                  Cancel
                </Button>

                {/* Verify Button */}
                <Button
                  variant="primary"
                  type="submit"
                  className="mt-3"
                  block
                  style={{
                    marginLeft: "85px",
                    marginBottom: "10px",
                    backgroundColor: "rgb(106, 9, 200)",
                  }}
                >
                  Verify
                </Button>
              </div>

              <div>
                <p>
                  Already have an account?{" "}
                  <Link
                    to="/"
                    style={{ fontSize: "14px", color: "rgb(106, 9, 200)" }}
                  >
                    Sign In
                  </Link>{" "}
                </p>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SignUp;
