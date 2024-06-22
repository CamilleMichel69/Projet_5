import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import '../../style/composants/collapse.scss';

function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className={`collapse ${isOpen ? 'open' : ''}`}>
      <div className='collapse__title' onClick={toggleCollapse}>
        <span>{title}</span>
        <FontAwesomeIcon
          icon={faChevronUp}
          className={`arrow ${isOpen ? 'rotate-down' : ''}`}
        />
      </div>
      <div className='collapse__content'>
        {content}
      </div>
    </section>
  );
}

export default Collapse;
