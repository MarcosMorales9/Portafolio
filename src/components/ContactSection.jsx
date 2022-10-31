import React from 'react'
import SectionTitle from './SectionTittle'
import styled from "styled-components"
import ContactInfoItem from './ContactInfoItem';
import ContactForm from './ContactForm';
import { MdEmail, MdLocalPhone } from 'react-icons/md';

const ContactStyle = styled.div`
padding: 10rem 0;
.contactSection__wrapper{
    display: flex;
    gap: 5rem;
    margin-top: 7rem;
    justify-content: space-between;
    position: relative;
}
.contactSection__wrapper::after{
    position: absolute;
    content: '';
    width: 2px;
    height: 50%;
    background-color: gray;
    left: 50%;
    top: 30%;
    transform: translate(-50%, -50%);
}
.left{
    width: 100%;
    max-width: 500px;
}
.right{
    max-width: 500px;
    width: 100%;
}
@media only screen and (max-width:768px) {
    .contactSection__wrapper{
        flex-direction: column;
    }
    .contactSection__wrapper::after{
        display: none;
    }
    .left,
    .right{
        max-width: 100%;
    }
    .right{
        padding: 4rem 2rem 2rem 2rem;
    }
}
`;

export default function ContactSection() {
  return (
    <ContactStyle>
        <div className='containerContact'>
            <SectionTitle heading='Contact' subheading='Get in Touch'></SectionTitle>
            <div className="contactSection__wrapper">
                <div className="left">
                    <ContactInfoItem
                    icon={<MdLocalPhone/>}
                    text="451150574793"
                    />
                    <ContactInfoItem
                    icon={<MdEmail/>}
                    text="marcosmorales9892@gmail.com"
                    />
                    <ContactInfoItem
                    text='Buenos Aires,Moreno'
                    />
                </div>
                <div className="right">
                    <ContactForm/>
                </div>
            </div>
        </div>
    </ContactStyle>
  )
}
