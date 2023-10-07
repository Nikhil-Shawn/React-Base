import React from 'react'
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {PiMessengerLogoBold} from 'react-icons/pi'
import {AiOutlineWhatsApp} from 'react-icons/ai'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_4t8jed9', 'template_mo7l167', form.current, '5Q-xJjw0mHicFZyXI')

    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <AiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>nikhilchavan081998@gmail.com</h5>
            <a href="mailto:nikhilchavan081998@gmail.com">Send a message</a>
          </article>
          <article className="contact__option">
            <PiMessengerLogoBold className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Nikhil Chavan</h5>
            <a href="mailto:nikhilchavan081998@gmail.com">Send a message</a>
          </article>
          <article className="contact__option">
            <AiOutlineWhatsApp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+91 8369033613</h5>
            <a href="https://wa.me/918369033613" target='blank'>Send a message</a>
          </article>
        </div>
        { /* END OF Contact options */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name="email" placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact