import React from 'react';
import ContactInfoItem from '../components/contactComponents/ContactInfoItem';
import './Page.css';
import { MdEmail, MdLocalPhone } from 'react-icons/md';
import ContactForm from '../components/contactComponents/ContactForm';


const Contact = () => {

  return (
    <div className="body_page">
      
      <div className="content_page">
        <h1>Contact Us</h1>

        <div className='contactItems'>
          <ContactInfoItem icon={<MdLocalPhone />} text="+48 999 999 999" />
          <ContactInfoItem icon={<MdEmail />} text="PAI-projekt@gmail.com" />
          <ContactInfoItem text="Kaliskiego 7, 85-796 Bydgoszcz" />
        </div>

        <div className='nextSection'>
          <ContactForm />
        </div>
        
      </div>
      
    </div>
  );
};

export default Contact;