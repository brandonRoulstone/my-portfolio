import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Nav from 'react-bootstrap/Nav';


const Header = () => {
  
  return (
    <>

     {[false].map((expand) => (
        <Navbar key={expand} expand={expand} className="transparent-nav">
          <Container fluid>
            

            <Navbar.Brand className="Logo-txt" style={{textTransform:'uppercase'}}>Brandon's Portfolio</Navbar.Brand>

            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} className="navBlock" />
            
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              className="offCanvas-expand"
            >

              <Offcanvas.Header closeButton className="Offcanvas-header">

                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>

                  <Navbar.Text style={{textTransform:"uppercase"}}>

                    <div className="nav-head-txt">
                      More about me
                    </div>

                    </Navbar.Text>

                </Offcanvas.Title>

              </Offcanvas.Header>

              <Offcanvas.Body className="Off-canvas-body">
              <Nav.Link to="/" as={Link} className="navLink">Home</Nav.Link>
              <Nav.Link to="/about" as={Link} className="navLink" >About</Nav.Link>
              <Nav.Link to="/projects" as={Link} className="navLink">My Projects</Nav.Link>
              </Offcanvas.Body>

            </Navbar.Offcanvas>
      
              <Offcanvas.Body className="Off-canvas-body-nav">

              <Nav.Link to="/" as={Link}  className="nav-link1">Home</Nav.Link>

              <Nav.Link to="/about" as={Link}  className="nav-link2">About</Nav.Link>

              <Nav.Link to="" as={Link} className="nav-link1">Projects</Nav.Link>
              
              </Offcanvas.Body>

          </Container>

        </Navbar>
      ))}

    </>
  )
}

export default Header;
