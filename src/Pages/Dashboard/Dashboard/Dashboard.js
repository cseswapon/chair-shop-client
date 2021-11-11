import React from "react";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import { Container, Nav, Navbar, Offcanvas, Button } from "react-bootstrap";
import Myorder from "../Myorder/Myorder";
import ReviewControl from "../ReviewControl/ReviewControl";
import Pay from "../Pay/Pay";
import { HashLink } from "react-router-hash-link";
import chair from "../../../../src/img/chair-logo_x44.png";
import ManageAll from "../ManageAll/ManageAll";
import MangeProduct from "../ManageProduct/MangeProduct";
import AddProduct from "../AddProduct/AddProduct";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
const Dashboard = () => {
  let { path, url } = useRouteMatch();
  return (
    <>
      <Navbar bg="dark" variant="dark" expand={false}>
        <Container>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Brand as={HashLink} to="/home">
            <img
              alt="logo"
              src={chair}
              height="30"
              title="Chair Shop"
              className="d-inline-block align-top bg-warning rounded"
            />{" "}
          </Navbar.Brand>
          <Navbar.Offcanvas
            className="text-center"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="start"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel" className="fw-bolder">
                Chair Dashboard
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link as={Link} to={`${url}/myorder`}>
                  My Order
                </Nav.Link>
                <Nav.Link as={Link} to={`${url}/review`}>
                  Review
                </Nav.Link>
                <Nav.Link as={Link} to={`${url}/payment`}>
                  Payment
                </Nav.Link>
                <Nav.Link as={Link} to={`${url}/manageall`}>
                  Manage Orders
                </Nav.Link>
                <Nav.Link as={Link} to={`${url}/manageproduct`}>
                  Manage Product
                </Nav.Link>
                <Nav.Link as={Link} to={`${url}/addnew`}>
                  Add Product
                </Nav.Link>
                <Nav.Link as={Link} to={`${url}/admin`}>
                  Make Admin
                </Nav.Link>
              </Nav>
              <Button variant="outline-danger">Logout</Button>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
      <div className="container">
        <Switch>
          <Route exact path={path}>
            <Myorder></Myorder>
          </Route>
          <Route path={`${path}/myorder`}>
            <Myorder></Myorder>
          </Route>
          <Route path={`${path}/review`}>
            <ReviewControl></ReviewControl>
          </Route>
          <Route path={`${path}/payment`}>
            {/* comming soon */}
            <Pay></Pay>
          </Route>
          <Route path={`${path}/manageall`}>
            <ManageAll></ManageAll>
          </Route>
          <Route path={`${path}/manageproduct`}>
            <MangeProduct></MangeProduct>
          </Route>
          <Route path={`${path}/addnew`}>
            <AddProduct></AddProduct>
          </Route>
          <Route path={`${path}/admin`}>
            <MakeAdmin></MakeAdmin>
          </Route>
        </Switch>
      </div>
    </>
  );
};

export default Dashboard;
