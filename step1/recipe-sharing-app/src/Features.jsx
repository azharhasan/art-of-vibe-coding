import React from 'react';
import { FEATURES } from './constants';

function Features() {
  return (
    <div className="features-section">
      {FEATURES.map((feature, index) => (
        <div className="feature" key={index}>
          <div className="feature-icon" aria-hidden="true">{feature.icon}</div>
          <h3>{feature.title}</h3>
          <p>{feature.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Features;
