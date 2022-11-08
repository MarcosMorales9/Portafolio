import React from "react";
import FooterCol from "./FooterCol";
import styled from "styled-components"

const FooterStyles = styled.div`
  padding-top: 10rem;
  background-color: darkgray;
  .container{
    display: flex;
    gap: 3rem;

  }
  .footer__col1{
    flex: 2;
  }
  .footer__col2{

  }
  .footer__col3{

  }
  .footer__col4{
    flex: 1;
  }
  .footer__col1_tittle{
    font-size: 3.5rem;
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
          <h3>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem
            sed quo necessitatibus animi soluta, hic nulla reprehenderit quis,
            unde consequatur itaque eos esse reiciendis magni? Doloribus neque
            voluptatum reiciendis fugiat!
          </h3>
        </div>
        <div className="footer__col2">
          <FooterCol
            heading="Important Links"
            links={[
              {
                title:"Home",
                path:"/",
                type:"Link"
              },
              {
                title:"Projects",
                path:"/projects",
                type:"Link"
              },
              {
                title:"Tecnologias",
                path:"/tecnologias",
                type:"Link"
              },
              {
                title:"Contact",
                path:"/contact",
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
            title:"54 9(11) 5057-4793",
            path:"tel:+54 9(11) 5057-4793"
          },
          {
            title:"marcosmorales9892@gmail.com",
            path:"mailto:marcosmorales9892@gmail.com"
          },
          {
            title:"Buenos Aires, Argentina",
            path:"http://google.com/maps"
          },
        
        ]}
          />
        </div>
        <div className="footer__col4">
          <FooterCol
          heading="Social Links"
          links={[{
            title:"Linkedin",
            path:"https://www.linkedin.com/in/marcos-morales-130469224/"
          },
          {
            title:"Github",
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
