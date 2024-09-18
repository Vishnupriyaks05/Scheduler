import React from 'react';
import { Navbar, Nav, Dropdown } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa'; // Profile icon
// import '../css/NavBar.css'; // Assuming custom CSS for navbar styling

const NavBar = () => {
  return (
    <Navbar bg="violet" expand="lg" className="navbar-custom" style={{ backgroundColor: 'rgb(106, 9, 160)' }}>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav className="ml-auto">
          <Dropdown>
            <Dropdown.Toggle variant="link" id="dropdown-profile">
              <FaUserCircle size={30} style={{ color: "white" }} />
            </Dropdown.Toggle>

            <Dropdown.Menu align="end">
              <Dropdown.Item href="#profile">Profile</Dropdown.Item>
              <Dropdown.Item href="/" onClick={() => alert("Logging out...")}>
                Logout
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
