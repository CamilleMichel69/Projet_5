import React, { useState } from 'react';
import '../../../style/composants/carrousel.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

function Carrousel({ pictures, title }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const index = currentIndex === 0 ? pictures.length - 1 : currentIndex - 1;
        setCurrentIndex(index);
    };

    const nextSlide = () => {
        const index = currentIndex === pictures.length - 1 ? 0 : currentIndex + 1;
        setCurrentIndex(index);
    };

    return (
        <div className="carrousel">
            {pictures.length > 1 ? (
                <>
                    <FontAwesomeIcon icon={faChevronLeft} className="carrousel__button prev" onClick={prevSlide}/>
                    <img src={pictures[currentIndex]} alt={title} className="carrousel__image" />
                    <FontAwesomeIcon icon={faChevronRight} className="carrousel__button next" onClick={nextSlide}/>
                    <div className="carrousel__indicator">
                        {currentIndex + 1}/{pictures.length}
                    </div>
                </>
            ) : (
                <img src={pictures[currentIndex]} alt={title} className="carrousel__image" />
            )}
        </div>
    );
}

export default Carrousel;
