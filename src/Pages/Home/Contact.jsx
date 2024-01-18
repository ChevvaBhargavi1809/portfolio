import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_clkhnff', 'template_gii7szd', form.current, 'EvrI-f_IGDftYu9La')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id="Contact" className="contact--section">
            <div>
                <p >Get in Touch</p>
                <br/>
                <h2 className='section--heading'>Contact Me</h2>
            </div>
            <form ref={form} onSubmit={sendEmail}>
            <label htmlFor="first-name" className="contact--label">
                <span className="text-md">First Name</span>
                <input type="text"  className="contact--input text-md" name="from_name"
                id="first-name" required/>
            </label>
            <br/>
            <label className="contact--label">
                <span className="text-md">Email</span>
                <input type="email"  className="contact--input text-md" name="email"
                id="first-name" required/>
            </label>
            <br/>
            <label htmlFor="message" className="contact--label">
                <span className="text-md">Message</span>
                <textarea  className="contact--input 
                text-md" 
                id="message"
                rows = "8"
                name="message"
                placeholder="Type your message"/>
            </label>
            <br/>
            <input type="submit" value="Send!" className='btn btn-primary' />
            </form>
    </section>
  );
};