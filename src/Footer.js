import React from 'react';
import FacebookIcon from './assets/facebook.png'; 
import InstagramIcon from './assets/instagram.png';
import EmailIcon from './assets/email.png';
import PhoneIcon from './assets/phone.png';

function Footer() {
  return (
    <footer className='footer'>
        <div className='copyright'>
         <p>&copy; 2024 Anastasiia Shkala. All rights reserved.</p>
        </div>
        <div>
        <a href='#'>
            <img src={FacebookIcon} alt='Facebook' className='footer-content'/>
        </a>
        <a href='#'>
            <img src={InstagramIcon} alt='Instagram'  className='footer-content' />
        </a>
        
        <a href='mailto:info@petvet.com'>
            <img src={EmailIcon} alt='Email' className='footer-content' />
        </a>
        <a href='tel:+90517171771'>
            <img src={PhoneIcon} alt='Phone'  className='footer-content' />
        </a>
        </div>
    </footer>
  );
}

export default Footer;