import React from "react";
import FooterCol from "./FooterCol";
import styled from "styled-components"

const FooterStyles = styled.div`
  padding-top: 10rem;
  background-color: darkgray;
  .container{
    display: flex;
    gap: 3rem;
    height: 5vh;
  }
  .footer__col1{
    flex: 2;
  }
  .footer__col2,
  .footer__col3,
  .footer__col4{
    flex: 1;
  }
  .footer__col1_tittle{
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  .copyright{
    background-color: darkgray;
    text-align: left;
    padding: 1rem 0;
    margin-top: 5rem;
  }
  .para{
    margin-left: 0;
  }
  @media only screen and (max-width:768px) {
  .container{
    flex-direction: column;
    gap: 0rem;
    & > div{
      margin-top: 5rem;
    }
  }
  .footer__col1 .para{
    max-width: 100%;
  }
  .copyright{
    .container{
      div{
        margin-top: 0;
      }
    }
  }    
  }


`

export default function Footer() {
  return (
    <FooterStyles>
      <div className="container">
        <div className="footer__col1">
          <h1 className="footer__col1_tittle">Marcos Morales</h1>
        </div>
        <div className="footer__col2">
          <FooterCol
            heading="Important Links"
            links={[
              {
                text:"Home",
                id:"about",
                path:"/",
                type:"Link"
              },
              {
                id:"proyects",
                text:"Mis proyectos",
                path:"/",
                type:"Link"
              },
              {
                id:"skills",
                text:"Tecnologias",
                path:"/",
                type:"Link"
              },
              {
                id:"contact",
                text:"Contact",
                path:"/",
                type:"Link"
              },
            ]
            }
          />
        </div>
        <div className="footer__col3">
          <FooterCol 
          heading="Contact Info"
          links={[
            {
            text:"54 9(11) 5057-4793",
            path:"tel:+54 9(11) 5057-4793"
          },
          {
            text:"marcosmorales9892@gmail.com",
            path:"mailto:marcosmorales9892@gmail.com"
          },
          {
            text:"Buenos Aires, Argentina",
            path:"http://google.com/maps"
          },
        
        ]}
          />
        </div>
        <div className="footer__col4">
          <FooterCol
          heading="Social Links"
          links={[{
            text:"Linkedin",
            path:"https://www.linkedin.com/in/marcos-morales-130469224/"
          },
          {
            text:"Github",
            path:"https://github.com/MarcosMorales9"
          },
        ]}

          />
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <h5>
          © 2022 - Marcos Morales
          </h5>
        </div>
      </div>
    </FooterStyles>
  );
}
