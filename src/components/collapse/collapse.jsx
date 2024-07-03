import React, { useState } from 'react';
import highArrow from '../../images/arrow_down.png';

function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className={`collapse ${isOpen ? 'open' : ''}`}>
      <div className='collapse__title'>
        <span>{title}</span>
        <img 
          src={highArrow} 
          className={`arrow ${isOpen ? '' : 'rotate-down'}`} 
          alt="Toggle Collapse"
          onClick={toggleCollapse}
        />
      </div>
      <div className='collapse__content'>
        {Array.isArray(content) ? (
          <ul>
            {content.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : (
          <p>{content}</p>
        )}
      </div>
    </section>
  );
}

export default Collapse;
