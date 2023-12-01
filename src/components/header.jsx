import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";

export function Header() {
  return (
    <div>
      <Navbar className="navbar">
        <Container fluid>
          <Navbar.Brand href="#">Robyn.</Navbar.Brand>
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-`}
            aria-labelledby={`offcanvasNavbarLabel-expand-`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-`}>Offcanvas</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="https://robynspaulding.wordpress.com/" target="_blank">
                  Blog
                </Nav.Link>
                  <Nav.Link href="#skills">Skills</Nav.Link>
                  <Nav.Link href="#experience">Experience</Nav.Link>
                  <Nav.Link href="#education">Education</Nav.Link>
                  <NavDropdown.Divider />
                  <Nav.Link href="#portfolio">Portfolio</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
}
