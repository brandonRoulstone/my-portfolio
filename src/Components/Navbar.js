// import { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Nav from 'react-bootstrap/Nav';

const Header = () => {
  
  // const [isClicked, setIsclicked] = useState(false);


  
  



  return (
    <>

     {[false].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
          <Container fluid>

            <Navbar.Brand>My Portfolio</Navbar.Brand>

            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} className="navBlock" />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              className="offCanvas-expand"
            >
              <Offcanvas.Header closeButton className="Offcanvas-header">
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <Navbar.Text className="Nav_head">Hello</Navbar.Text>
                </Offcanvas.Title>
              </Offcanvas.Header>

              <Offcanvas.Body className="Off-canvas-body">
              <Nav.Link to="/" as={Link} className="show" id="navLink">Home</Nav.Link>
              <Nav.Link to="/projects" as={Link} className="show" id="navLink">My Projects</Nav.Link>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}

    </>
  )
}

export default Header;
