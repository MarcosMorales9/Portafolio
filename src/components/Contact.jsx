import React from 'react'
import { makeStyles, Typography } from "@material-ui/core";
import ContactSection from './ContactSection';

export default function Contact({id,dark,tittle}) {
    const classes = useStyles();
  return (
    <div className={`${classes.container} ${dark && classes.sectiondark}`}>
      <div className={classes.sectioncontent} id={id}>
        <ContactSection></ContactSection>
      </div>
    </div>
  )
}
const useStyles = makeStyles((theme)=> ({
	container : {
		display: "flex",
		height: "100vh",
		justifyContent: "center",
		width: "100",
		margin: "20px 0 80px",
	  },
	  sectiondark:{
		background: "linear-gradient(-45deg, #052d2f, #044144, #033a3d, #05666c)",
		color:"#fff"
	  },
      sectioncontent: {
        maxWidth: "80vw",
        margin: "0 auto",
      },
  }))
