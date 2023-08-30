import './contact.css';
import {AiOutlineMail} from 'react-icons/ai';
import {RiMessengerLine} from 'react-icons/ri';
import {BsWhatsapp} from 'react-icons/bs';
import { useRef } from 'react';
import emailjs from 'emailjs-com';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_bshc0ts', 'template_iun4z5o', form.current, 'Q9aQICd44wiVOryQo')
  }
  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <p>Get In Touch</p>
      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
          <AiOutlineMail className='contact__option-icon' />
          
          <a href="mailto:codeman@gmail.com" target='_blank'></a>
          </article>
          <article className='contact__option'>
          <RiMessengerLine className='contact__option-icon'/>
         
          <a href="mailto:abdulghani7827@gmail.com" target='_blank'></a>
          </article>

          <article className='contact__option'>
          <BsWhatsapp className='contact__option-icon'/>
          
          <a href="mailto:abdulghani7827@gmail.com" target='_blank'></a>
          </article>
        </div>
         <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name="messege"  rows="7" placeholder='Your Messege' required></textarea>
          <button type="submit" className='btn primary' >Send Message</button>
         </form>
      </div>
      </section>
  )
}

export default Contact