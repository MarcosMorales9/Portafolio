import React from 'react'
import {MdPlace} from "react-icons/md"
import styled from 'styled-components'

const ItemStyles = styled.div`
    padding: 2rem;
    padding-right: 5rem;
  background-color: black;
  display: flex;
  align-items: center;
  gap: 2rem;
  border-radius: 8px;
  margin-bottom: 2rem;
    .icon{
        color: var(--white);
    background-color: var(--gray-2);
    padding: 1.3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    }
    svg{
        width:3.5rem;
    }
`;

export default function ContactInfoItem({
    icon = <MdPlace size="3rem"></MdPlace>,
    text="This is an info"
}) {
    return (
   <ItemStyles>
        <div className="icon">{icon}</div>
        <div className="info">
            <p>{text}</p>
        </div>
   </ItemStyles>
  )
}
