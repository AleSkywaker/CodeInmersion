import React from 'react';
import './header.css';
import people from '../../assets/people.png';
import ci from '../../assets/brain_code.png';

const Header = () => {
  return (
    <div className='code_header section_padding' id='home'>
      <div className='code_header-content'>
        <h1 className='gradient_text'>
          Potencia tu desarrollo, hagamos algo fantástico CODE INMERSION
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, corporis? Quaerat esse
          dignissimos tempora repellat, sed excepturi, facere obcaecati dicta vero eaque quisquam
          culpa libero.
        </p>
        <div className='code_header-content_input'>
          <input type='email' name='email' id='email' placeholder='Subscribite...' />
          <button type='button'>Saber mas</button>
        </div>
        <div className='code_header-content_people'>
          <img src={people} alt='people' />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
      <div className='code_header-image'>
        <img src={ci} alt='CI' />
      </div>
    </div>
  );
};

export default Header;
