import React from 'react'
import { makeStyles } from '@material-ui/core'


export default function Skills({id,dark,tittle}) {
    const classes = useStyles();
  return (
      <div className={`${classes.container} ${dark && classes.sectiondark}`}>
        <div className={classes.sectioncontent} id={id}>
      <div className="tittle">{tittle}</div>
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
	  }
  }))
