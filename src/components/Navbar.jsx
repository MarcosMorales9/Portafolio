import React, { useState } from 'react'
import Proyects from './Proyects'
import perrito from "../assets/perrito.jpg"
import { AppBar, List, Toolbar, IconButton,Drawer, Divider, ListItem, ListItemIcon } from '@material-ui/core'
import {makeStyles} from "@material-ui/core"
import {Link, animateScroll as scroll} from "react-scroll"
import MenuIcon from '@mui/icons-material/Menu';
import CancelIcon from '@mui/icons-material/Cancel';
import AppBlockingIcon from '@mui/icons-material/AppBlocking';
const links = [
  {
  id:"about",
  text:"Acerca de mi",
  icon:<AppBlockingIcon fontSize='large'/>,
},
{
  id:"proyects",
  text:"Mis proyectos",
  icon:<AppBlockingIcon fontSize='large'/>
},
{
  id:"skills",
  text:"Tecnologias",
  icon:<AppBlockingIcon fontSize='large'/>
},
{
  id:"contact",
  text:"Contacto",
  icon:<AppBlockingIcon fontSize='large'/>
},
]


export default function Navbar() {
  const classes = useStyles();
  const [open,setOpen] = useState(false)
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
        <IconButton
        className={classes.menubutton}
        onClick={()=>setOpen(!open)}
        >
        
        <MenuIcon fontSize='large'/>
        </IconButton>
      </Toolbar>
    </AppBar>
    <Drawer anchor='right' open={open} onClose={()=>setOpen(false)}>
            <IconButton onClick={()=>setOpen(false)}>
              <CancelIcon fontSize='large' className={classes.cancelicon}/>
            </IconButton>
            <Divider/> 
            {
              links.map(({id,text,icon}, index)=>(
                <Link key={index} 
                className={classes.sidebar}
                to={id}
                spy={true}
                smooth={true}
                activeClass="active"
                duration={500}
                offset={-70} >
                 <ListItem component="h5">
                  <span>
                    <ListItemIcon>
                          {icon}
                    </ListItemIcon>
                  </span>
                  {text}
                 </ListItem>
                </Link>
              ))
            }
            </Drawer>
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
      color:"green",
      position:"absolute",
      top:0,
      right:10,
    }
  },
  cancelicon:{
    color:"tomato",
    position:"absolute",
    top:0,
    right:10,
  },
  sidebar:{
    width:"40vw",
    [theme.breakpoints.down("sm")]:{
      width:"60vw",
    },
    "& h5":{
      margin: theme.spacing(10,0,0,4),
      fontSize:"1.4rem",
      color:"#333",
      fontWeight:"bold"

    },
    "& h5:hover":{
      color:"tomato",
      cursor:"pointer"
    }
  }
}))
