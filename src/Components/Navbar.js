// import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Nav from 'react-bootstrap/Nav';
import { useState } from 'react';


const NavigationFunc = () => {

  const letterObjects ={
    _Head: "Brandon's Portfolio"
  }

  const offcanvasTxt = {
    offCanHead: "Brandon's Portfolio"
  }

  return (

    <div className="navv">

      <Navbar expand={false} className="transparent-nav" key="uniqueKeyForNavbar">

        <Container fluid>

          <Navbar.Brand className="Logo-txt" style={{ textTransform: 'uppercase' }}>

            {letterObjects._Head}

          </Navbar.Brand>

          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-false`} className="navBlock" />


          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-false`}
            aria-labelledby={`offcanvasNavbarLabel-expand-false`}
            placement="end"
            className="offCanvas-expand"
          >

            <Offcanvas.Header closeButton className="d-flex justify-content-evenly">

              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-false`}>

                <Navbar.Text style={{ textTransform: "uppercase" }}>

                  <div className="d-flex justify-content-center">

                    <div className="fs-3">
                      {offcanvasTxt.offCanHead}
                    </div>

                  </div>

                </Navbar.Text>

              </Offcanvas.Title>

            </Offcanvas.Header>

            <Offcanvas.Body className="d-flex flex-column justify-content-evenly fs-1 text-center text-white" id="Off-canvas-body">

              <Nav.Link href="#home" className="nav-link2">Home</Nav.Link>

              <Nav.Link href="#about" className="nav-link2">About</Nav.Link>

              <OffCanvasExample placement="bottom" name="bottom" />

            </Offcanvas.Body>

          </Navbar.Offcanvas>

          <Offcanvas.Body className="Off-canvas-body-nav">

            <Nav.Link href="#home" className="nav-link2">Home</Nav.Link>

            <Nav.Link href="#about" className="nav-link2">About </Nav.Link>
          
            <OffCanvasExample placement="bottom" name="bottom" />

          </Offcanvas.Body>

        </Container>

      </Navbar>

    </div>

  );
};

function OffCanvasExample({ ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Nav.Link onClick={handleShow} className="nav-link2">Projects</Nav.Link>

      <Offcanvas show={show} onHide={handleClose} {...props} className="projects">

        <Offcanvas.Header closeButton>

          <Offcanvas.Title>Offcanvas</Offcanvas.Title>

        </Offcanvas.Header>

        <Offcanvas.Body>

          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>

      </Offcanvas>
      
    </>
  );
}

export default NavigationFunc;
