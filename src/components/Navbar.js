import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

function NavbarSection() {
  return (
    <Navbar
      expand="lg"
      bg="white"
      variant="light"
      sticky="top"
      className="px-4 px-lg-5"
    >
      <LinkContainer to="/">
        <Navbar.Brand className="d-flex align-items-center">
          <img
            src="img/ico.png"
            width="45"
            height="45"
            className="d-inline-block align-top me-2"
            alt=""
          />
          <div className="ms-2">
            <h1 className="text-primary mb-0">RachCoin</h1>
          </div>
        </Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="navbarCollapse" />
      <Navbar.Collapse id="navbarCollapse">
        <Nav className="ms-auto py-4 py-lg-0">
          <LinkContainer to="/">
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/about">
            <Nav.Link>About</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/service">
            <Nav.Link>Service</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/roadmap">
            <Nav.Link>Roadmap</Nav.Link>
          </LinkContainer>
          <NavDropdown title="Pages" id="basic-nav-dropdown">
            <LinkContainer to="/feature">
              <NavDropdown.Item>Feature</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/token">
              <NavDropdown.Item>Token Sale</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/faq">
              <NavDropdown.Item>FAQs</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/404">
              <NavDropdown.Item>404 Page</NavDropdown.Item>
            </LinkContainer>
          </NavDropdown>
          <LinkContainer to="/contact">
            <Nav.Link>Contact</Nav.Link>
          </LinkContainer>
        </Nav>
        <div className="d-lg-flex align-items-center d-none">
          {/* Social media icons */}
          <a
            href="#"
            className="btn btn-square rounded-circle bg-light text-primary me-2"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            className="btn btn-square rounded-circle bg-light text-primary me-2"
            href="/"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            className="btn btn-square rounded-circle bg-light text-primary"
            href="/"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarSection;
