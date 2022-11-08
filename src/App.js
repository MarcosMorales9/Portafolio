import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Proyects from "./components/Proyects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar  />
      <AboutMe id="about" tittle="Acerca de mi" dark={true} />
      <Proyects id="proyects" tittle="Proyectos" dark={true}/>
      <Skills id="skills" tittle="Tecnologias" dark={false}/>
      <Contact id="contact" tittle="Contacto" dark={true}/>
      <Footer/>
    </div>
  );
}

export default App;
