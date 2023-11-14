import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShop } from '@fortawesome/free-solid-svg-icons';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';
const AboutPage = () => {
  return (
    <div className="about-container">
     <div className="about-intro">
       <h1 className="about-txt">About me</h1>
      </div>
      <div className="icons-btn-container">
        <div className="icons-md">
          <button className="icon-btn"><FontAwesomeIcon icon={faShop} /></button>
          <button className="icon-btn"><FontAwesomeIcon icon={faAddressCard} /></button>
          <button className="icon-btn"><FontAwesomeIcon icon={faShop} /></button>
          <button className="icon-btn"><FontAwesomeIcon icon={faAddressCard} /></button>
        </div>
      </div>
     <div className="about-bg">
       <div className="img-img">
         
       </div>
     </div>
    
    </div>
  )
}

export default AboutPage;
