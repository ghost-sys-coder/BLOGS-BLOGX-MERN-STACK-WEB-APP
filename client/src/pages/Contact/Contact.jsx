import React from 'react';

import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact">
      <div className="content">
      <div className="form--container">
        <h1 className='title'>get in touch</h1>
        <address className='address'>
          <p>500 Terry Francisco Street, San Francisco, CA 94158</p>
          <p className="email-text">Email: info@blogx.com, Tel: 123-456-7890</p>
        </address>

        <form action="" className="form" id="form">
          <input type="text" name="name" id="name" placeholder='name' />
          <input type="email" name="email" id="email" placeholder='email' />
          <input type="tel" name="telephone" id="telephone" placeholder='phone' />
          <textarea name="" id="" cols="30" rows="7" placeholder='leave a message...'></textarea>
          <button className="btn">submit</button>
        </form>
      </div>
      </div>
    </section>
  )
}

export default Contact;