import React from 'react';
import './footer.css';
import codeLogo from '../../assets/code_logo.png';

const Footer = () => {
  return (
    <div className='code_footer section_padding'>
      <div className='code_footer-heading'>
        <h1 className='gradient_text'>El futuro es ahora</h1>
      </div>

      <div className='code_footer-btn'>
        <p>Requesta access</p>
      </div>

      <div className='code_footer-links'>
        <div className='code_footer-links_logo'>
          <img src={codeLogo} alt='logo' width={'50%'} />
          <p>Code Inmersion.</p>
        </div>

        <div className='code_footer-links_div'>
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className='code_footer-links_div'>
          <h4>Company</h4>
          <p>Terms & conditions</p>
          <p>Privacy & Policy</p>
          <p>Contact</p>
        </div>
        <div className='code_footer-links_div'>
          <h4>Get in touch</h4>
          <p>Carrer Lucas</p>
          <p>46008</p>
          <p>Valencia</p>
          <p>Spain</p>
        </div>
      </div>

      <div className='code_footer-copyrigth'>
        <p>© 2022 CODE INMERSION. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
