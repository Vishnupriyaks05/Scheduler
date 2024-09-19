import React from "react";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import logo from "../images/kenndylog.png"; // Ensure the logo path is correct
// import '../css/Sidebar.css'
const Sidebar = () => {
  return (
    <Container fluid style={{backgroundColor: "rgba(210, 211, 288, 0.3)"}} >
      <Row>
        <Col md={3} className="sidebar vh-100  p-1">
          {/* Logo */}
          <div className="text-center mb-4">
            <img src={logo} alt="Logo" className="img-fluid" />
          </div>

          {/* Navigation Links */}
          <ListGroup variant="flush">
            <ListGroup.Item action href="./manager">
              Manager CA
            </ListGroup.Item>
            <ListGroup.Item action href="">
              Manage Schedules
            </ListGroup.Item>
            <ListGroup.Item action href="/callout">
              Manage Call Out Shifts
            </ListGroup.Item>
            <ListGroup.Item action href="./swaps">
              Manage Swaps
            </ListGroup.Item>
            <ListGroup.Item action href="./leave">
              Manage Leave
            </ListGroup.Item>
            <ListGroup.Item action href="./holydays">
              Manage Holidays
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={9}>
          {/* Right side for main content */}
          {/* Add your main content or dashboard elements here */}
        </Col>
      </Row>
    </Container>
  );
};

export default Sidebar;
