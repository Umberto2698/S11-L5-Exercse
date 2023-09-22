import { Button, Col, Container, Form, Nav, Navbar } from "react-bootstrap";
import { HouseDoorFill, BookFill } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import Logo from "../logo/Spotify_Logo.png";
import { useState } from "react";
import { useDispatch } from "react-redux";

const SideBarComponent = () => {
  const [query, setQuery] = useState("");
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
              <Nav.Item className=" nav-link d-flex align-items-center">
                <HouseDoorFill width={20} height={24}></HouseDoorFill>
                <Link className=" p-0 nav-link text-decoration-none" to="/">
                  <span className="ms-2">Home</span>
                </Link>
              </Nav.Item>
              <Nav.Item className=" nav-link d-flex align-items-center">
                <BookFill width={20} height={24}></BookFill>
                <span className="ms-2">Your Library</span>
              </Nav.Item>
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
            <Button size="sm" variant="light" id="signup-btn" className=" py-2 rounded-pill " type="button">
              Sign Up
            </Button>
            <Button size="sm" variant="black" id="login-btn" className=" rounded-pill py-2 " type="button">
              Login
            </Button>
            <div className="d-flex align-items-center justify-content-center">
              <Link to="/" className="bottom-link">
                Cookie policy
              </Link>
              <span className="mx-1" style={{ color: "rgb(145, 145, 145)" }}>
                |
              </span>
              <Link to="/" className="bottom-link">
                Privacy
              </Link>
            </div>
          </div>
        </Container>
      </Navbar>
    </Col>
  );
};

export default SideBarComponent;
