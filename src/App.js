import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Styles/Style.css";
import LandingPage from "./Components/LandingPage";
import Header from "./Components/Navbar";
import AboutPage from "./Components/AboutPage";
import MyProjects from "./Components/MyProjects";

function App() {

  return (
    <div className="App">
      <Router>

         <Header />

          <Routes>

            <Route path="/" exact element={<LandingPage />}></Route>
            <Route path="/projects" element={<MyProjects />}></Route>
            <Route path="/about" element={<AboutPage />}></Route>
            
          </Routes>
      </Router>

    </div>
  );
}

export default App;
