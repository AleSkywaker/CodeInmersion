import React from 'react';
import './features.css';
import Feature from '../../components/feature/Feature';

interface FeatureDate {
  title: string;
  text: string;
}
const Features = () => {
  const featureData: FeatureDate[] = [
    {
      title: 'Consultoria',
      text: 'Ingeniera avanzada para tu empresa, te ayudamos a sacar ventaja competitiva y te daoms las claves para hacer crecer tu negocio',
    },
    {
      title: 'Transformacion digital',
      text: 'Proporcionamos las herramientas para automatizar tu negocio, CRMS, Apps, Werb, analisys de datos',
    },
    {
      title: 'Marketing digital',
      text: 'Damos visibilibidad a tu negocio, aumentado el volumen de negocio',
    },
    { title: 'Formaciones', text: 'Formaciones para individuos y para empleados' },
  ];
  return (
    <div className='code_features section_padding' id='solutions'>
      <div className='code_features-heading'>
        <h1 className='gradient_text'>
          La technologia forma parte de la evolucion humana, esto esta sucediendo ahora mismo.
        </h1>
        <p>¿Quieres formar parte de ello?</p>
      </div>
      <div className='code_feature-container'>
        {featureData.map((feature, i) => (
          <Feature title={feature.title} text={feature.text} key={i} />
        ))}
      </div>
    </div>
  );
};

export default Features;
