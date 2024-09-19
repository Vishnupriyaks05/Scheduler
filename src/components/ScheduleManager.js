import React, { useState } from "react";
import Sidebar from "./Sidebar";
import NavBar from "./NavBar";
import "../css/ScheduleManager.css";
import { Button, Col, Dropdown, Row } from "react-bootstrap";
import DatePicker from "react-datepicker"; // Import DatePicker component
import "react-datepicker/dist/react-datepicker.css"; // Import DatePicker styles
import {  startOfMonth, parseISO, isWithinInterval } from "date-fns"; // Helper functions from date-fns
import data from "../json/data.json";

const ScheduleManager = () => {
  // Set default dates: fromDate is the 1st of the current month, and toDate is the current date
  const [fromDate, setFromDate] = useState(startOfMonth(new Date()));
  const [toDate, setToDate] = useState(new Date());

  // Check if data is an array, if not default to an empty array
  const shiftData = Array.isArray(data) ? data : [];

  // Debug log to check if shiftData is being loaded correctly
  console.log("shiftData:", shiftData);

  // Function to filter shift data based on the selected date range
  const filterShiftData = (shifts, from, to) => {
    return shifts.filter((shift) => {
      const shiftDate = parseISO(shift.date); // Convert date string to date object
      return isWithinInterval(shiftDate, { start: from, end: to });
    });
  };

  // Get filtered shift data within the selected date range
  const filteredShiftData = filterShiftData(shiftData, fromDate, toDate);

  const handleGoClick = () => {
    // Handle Go button click filter schedules based on selected dates
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
          {/* ------------------------------------------------------------------------------------------- */}
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
                <Col>
                  <Dropdown>
                    <Dropdown.Toggle
                      variant="outline-secondary"
                      id="dropdown-summary"
                      style={{ width: "50%" }}
                    >
                      Shift Summary
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item>Shift 1</Dropdown.Item>
                      <Dropdown.Item>Shift 2</Dropdown.Item>
                      <Dropdown.Item>Shift 3</Dropdown.Item>
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
                      <Dropdown.Item>Day Shift</Dropdown.Item>
                      <Dropdown.Item>Evning Shift</Dropdown.Item>
                      <Dropdown.Item>Night Shift</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Col>
              </Row>
            </Col>
          </Row>
          {/* --------------------------------------------------------------------------------------------- */}
          {/* Display shift data as cards */}
          <Row style={{ marginTop: "15px" }}>
            {/* Map over the shiftData array */}
            {filteredShiftData.length > 0 ? (
              filteredShiftData.map((shift, index) => (
                <Col md={6} key={index}>
                  <div className="card mb-3">
                    <div
                      className="card-header"
                      style={{ backgroundColor: "rgba(210, 211, 288, 0.3)" }}
                    >
                      {shift.date} - {shift.shiftTiming}
                    </div>
                    <div className="card-body">
                      <p>CA Slots: {shift.caSlots}</p>
                      <p>Light Duty Slots: {shift.lightDutySlots}</p>
                    </div>
                    <div
                      className="card-footer"
                      style={{ backgroundColor: "rgba(210, 211, 288, 0.3)" }}
                    >
                      <span>{shift.status}</span>
                      <Button
                        variant="light"
                        style={{ float: "right", color: "rgb(106, 9, 200)" }}
                      >
                        Details
                      </Button>
                    </div>
                  </div>
                </Col>
              ))
            ) : (
              <Col>
                <div className="no-data">
                  <h5>No data found for the selected date range</h5>
                </div>
              </Col>
            )}
          </Row>
          {/* --------------------------------------------------------------------------------------------- */}
        </div>
      </div>
    </div>
  );
};

export default ScheduleManager;
