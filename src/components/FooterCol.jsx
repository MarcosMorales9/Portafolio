import React from "react";
import styled from "styled-components";
import {Link} from "react-scroll"

const ColStyles = styled.div`
    .heading{
        font-size:2.4rem;
        margin-bottom: 2rem;
    }
    li{
        margin-bottom:1rem;
    }
    a{
        font-size: 1.8rem;
    }
`

export default function FooterCol({
  heading = "col heading",
  links = [
    {
      id:"About",
      text:"Acerca de mi",
      path:"/",
      type:""
    },
    {
      id:"Proyects",
      text:"Mis proyectos",
      path:"/",
      type:""
    },
  ],
}) {
  return (
    <ColStyles>
      <h1 className="heading">{heading}</h1>
      <ul>
        {links.map((item, index) => (
          <li key={index}>
            {item.type === "Link" ? (
              <Link
              spy={true}
              smooth={true}
              activeClass="active"
              duration={500}
              offset={-70} to={item.id}>{item.text}</Link>
            ) : (
              <a to href={item.path} target="_blank" rel="noreferrer">
                {item.text}
              </a>
            )}
          </li>
        ))}
      </ul>
    </ColStyles>
  );
}
