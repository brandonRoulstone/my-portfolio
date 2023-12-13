import React from 'react';
import Button from 'react-bootstrap/Button';
import LinkBtn from './LinkComponents/LinkBtn';

const LandingPage = () => {

  const textContent = {
    intro: "Software developer & designer",
  }


  return (
 <>
    <div className="Landing-container">

      {/* <div className=".inner-cursor"></div> */}
      
      <div className="container-fluid m-5 p-5" id="childContainer">
        
        <div className="container-fluid">

        <div className="container d-flex justify-content-center fw-semibold p-3 fs-1">
          
          <div id="abth3" className="text-white"> I'm B r a n d o n 👋🏻</div>

        </div>

        </div>

        <h3 className="fs-1 text-white">{textContent.intro}</h3>

        <div className="landing-body">

          <div className="content-pg-lnd">

            <div className="landing-content">

              <Button className="btn-btn" >
                
              </Button>

              <div className="container p-3">
              <LinkBtn />
              </div>

            </div>

          </div>

        </div>
      </div>
    </div>
   </>
  );
}

export default LandingPage;