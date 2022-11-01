import React from "react";
import { makeStyles } from "@material-ui/core";
import {
  DiMongodb,
  DiJsBadge,
  DiHtml5,
  DiBootstrap,
  DiCss3Full,
  DiNodejs,
  DiReact,
} from "react-icons/di";
import { SiRedux } from "@react-icons/all-files/si/SiRedux.esm";
import "../App.css";

export default function Skills({ id, dark, tittle }) {
  const classes = useStyles();
  return (
    <div className={`${classes.container} ${dark && classes.sectiondark}`}>
      <div className={classes.sectioncontent} id={id}>
        <div className="tecnoTitulo">{tittle}</div>
        <div className="contenedorTecnologiasTodo">
          <div className="tecnoContenedor">
            <div>
              <DiBootstrap size="5rem" />
              <h3>Bootstrap</h3>
            </div>
            <div>
              <DiCss3Full size="5rem" />
              <h3>CSS</h3>
            </div>
            <div>
              <DiNodejs size="5rem" />
              <h3>NodeJS</h3>
            </div>
            <div>
              <DiReact size="5rem" />
              <h3>React</h3>
            </div>
			</div>
              <div className="contenedorTecnologias2">
                <div>
                <DiHtml5 size="5rem" />
                <h3>HTML5</h3>
                </div>
              <div>
                <DiJsBadge size="5rem" />
                <h3>JavaScript</h3>
              </div>
              <div>
                <DiMongodb size="5rem" />
                <h3>MongoDB</h3>
              </div>
              <div>
                <SiRedux size="5rem" />
                <h3>Redux</h3>
              </div>
              </div>
			 
            </div>
          </div>
        </div>

  );
}
const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    height: "100vh",
    justifyContent: "center",
    width: "100",
    margin: "20px 0 80px",
  },
  sectiondark: {
    background: "linear-gradient(-45deg, #052d2f, #044144, #033a3d, #05666c)",
    color: "#fff",
  },
}));
