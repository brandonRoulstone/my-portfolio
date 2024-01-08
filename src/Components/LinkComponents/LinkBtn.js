import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

const LinkBtn = () => {
 const user = {
    gitHub: "https://github.com/brandonRoulstone",
    linkedIn: "https://www.linkedin.com/in/brandon-roulstone-a8669a29b/"
  }

  const textContent = {
    _github: "GitHub",
    _LinkedIn: "LinkedIn",
    _Gmail: "Gmail"
  }

  const renderGithub = (props) => (

    <Tooltip id="button-tooltip" className="bg-transparent justify-content-center" data-mdb-toggle="animation" data-mdb-animation-reset="true" data-mdb-animation="fade-in-up" {...props}>

      <Image src="https://cdn-thumbs.imagevenue.com/51/78/95/ME17G09K_t.png" thumbnail  width="30px" height="30px"/>

      <br />

      <a href={user.gitHub} className="flex-shrink link nav-link">{textContent._github}</a>

    </Tooltip>

  );

  const renderLinkedin = (props) => (

    <Tooltip id="button-tooltip" className="bg-transparent" {...props}>

      <Image src="https://cdn-thumbs.imagevenue.com/0a/b6/2d/ME17G093_b.png" thumbnail  width="30px" height="30px"/>

      <br />

      <a href={user.linkedIn} className="flex-shrink link nav-link">{textContent._LinkedIn}</a>

    </Tooltip>

  );

  const renderEmail = (props) => (
    <Tooltip id="button-tooltip" className="bg-transparent" {...props}>

      <Image src="https://cdn.pixabay.com/photo/2016/01/26/17/15/gmail-1162901_1280.png" thumbnail  width="30px" height="30px"/>

      <br />

      <a href={user.linkedIn} className="flex-shrink link nav-link">{textContent._Gmail}</a>

    </Tooltip>
  );

  return (
    <>
      <div className="text-white d-flex justify-content-start container-fluid">   

        <OverlayTrigger placement="bottom" delay={{ show: 250, hide: 400 }} overlay={renderGithub}>

        <Button className='btn-link' href="https://github.com/brandonRoulstone">
          <i className="fa-brands fa-github fa-lg" style={{"color": "black"}}></i>
        </Button>

        </OverlayTrigger>

        <OverlayTrigger placement="bottom" delay={{ show: 250, hide: 400 }} overlay={renderLinkedin}>

          <Button className='btn-link' href="https://www.linkedin.com/in/brandon-roulstone-a8669a29b/">
            <i className="fa-brands fa-linkedin fa-lg" style={{"color": "#003ea8"}}></i>
          </Button>

        </OverlayTrigger>

        <OverlayTrigger placement="bottom" delay={{ show: 250, hide: 400 }} overlay={renderEmail}>

          <Button className='btn-link' href="https://github.com/brandonRoulstone">
            <i className="fa-solid fa-envelope fa-lg" style={{"color": "black"}}></i>
          </Button>

        </OverlayTrigger>

      </div>
    </>
  );
}

export default LinkBtn;