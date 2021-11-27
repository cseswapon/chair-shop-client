import React, { useEffect } from "react";
import "./DemoDasgboard.css";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import useAuth from "../../../hooks/useAuth.";
import Myorder from "../Myorder/Myorder";
import { HashLink } from "react-router-hash-link";
import ReviewControl from "../ReviewControl/ReviewControl";
import Pay from "../Pay/Pay";
import chair from "../../../../src/img/chair-logo_x44.png";
import ManageAll from "../ManageAll/ManageAll";
import MangeProduct from "../ManageProduct/MangeProduct";
import AddProduct from "../AddProduct/AddProduct";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import DashboardPrivate from "../DasboardPrivate/DashboardPrivate";
import welcome from "../../../img/Welcome-cuate.svg";
import { Container, Nav, Navbar } from "react-bootstrap";
const DemoDasgboard = () => {
  useEffect(() => {
    document.title = "Chair Shop | Dashboard";
  }, []);
  let { path, url } = useRouteMatch();
  const { users, logOut, admin } = useAuth();
  return (
    <div className="overflow-hidden">
      <div className="row">
        <div className="bg-menu col-md-2 d-lg-block d-lg-flex d-none flex-column justify-content-between position-fixed py-4 vh-100 navbar navbar-expand-lg">
          <div className="list-items">
            <ul>
              <li>
                <Link to="/home">
                  <img
                    alt="logo"
                    src={chair}
                    height="30"
                    title="Chair Shop"
                    className="align-top bg-warning rounded"
                  />{" "}
                </Link>
              </li>
              {!admin ? (
                <span>
                  <li>
                    <Link to={`${url}/myorder`}>My Order</Link>
                  </li>
                  <li>
                    <Link to={`${url}/review`}>Review</Link>
                  </li>
                  <li>
                    <Link to={`${url}/payment`}>Payment</Link>
                  </li>
                </span>
              ) : (
                <span>
                  <li>
                    <Link to={`${url}/manageall`}>Manage Orders</Link>
                  </li>
                  <li>
                    <Link to={`${url}/manageproduct`}>Manage Product</Link>
                  </li>
                  <li>
                    <Link to={`${url}/addnew`}>Add Product</Link>
                  </li>
                  <li>
                    <Link to={`${url}/admin`}>Make Admin</Link>
                  </li>
                </span>
              )}
            </ul>
          </div>
          <div className="mt-2 text-center px-1">
            {/* <span className="text-white  border rounded me-2">
              <i className="fas fa-user p-2 "></i>
              <small>{users?.displayName}</small>
            </span> */}
            <span
              style={{ cursor: "pointer" }}
              className="text-white border p-2 rounded log-ho"
              onClick={logOut}
            >
              <small>Logout</small> <i className="fas fa-sign-out-alt p-2"></i>
            </span>
          </div>
        </div>
      </div>
      <div className="d-block d-lg-none d-md-none">
        <Navbar className="bg-menu" expand="lg">
          <Container fluid>
            <Navbar.Brand as={HashLink} to="/home">
              <img
                alt="logo"
                src={chair}
                height="30"
                title="Chair Shop"
                className="d-inline-block align-top bg-warning rounded"
              />{" "}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="ms-auto my-2 my-lg-0 text-center"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                {!admin ? (
                  <span>
                    {/* normal user */}
                    <Nav.Link
                      className="text-white"
                      as={Link}
                      to={`${url}/myorder`}
                    >
                      My Order
                    </Nav.Link>
                    {/* normal user */}
                    <Nav.Link
                      className="text-white"
                      as={Link}
                      to={`${url}/review`}
                    >
                      Review
                    </Nav.Link>
                    {/* normal user */}
                    <Nav.Link
                      className="text-white"
                      as={Link}
                      to={`${url}/payment`}
                    >
                      Payment
                    </Nav.Link>
                  </span>
                ) : (
                  <span>
                    {/* admin */}
                    <Nav.Link
                      className="text-white"
                      as={Link}
                      to={`${url}/manageall`}
                    >
                      Manage Orders
                    </Nav.Link>
                    {/* admin */}
                    <Nav.Link
                      className="text-white"
                      as={Link}
                      to={`${url}/manageproduct`}
                    >
                      Manage Product
                    </Nav.Link>
                    {/* admin */}
                    <Nav.Link
                      className="text-white"
                      as={Link}
                      to={`${url}/addnew`}
                    >
                      Add Product
                    </Nav.Link>
                    {/* admin */}
                    <Nav.Link
                      className="text-white"
                      as={Link}
                      to={`${url}/admin`}
                    >
                      Make Admin
                    </Nav.Link>
                  </span>
                )}
                <span
                  style={{ cursor: "pointer" }}
                  className="text-white border p-2 rounded log-ho"
                  onClick={logOut}
                >
                  <small>Logout</small>{" "}
                  <i className="fas fa-sign-out-alt p-2"></i>
                </span>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-10 mx-auto w-75">
          <Switch>
            <Route exact path={path}>
              <div className="text-center">
                <img className="w-75" src={welcome} alt="not found" />
              </div>
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
      </div>
    </div>
  );
};

export default DemoDasgboard;
