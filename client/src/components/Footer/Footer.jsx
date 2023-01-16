import React from 'react';
import { Link } from 'react-router-dom';

import "./Footer.css";

const Footer = () => {
  return (
    <section className='footer'>
        <div className="top">
        
        <div className="container">
            <h2 className="title">about blogX</h2>
            <p className='desc'>We bring the most educative, informative, entertaining, and up to date blogs around everything to do with technology and web designer.</p>
        </div>
        <div className="container">
            <h2 className="title">socials</h2>
            <nav className="social-links">
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">facebook</a>
                <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">twitter</a>
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">instagram</a>
                <a href="https://www.pinterest.com/" target="_blank" rel="noopener noreferrer">pinterest</a>
                <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">linkedin</a>
            </nav>
        </div>
        <div className="container">
            <h2 className="title">subscribe</h2>
            <p className='subscribe-text'>Subscribe to our newsletter, and keep up with our latest articles.</p>
            <form action="/" className="form" id="form">
                <input type="email" name="email-subscribe" id="email-subscribe" placeholder='Enter your email...' />
                <button type='submit'>subscribe now</button>
            </form>
        </div>
        
        </div>
        
        <div className="bottom">
            <Link to={"/"}>home</Link>
            <Link to={"/contact"}>contact us</Link>
            <p>&copy; blogX</p>
        </div>
    </section>
  )
}

export default Footer