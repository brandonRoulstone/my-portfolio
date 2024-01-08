import React from 'react';
import Button from 'react-bootstrap/Button';
import LinkBtn from './LinkComponents/LinkBtn';


const LandingPage = () => {

  const textContent = {
    intro: "Software Developer & Designer",
  }


  return (
 <>
    <div className="Landing-container">

      <div className="container-fluid m-5 p-5" id="childContainer">

        {/* <div className="bblSpiral">
        <img src="https://cdn-thumbs.imagevenue.com/9e/b8/9c/ME17G0IN_t.png" id="bubble"/>
          <img src="https://cdn-thumbs.imagevenue.com/9e/b8/9c/ME17G0IN_t.png" id="bubble2"/>
          <img src="https://cdn-thumbs.imagevenue.com/9e/b8/9c/ME17G0IN_t.png" id="bubble3"/>
          <img src="https://cdn-thumbs.imagevenue.com/9e/b8/9c/ME17G0IN_t.png" id="bubble4"/>
          <img src="https://cdn-thumbs.imagevenue.com/9e/b8/9c/ME17G0IN_t.png" id="bubble5"/>
          <img src="https://cdn-thumbs.imagevenue.com/9e/b8/9c/ME17G0IN_t.png" id="bubble6"/>
          <img src="https://cdn-thumbs.imagevenue.com/9e/b8/9c/ME17G0IN_t.png" id="bubble7"/>
        </div> */}
        
        <div className="container-fluid">

          <div className="container d-flex justify-content-center fw-semibold p-3 fs-1">
            
            <div id="abth3" className="text-white display-1"> I'm B r a n d o n</div>

          </div>

        </div>

        <Button href="#about" className="btn-btn mb-2" >
          
        </Button>

        <h3 className="fs-1 text-white" id="text-sub">{textContent.intro}</h3>

        <div className="landing-body">

          <div className="content-pg-lnd">

            <div className='container py-3'>

             <LinkBtn />
             
            </div>

          </div>

        </div>
      </div>
    </div>
   </>
  );
}

export default LandingPage;