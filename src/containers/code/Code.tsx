import React from 'react';
import { Feature } from '../../components';
import './code.css';

const CodeInmersion = () => {
  return (
    <div className='code_whatcode section_margin' id='code'>
      <div className='code_whatcode-feature'>
        <Feature
          title='¿Que_es_Code_Inmersion?'
          text='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus, eligendi cumque! Voluptates iusto obcaecati porro repudiandae reiciendis tempore qui ut eos ea, repellat minus excepturi!'
        />
      </div>
      <div className='code_whatcode-heading'>
        <h1 className='gradient_text'>Ingenieria avanzada para la empresa</h1>
        <p>Explorar Syllabus</p>
      </div>
      <div className='code_whatcode-container'>
        <Feature
          title='Front_End'
          text='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus, eligendi cumque! Voluptates iusto obcaecati porro repudiandae reiciendis tempore qui ut eos ea, repellat minus excepturi!'
        />
        <Feature
          title='Back_End'
          text='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus, eligendi cumque! Voluptates iusto obcaecati porro repudiandae reiciendis tempore qui ut eos ea, repellat minus excepturi!'
        />
        <Feature
          title='Diseño'
          text='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus, eligendi cumque! Voluptates iusto obcaecati porro repudiandae reiciendis tempore qui ut eos ea, repellat minus excepturi!'
        />
      </div>
    </div>
  );
};

export default CodeInmersion;
