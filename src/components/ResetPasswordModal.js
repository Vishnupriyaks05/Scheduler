// src/components/ResetPasswordModal.js

import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";

const ResetPasswordModal = ({ show, handleClose }) => {
  const [mobile, setMobile] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleResetPassword = () => {
    // Retrieve users from localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Find user by mobile number
    const userIndex = users.findIndex((user) => user.mobile === mobile);

    if (userIndex === -1) {
      alert("User not found!");
      return;
    }

    if (newPassword !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Update the user's password
    users[userIndex].password = newPassword;

    // Save updated users back to localStorage
    localStorage.setItem("users", JSON.stringify(users));

    // Clear the input fields
    setMobile("");
    setNewPassword("");
    setConfirmPassword("");

    // Show success alert
    alert("Password reset successfully!");

    // Close the modal
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title style={{ color: "rgb(106, 9, 200)" }}>Reset Password</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          {/* Mobile Number Input for Reset Password */}
          <Form.Group controlId="formResetMobileNumber">
            <Form.Label>Enter your mobile number</Form.Label>
            <Form.Control type="text" placeholder="Enter mobile number" value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              required />
          </Form.Group>

          {/* New Password Input */}
          <Form.Group controlId="formNewPassword">
            <Form.Label>New Password</Form.Label>
            <Form.Control type="password" placeholder="Enter new password" value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required />
          </Form.Group>

          {/* Confirm Password Input */}
          <Form.Group controlId="formConfirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" placeholder="Confirm new password" value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outlined" style={{ color: "rgb(106, 9, 200)" }} onClick={handleClose}>
          Close
        </Button>
        <Button style={{ backgroundColor: "rgb(106, 9, 200)" }} onClick={handleResetPassword}>
          Reset Password
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ResetPasswordModal;
