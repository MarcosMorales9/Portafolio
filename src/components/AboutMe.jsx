import React from "react";
import "../styles/aboutme.css";
import video from "../assets/videoloco.mp4";
// import {Typography } from "@material-ui/core";

export default function AboutMe({ tittle, dark, id }) {
  // const classes = useStyles();
  return (
    <>
      <div className="sectioncontent" id={id}>
      <video className="video" src={video} autoPlay loop muted />
        {/* <div className="tittle">{tittle}</div> */}
      <div className="description">Desarrollador Full Stack</div>
      </div>
    </>
  );
}
// const useStyles = makeStyles((theme) => ({
//   sectioncontent: {
//     margin: "0 auto",
//   },
// }));
