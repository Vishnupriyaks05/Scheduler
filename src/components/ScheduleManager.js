import React, { useState } from "react";
import Sidebar from "./Sidebar";
import NavBar from "./NavBar";
import "../css/ScheduleManager.css";
import { Button, Col, Dropdown, Form, Row } from "react-bootstrap";
import DatePicker from "react-datepicker"; // Import DatePicker component
import "react-datepicker/dist/react-datepicker.css"; // Import DatePicker styles
import { startOfMonth } from "date-fns"; // Helper functions from date-fns

const ScheduleManager = () => {
  // Set default dates: fromDate is the 1st of the current month, and toDate is the current date
  const [fromDate, setFromDate] = useState(startOfMonth(new Date()));
  const [toDate, setToDate] = useState(new Date());

  // State for dropdowns
  const [shiftSummary, setShiftSummary] = useState("");
  const [shiftTiming, setShiftTiming] = useState("");

  const handleGoClick = () => {
    // Handle Go button click, e.g., filter schedules based on selected dates
    console.log("From:", fromDate, "To:", toDate);
  };
  return (
    <div className="layout">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content area */}
      <div className="main-content">
        {/* Navbar at the top */}
        <NavBar />

        {/* Content below the navbar */}
        <div className="content">
          <Row>
            <Col xs={7}>
              <h4 style={{ color: "rgb(106, 9, 200)" }}>Schedule Manager</h4>
            </Col>
            <Col>
              <div>
                <Button
                  style={{
                    backgroundColor: "rgb(106, 9, 200)",
                    marginLeft: "10px",
                  }}
                >
                  Create Shifts
                </Button>
                <Button
                  style={{
                    backgroundColor: "rgb(106, 9, 200)",
                    marginLeft: "10px",
                  }}
                >
                  Notify CA
                </Button>
                <Button
                  style={{
                    backgroundColor: "rgb(106, 9, 200)",
                    marginLeft: "10px",
                  }}
                >
                  View Schedulers
                </Button>
              </div>
            </Col>
          </Row>

          <Row
            style={{
              backgroundColor: "rgba(210, 211, 288, 0.3)",
              marginTop: "20px",
              height: "50px",
              alignItems: "center",
            }}
          >
            <Col>
              <div>
                <label style={{ marginRight: "10px", fontWeight: "bold" }}>
                  From:
                </label>
                <DatePicker
                  selected={fromDate}
                  onChange={(date) => setFromDate(date)}
                  dateFormat="yyyy-MM-dd"
                  className="form-control"
                />
                <label style={{ marginRight: "10px", fontWeight: "bold" }}>
                  To:
                </label>
                <DatePicker
                  selected={toDate}
                  onChange={(date) => setToDate(date)}
                  dateFormat="yyyy-MM-dd"
                  className="form-control"
                />
                <Button
                  style={{
                    backgroundColor: "rgb(106, 9, 200)",
                    marginLeft: "10px",
                  }}
                  onClick={handleGoClick}
                >
                  Go
                </Button>
              </div>
            </Col>

            <Col>
      <Row>
        
        {/* Shift Summary Dropdown */}
        <Col >
          <Dropdown>
            <Dropdown.Toggle
              variant="outline-secondary"
              id="dropdown-summary"
              style={{ width: "50%" }} 
            >
              Shift Summary
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Shift 1</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Shift 3</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>

        {/* Shift Timing Dropdown */}
        <Col>
          <Dropdown>
            <label>Sort By:</label>
            <Dropdown.Toggle
              variant="outline-secondary"
              id="dropdown-timing"
              style={{ width: "50%" }} 
            >
              Shift Timing
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Day Shift</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Night Shift</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>
    </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default ScheduleManager;
