import React, { useState } from 'react'
import styled from 'styled-components';
import './ContactFormStyle.css';


const ContactForm = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [topic, setTopic] = useState('');
    const [message, setMessage] = useState('');

  return (
    <div>
        <h1>Contact Form</h1>
        <form>

            <div className='form-group'>
                <label htmlFor='name'>
                    <input 
                        type='text' 
                        id='name' 
                        name='name' 
                        placeholder='Imie'
                        value={name} 
                        onChange={(e) => setName(e.target.value)}
                    />
                </label>
            </div>

            <div className='form-group'>
                <label htmlFor='email'>
                    <input 
                        type='text' 
                        id='email' 
                        name='email' 
                        placeholder='E-mail'
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>
            </div>

            <div className='form-group'>
                <label htmlFor='topic'>
                    <input 
                        type='text' 
                        id='topic' 
                        name='topic' 
                        placeholder='Temat'
                        value={topic} 
                        onChange={(e) => setTopic(e.target.value)}
                    />
                </label>
            </div>

            <div className='form-group'>
                <label htmlFor='message'>
                    <textarea 
                        type='text' 
                        id='message' 
                        name='message'
                        placeholder='Wiadomość' 
                        value={message} 
                        onChange={(e) => setMessage(e.target.value)}
                    />
                </label>
            </div>

            <button type='submit'>Send</button>

        </form>
    </div>
  )
}

export default ContactForm