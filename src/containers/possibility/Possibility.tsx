import React from 'react';
import './possibility.css';
import possibilityImage from '../../assets/life.png';

const Possibility = () => {
  return (
    <div className='code_possibility section_padding' id='trainning'>
      <div className='code_possibility-image'>
        <img src={possibilityImage} alt='possibility' />
      </div>
      <div className='code_possibility-content'>
        <h4>Solicita mas informacion</h4>
        <h1 className='gradient_text'>El limite es tu imaginacion</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui blanditiis vel aperiam, id
          suscipit quaerat assumenda ratione cum sunt, voluptatibus distinctio facere, error quasi
          nihil.
        </p>
        <h4>Solicita mas informacion</h4>
      </div>
    </div>
  );
};

export default Possibility;
