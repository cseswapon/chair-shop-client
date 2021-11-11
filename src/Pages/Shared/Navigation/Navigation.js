import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import chair from "../../../img/chair-logo_x44.png";
import "./Navigation.css";
const Navigation = () => {
  return (
    <Navbar className="nav" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt="logo"
            src={chair}
            height="30"
            title="Chair Shop"
            className="d-inline-block align-top"
          />{" "}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto nav-section">
            <NavLink
              to="/home"
              activeStyle={{
                fontWeight: "bold",
                color: "yellow",
                borderBottom: "2px solid yellow",
              }}
            >
              Home
            </NavLink>
            <NavLink
              to="/explore"
              activeStyle={{
                fontWeight: "bold",
                color: "yellow",
                borderBottom: "2px solid yellow",
              }}
            >
              Explore
            </NavLink>
            <NavLink
              to="/dashboard"
              activeStyle={{
                fontWeight: "bold",
                color: "yellow",
                borderBottom: "2px solid yellow",
              }}
            >
              Dashboard
            </NavLink>
            <NavLink
              to="/login"
              className="login-system"
              activeStyle={{
                fontWeight: "bold",
                color: "yellow",
              }}
            >
              Login
            </NavLink>
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
