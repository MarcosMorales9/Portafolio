import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Proyects from "./components/Proyects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import {makeStyles} from "@material-ui/core"
import "./App.css";

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Navbar  />
      <AboutMe id="about" tittle="Acerca de mi" dark={true} />
      <Proyects id="proyects" tittle="Proyectos" dark={false}/>
      <Skills id="skills" tittle="Tecnologias" dark={true}/>
      <Contact id="contact" tittle="Contacto" dark={false}/>
    </div>
  );
}

const useStyles = makeStyles((theme)=> ({
  root:{
    
  }
}))

export default App;
