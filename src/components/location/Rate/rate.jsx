import fullStar from '../../../images/fullStar.png';
import emptyStar from '../../../images/emptyStar.png'; 

function Rate({ rating }) {
  const totalStars = 5;

  return (
    <div className="rating">
      {Array.from({ length: totalStars }, (_, index) => (
        <img
          key={index}
          src={index < rating ? fullStar : emptyStar}
          alt={index < rating ? 'Full Star' : 'Empty Star'}
          className="rating__star"
        />
      ))}
    </div>
  );
}

export default Rate;
