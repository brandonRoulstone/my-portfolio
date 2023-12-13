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

    <Tooltip id="button-tooltip" className="bg-success justify-content-center" data-mdb-toggle="animation" data-mdb-animation-reset="true" data-mdb-animation="fade-in-up" {...props}>

      <Image src="https://i.postimg.cc/DZzBzf3b/github-154769-1280.png" thumbnail  width="30px" height="30px"/>

      <br />

      <a href={user.gitHub} className="flex-shrink link nav-link">{textContent._github}</a>

    </Tooltip>

  );

  const renderLinkedin = (props) => (

    <Tooltip id="button-tooltip" className="bg-primary" {...props}>

      <Image src="https://i.postimg.cc/nrTCdxPp/linked-in-2668700-640.webp" thumbnail  width="30px" height="30px"/>

      <br />

      <a href={user.linkedIn} className="flex-shrink link nav-link">{textContent._LinkedIn}</a>

    </Tooltip>

  );

  const renderEmail = (props) => (
    <Tooltip id="button-tooltip" className="bg-danger" {...props}>

      <Image src="https://i.postimg.cc/J03NctJn/gmail-1162901-1280.webp" thumbnail  width="30px" height="30px"/>

      <br />

      <a href={user.linkedIn} className="flex-shrink link nav-link">{textContent._Gmail}</a>

    </Tooltip>
  );

  return (
    <>
      <div className="text-white d-flex justify-content-center container-fluid">   

        <OverlayTrigger
          placement="left"
          delay={{ show: 250, hide: 400 }}
          overlay={renderGithub}
        >

        <Button className='btn-link' href="https://github.com/brandonRoulstone">
          <i className="fa-brands fa-github fa-lg" style={{"color": "black"}}></i>
        </Button>

        </OverlayTrigger>

        <OverlayTrigger
          placement="bottom"
          delay={{ show: 250, hide: 400 }}
          overlay={renderLinkedin}
        >

          <Button className='btn-link2' href="https://www.linkedin.com/in/brandon-roulstone-a8669a29b/">
            <i className="fa-brands fa-linkedin fa-lg" style={{"color": "#003ea8"}}></i>
          </Button>

        </OverlayTrigger>

        <OverlayTrigger
          placement="right"
          delay={{ show: 250, hide: 400 }}
          overlay={renderEmail}
        >

          <Button className='btn-link3' href="https://github.com/brandonRoulstone">
            <i className="fa-solid fa-envelope fa-lg" style={{"color": "black"}}></i>
          </Button>

        </OverlayTrigger>

      </div>
    </>
  );
}

export default LinkBtn;