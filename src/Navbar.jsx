import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faCircleUser,
} from "@fortawesome/free-solid-svg-icons";

function NavScrollExample() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      className="space "
    >
      <Container fluid>
        {/* Navbar logo  */}
        <Navbar.Brand href="#">ZapShop</Navbar.Brand>
        {/* Navbar - scroll for Collapse */}
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1" style={{ marginLeft: "2rem" }}>
              Home
            </Nav.Link>
            {/* Navbar dropdown */}
            <NavDropdown
              title="Links"
              id="navbarScrollingDropdown"
              style={{ marginLeft: "1rem" }}
            >
              <NavDropdown.Item
                target="_blank"
                href="https://www.linkedin.com/in/chetan-pradhan-2001-js?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              >
                LinkedIn
              </NavDropdown.Item>
              <NavDropdown.Item
                target="_blank"
                href="https://github.com/Chetan-Pradhan"
              >
                GitHub
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          {/* Form input tag for search */}
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              style={{ width: "100%" }}
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          <FontAwesomeIcon
            icon={faCartShopping}
            style={{
              color: "white",
              fontSize: "1.5rem",
              margin: "1rem",
              cursor: "pointer",
            }}
          />
          <FontAwesomeIcon
            icon={faCircleUser}
            style={{
              color: "white",
              fontSize: "1.5rem",
              margin: "1rem",
              cursor: "pointer",
            }}
          />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
