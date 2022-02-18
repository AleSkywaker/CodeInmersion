import React from 'react';
import './feature.css';

const Feature: React.FC<{ title: string; text: string }> = ({ title, text }) => {
  return (
    <div className='code_features-container_feature'>
      <div className='code_features-container_feature-title'>
        <div>
          <h1>{title}</h1>
        </div>
      </div>
      <div className='code_features-container_feature-text'>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Feature;
