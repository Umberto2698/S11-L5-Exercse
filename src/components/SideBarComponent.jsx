import { Button, Col, Container, Form, Nav, Navbar } from "react-bootstrap";
import { HouseDoorFill, BookFill } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import Logo from "../logo/Spotify_Logo.png";
import { useState } from "react";
import { useDispatch } from "react-redux";

const SideBarComponent = () => {
  const [query, setQuery] = useState();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "SEARCH",
      payload: query,
    });
  };

  return (
    <Col xs={2}>
      <Navbar
        expand="md"
        id="sidebar"
        className="fixed-left position-fixed top-0 start-0 end-0 bottom-0  justify-content-between align-items-start flex-column flex-nowrap p-2"
      >
        <Container className="d-flex flex-column justify-content-between align-items-start flex-nowrap">
          <Navbar.Brand id="brand">
            <img src={Logo} alt="Spotify_Logo" width="131" height="40" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto d-flex flex-column -justify-content-between align-items-start">
              <Nav.Link id="nav-link" className="d-flex align-items-center">
                <HouseDoorFill width={20} height={24}></HouseDoorFill>
                <span className="ms-2">Home</span>
              </Nav.Link>
              <Nav.Link id="nav-link" className="d-flex align-items-center">
                <BookFill width={20} height={24}></BookFill>
                <span className="ms-2">Your Library</span>
              </Nav.Link>
              <Form className="mt-3" onSubmit={(e) => handleSubmit(e)}>
                <div className="d-flex align-items-center justify-content-center mb-2">
                  <Form.Control
                    size="sm"
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search"
                    className="rounded-0 d-inline-block"
                  />
                  <Button variant="outline-secondary" size="sm" type="submit" className="rounded-0" id="button-addon1">
                    GO
                  </Button>
                </div>
              </Form>
            </Nav>
          </Navbar.Collapse>
        </Container>

        <Container className="justify-content-center">
          <div className="nav-btn d-flex flex-column justify-content-between align-items-center ">
            <Button
              size="sm"
              variant="light"
              className="text-black signup-btn border-white py-2 rounded-pill "
              type="button"
            >
              Sign Up
            </Button>
            <Button
              size="sm"
              variant="black"
              className="text-white border-white rounded-pill py-2 login-btn"
              type="button"
            >
              Login
            </Button>
            <div className="d-flex align-items-center justify-content-center">
              <Link id="bottom-link" to="/" className="text-decoration-none">
                Cookie policy&nbsp; |
              </Link>
              <Link id="bottom-link" to="/" className="text-decoration-none">
                &nbsp; Privacy
              </Link>
            </div>
          </div>
        </Container>
      </Navbar>
    </Col>
  );
};

export default SideBarComponent;
