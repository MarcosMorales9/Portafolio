import React from 'react'
import SectionTitle from './SectionTittle'
import styled from "styled-components"
import ContactInfoItem from './ContactInfoItem';
import ContactForm from './ContactForm';
import { MdEmail, MdLocalPhone } from 'react-icons/md';

const ContactStyle = styled.div`
padding: 10rem 0;
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
