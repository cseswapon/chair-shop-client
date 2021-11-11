<Navbar bg="dark" variant="dark" expand={false}>
        <Container>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Brand>Dashboard</Navbar.Brand>
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="start"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">
                Chair Shop Dashboard
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                {/* <ul>
                  <li>
                    <Link to={`${url}/myorder`}>My Order</Link>
                  </li>
                  <li>
                    <Link to={`${url}/review`}>Review</Link>
                  </li>
                  <li>
                    <Link to={`${url}/pay`}>Payment</Link>
                  </li>
                  <li>
                    <Link to={`${url}/manage`}>Manage</Link>
                  </li>
                  <li>
                    <Link to={`${url}/manageall`}>Manage All</Link>
                  </li>
                  <li>
                    <Link to={`${url}/addnew`}>Add New</Link>
                  </li>
                  <li>
                    <Link to={`${url}/admin`}>Make Admin</Link>
                  </li>
                </ul> */}
                <Nav.Link as={Link} to={`${url}/myorder`}>
                  My Orders
                </Nav.Link>
                <Nav.Link as={Link} to={`${url}/review`}>
                  Review
                </Nav.Link>
                <Nav.Link as={Link} to={`${url}/pay`}>
                  Payment
                </Nav.Link>
                <Nav.Link as={Link} to={`${url}/manage`}>
                  Mange
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
      <Switch>
        <Route exact path={`${path}/myorder`}>
          <Myorder></Myorder>
        </Route>
        <Route path={`${path}/review`}>
          <ReviewControl></ReviewControl>
        </Route>
        <Route path={`${path}/pay`}>
          <Pay></Pay>
        </Route>
        <Route path={`${path}/manage`}>
          <MangeProduct></MangeProduct>
        </Route>
        <Route path={`${path}/manageall`}>
          <ManageAll></ManageAll>
        </Route>
        <Route path={`${path}/addnew`}>
          <AddProduct></AddProduct>
        </Route>
        <Route path={`${path}/admin`}>
          <MakeAdmin></MakeAdmin>
        </Route>
      </Switch>