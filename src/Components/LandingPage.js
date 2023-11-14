import React from 'react';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

const LandingPage = () => {

  const renderGithub = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Github
    </Tooltip>
  );

  const renderLinkedin = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Linkedin
    </Tooltip>
  );

  const renderEmail = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Email me
    </Tooltip>
  );

  return (
    <div className="Landing-container">
      <div className="container-fluid" id="childContainer">
        <h1 className="introduction">
          <h2 id="abth3">Hi, I am <span className="">Brandon Roulstone</span></h2>
        </h1>
        <h3 className="fs-1">Aspiring software developer & designer</h3>
        <div className="landing-body">
          <div className="content-pg-lnd">

            <div className="landing-content">

              <Button className="btn-btn"><i class="fa-solid fa-computer-mouse fa-fade" style={{"color": "#000000"}}></i></Button>

            </div>

          </div>

        </div>
        
        <div className="text-white d-flex justify-content-start container-fluid">            
          <OverlayTrigger
            placement="top"
            delay={{ show: 250, hide: 400 }}
            overlay={renderGithub}
          >
            <Button className='btn-link' href="https://github.com/brandonRoulstone"><i className="fa-brands fa-github fa-lg" style={{"color": "black"}}></i></Button>
          </OverlayTrigger>
          <OverlayTrigger
            placement="top"
            delay={{ show: 250, hide: 400 }}
            overlay={renderLinkedin}
          >
            <Button className='btn-link2' href="https://github.com/brandonRoulstone"><i class="fa-brands fa-linkedin fa-lg3" style={{"color": "#003ea8"}}></i></Button>
          </OverlayTrigger>
          <OverlayTrigger
            placement="top"
            delay={{ show: 250, hide: 400 }}
            overlay={renderEmail}
          >
            <Button className='btn-link3' href="https://github.com/brandonRoulstone"><i class="fa-solid fa-envelope fa-lg" style={{"color": "black"}}></i></Button>
          </OverlayTrigger>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;