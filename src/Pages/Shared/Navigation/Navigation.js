import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import useAuth from "../../../hooks/useAuth.";
import chair from "../../../img/chair-logo_x44.png";
import "./Navigation.css";
const Navigation = () => {
  const { users, logOut } = useAuth();
  return (
    <Navbar className="nav" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand as={HashLink} to="/home">
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
            <span>{users?.displayName}</span>
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
            <button onClick={logOut} className="btn btn-danger">
              Logout
            </button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
