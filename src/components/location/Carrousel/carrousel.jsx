import React, { useState } from 'react';
import leftArrow from '../../../images/arrow-left.svg'; 
import rightArrow from '../../../images/arrow-right.svg'; 

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
                    <img src={leftArrow} className="carrousel__button prev" onClick={prevSlide} alt="Previous" />
                    <img src={pictures[currentIndex]} alt={title} className="carrousel__image" />
                    <img src={rightArrow} className="carrousel__button next" onClick={nextSlide} alt="Next" />
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
