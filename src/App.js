
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from 'react-particles-js';
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Certificates from "./components/Certificates";
import Projects from './components/Projects';
import Contacts from './components/Contacts';
import Footer from './components/Footer';


function App() {
  return (
    <>
    <Particles
        className="particles-canvas"
        params={{
          particles: {
            number: {
              value: 60,
              density: {
                enable: true,
                value_area: 900
              }
            },
            shape: {
              type: "circle",
              stroke: {
                width: 10,
                color: "#fff"
                
              }
            }
          }
        }}
      />
    <NavBar />
    <Header />
    <AboutMe />
    <Certificates />
    <Projects />
    <Contacts />
    <Footer />
    
    </>
  );
}

export default App;
