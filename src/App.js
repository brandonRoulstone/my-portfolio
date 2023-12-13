import 'bootstrap/dist/css/bootstrap.min.css';
import "./Styles/Style.css";
import LandingPage from "./Components/LandingPage";
import NavigationFunc from "./Components/Navbar";
import MainSection from "./Components/MainSection";
import Footer from "./Components/Footer";
import Cursor from './Components/Cursor/Cursor';
const App = () => {
  
  return (
    <div className="App">

      <Cursor />

        <NavigationFunc />

      <div id="home">

        <LandingPage />

      </div>

      <div id="about">
        
        <MainSection />

      </div>
      
      <Footer />
      
    </div>
  );
}

export default App;
