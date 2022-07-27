import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import Links from "./Links";
// import Links from './Link';
const Header = () => {
  return (
    <>
      <div className="header">
        <Navbar collapseOnSelect expand="lg">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-end nav-menu"
          >
            <Nav className="me-auto font container">
              <Links href="#Home">Home</Links>
              <Links href="#About">About</Links>
              <Links href="#Experience">Experience</Links>
              <Links href="#Skills">Skills</Links>
              <Links href="#Contact">Contact</Links>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </>
  );
};

export default Header;
