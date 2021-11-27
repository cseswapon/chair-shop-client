import React, { useEffect } from "react";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import useAuth from "../../../hooks/useAuth.";
import Myorder from "../Myorder/Myorder";
import ReviewControl from "../ReviewControl/ReviewControl";
import Pay from "../Pay/Pay";
import { HashLink } from "react-router-hash-link";
import chair from "../../../../src/img/chair-logo_x44.png";
import ManageAll from "../ManageAll/ManageAll";
import MangeProduct from "../ManageProduct/MangeProduct";
import AddProduct from "../AddProduct/AddProduct";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import DashboardPrivate from "../DasboardPrivate/DashboardPrivate";
const Dashboard = () => {
  useEffect(() => {
    document.title = "Chair Shop | Dashboard";
  }, []);
  let { path, url } = useRouteMatch();
  const { users, logOut, admin } = useAuth();
  // console.log(admin);
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
            // id="offcanvasNavbar"
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
                {!admin ? (
                  <span>
                    {/* normal user */}
                    <Nav.Link as={Link} to={`${url}/myorder`}>
                      My Order
                    </Nav.Link>
                    {/* normal user */}
                    <Nav.Link as={Link} to={`${url}/review`}>
                      Review
                    </Nav.Link>
                    {/* normal user */}
                    <Nav.Link as={Link} to={`${url}/payment`}>
                      Payment
                    </Nav.Link>
                    <hr />
                  </span>
                ) : (
                  <span>
                    {/* admin */}
                    <Nav.Link as={Link} to={`${url}/manageall`}>
                      Manage Orders
                    </Nav.Link>
                    {/* admin */}
                    <Nav.Link as={Link} to={`${url}/manageproduct`}>
                      Manage Product
                    </Nav.Link>
                    {/* admin */}
                    <Nav.Link as={Link} to={`${url}/addnew`}>
                      Add Product
                    </Nav.Link>
                    {/* admin */}
                    <Nav.Link as={Link} to={`${url}/admin`}>
                      Make Admin
                    </Nav.Link>
                    <hr />
                  </span>
                )}
              </Nav>
              <div className="mt-2">
                <span className="text-success fw-bolder me-3 border p-2 rounded">
                  <i className="fas fa-user me-2"></i>
                  {users?.displayName}
                </span>
                <span
                  style={{ cursor: "pointer" }}
                  className="text-danger fw-bolder me-3 border p-2 rounded"
                  onClick={logOut}
                >
                  Logout <i className="fas fa-sign-out-alt"></i>
                </span>
              </div>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
      <div className="container">
        <Switch>
          <Route exact path={path}>
            <h3 className="text-center text-danger my-5">
              Please select a dashboard toggle menu{" "}
            </h3>
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
          <DashboardPrivate exact path={`${path}/manageall`}>
            <ManageAll></ManageAll>
          </DashboardPrivate>
          <DashboardPrivate path={`${path}/manageproduct`}>
            <MangeProduct></MangeProduct>
          </DashboardPrivate>
          <DashboardPrivate path={`${path}/addnew`}>
            <AddProduct></AddProduct>
          </DashboardPrivate>
          <DashboardPrivate path={`${path}/admin`}>
            <MakeAdmin></MakeAdmin>
          </DashboardPrivate>
        </Switch>
      </div>
    </>
  );
};

export default Dashboard;
