
import React from 'react';
import AnimatedComponent from './animation';

export const Gallery = () => {
  const companies = [
    { logo: '/img/certificates/ISO.png' },
    { logo: '/img/certificates/GDPR.png' },
    { logo: '/img/certificates/PCI.png' },
    { logo: '/img/certificates/soc-2.png' },
    { logo: '/img/certificates/cmmi.png' },
  ];

  return (
    <div className="gallery-section">
      <AnimatedComponent animationType="scaleUp" >
        <h2>Recognized Achievements</h2>
      </AnimatedComponent>
      <div className="company-display">
        {companies.map((company, index) => (
          <div className="company-item" key={index}>
            <img src={company.logo} alt={company.name} className="company-logo" />
            <p>{company.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

