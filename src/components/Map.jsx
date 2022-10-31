import React from "react";
import styled from "styled-components";
import PText from "./PText";

const MapStyles = styled.div`
    background: url(https://media.discordapp.net/attachments/821196906814111765/1036469958063964200/unknown.png?width=1440&height=542) no-repeat center / cover;
    min-height: 400px;
    .container{
        position: relative;
        min-height: 400px;
    }
    .map__card{
        position: absolute;
        right: 10%;
        bottom: 10%;
        padding: 2rem;
        background: darkgray;
        width: 100%;
        max-width: 300px;
        border-radius: 12px;
    }
    map__card_heading{
    font-size: 3rem;
    margin-bottom:1rem;
    }
    .map__card__link{
        display: inline-block;
        font-size: 1.6rem;
        margin-top: 3rem;
        text-decoration: underline;
    }
`;

export default function Map() {
  return (
    <MapStyles>
      <div className="container">
        <div className="map__card">
          <h3 className="map__card__heading">here is me</h3>
          <PText>Moreno, Buenos Aires</PText>
          <a 
          href="https://www.google.com/maps/place/Lisandro+de+la+Torre+1125,+B1743+Moreno,+Provincia+de+Buenos+Aires/@-34.6163902,-58.7937875,15z/data=!3m1!4b1!4m6!3m5!1s0x95bc942b13bcfdfd:0xa3b12d12118594a0!8m2!3d-34.6164082!4d-58.7850542!16s%2Fg%2F11fmjc2sxh" 
          target="_blank"
          rel="noreferrer"
          className="map__card__link"
          >
            Open in Google Map
          </a>
        </div>
      </div>
    </MapStyles>
  );
}
