import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import { Container, Nav, Navbar, Offcanvas, Button } from "react-bootstrap";
import DashboardHome from "../DashboardHome/DashboardHome";
import Myorder from "../Myorder/Myorder";
import ReviewControl from "../ReviewControl/ReviewControl";
import Pay from "../Pay/Pay";
import { HashLink } from "react-router-hash-link";

const Dashboard = () => {
  let { path, url } = useRouteMatch();
  return (
    <>
      <Navbar bg="light" expand={false}>
        <Container>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Brand as={HashLink} to="/home">
            Navbar Offcanvas
          </Navbar.Brand>
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="start"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">
                Offcanvas
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link as={Link} to={`${url}/myorder`}>
                  My Order
                </Nav.Link>
                <Nav.Link as={Link} to={`${url}/review`}>
                  review
                </Nav.Link>
                <Nav.Link as={Link} to={`${url}/pay`}>
                  Payment
                </Nav.Link>
              </Nav>

              <Button variant="outline-success">Search</Button>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
      <div className="container">
        <Switch>
          <Route exact path={path}>
            <DashboardHome></DashboardHome>
          </Route>
          <Route path={`${path}/myorder`}>
            <Myorder></Myorder>
          </Route>
          <Route path={`${path}/review`}>
            <ReviewControl></ReviewControl>
          </Route>
          <Route path={`${path}/pay`}>
            <Pay></Pay>
          </Route>
        </Switch>
      </div>
    </>
  );
};

export default Dashboard;
