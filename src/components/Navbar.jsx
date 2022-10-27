import React from 'react'
import Proyects from './Proyects'
import perrito from "../assets/perrito.jpg"
import { AppBar, List, Toolbar, IconButton } from '@material-ui/core'
import {makeStyles} from "@material-ui/core"
import {Link, animateScroll as scroll} from "react-scroll"
import MenuIcon from '@mui/icons-material/Menu';

const links = [
  {
  id:"about",
  text:"Acerca de mi",
  icon:"👤",
},
{
  id:"proyects",
  text:"Mis proyectos",
  icon:"📰"
},
{
  id:"skills",
  text:"Tecnologias",
  icon:"👨‍💻"
},
{
  id:"contact",
  text:"Contacto",
  icon:"🐱‍💻"
},
]


export default function Navbar() {
  const classes = useStyles();

  return (
    <>
    <AppBar position='sticky' className={classes.root}>
      <Toolbar  className={classes.toolbar}>
        <img src={perrito} className={classes.perrito} alt="Perrito"></img>
        <List className={classes.menu}>
            {
              links.map(({id,text}, index)=>(
                <Link key={index} 
                to={id}
                spy={true}
                smooth={true}
                activeClass="active"
                duration={500}
                offset={-70} >{text}</Link>
              ))
            }
        </List>
        <IconButton className={classes.menubutton}>
        <MenuIcon/>
        </IconButton>
      </Toolbar>
    </AppBar>
    </>
      
  )
}
const useStyles = makeStyles((theme)=> ({
  root:{
    backgroundColor:"#fafafa",
    top:0,
    left:0,
    right:0,
    zIndex:999,
  },
  toolbar:{
    display:"flex",
    justifyContent:"flex-start",
    alignItems:"center"
  },
  perrito:{
      height:"1.5rem",
      objectFit:"contain",
      "&:hover":{
        cursor:"pointer"
      }
  },
  menu:{
    [theme.breakpoints.down("sm")]:{
      display:"none"
    },
"& a":{
  color:"#333",
  fontSize: "1.4rem",
  fontWeight: "bold",
  marginLeft: theme.spacing(3)
    },
    "& a:hover":{
      cursor:"pointer",
      color:"tomato",
      borderBottom:"3px solid tomato",
    }
  ,},
  menubutton:{
    display:"none",
    [theme.breakpoints.down("sm")]:{
      display:"block",
      color:"tomate",
      position:"absolute",
      top:0,
      right:10,
    }
  }
}))
