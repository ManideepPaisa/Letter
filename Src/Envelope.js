import React, { useState } from 'react';
import './Envelope.css';

const Envelope = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`envelope-container ${isOpen ? 'open' : ''}`} onClick={handleClick}>
      <div className="envelope">
        <div className="front">
          <div className="flap"></div>
        </div>
        <div className="back"></div>
        <div className="letter">
          <p>I love you</p>
        </div>
      </div>
    </div>
  );
};

export default Envelope;
