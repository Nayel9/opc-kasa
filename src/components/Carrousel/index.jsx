import logements from '../../data/logements.json';
import { useEffect, useState, useCallback } from 'react';
import '../../utils/style/carrousel.scss';
import { FaAngleLeft } from 'react-icons/fa6';
import { FaAngleRight } from 'react-icons/fa6';
import PropTypes from 'prop-types';

function Carrousel({ id }) {
  const logement = logements.find((logement) => logement.id === id);
  const [currentImage, setCurrentImage] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentImage((prevImage) => (prevImage + 1) % logement.pictures.length); // modulo to loop
  }, [logement.pictures.length]);
  const prevSlide = useCallback(() => {
    setCurrentImage(
      (prevImage) =>
        (prevImage - 1 + logement.pictures.length) % logement.pictures.length
    );
  }, [logement.pictures.length]);

  const handleKeyDown = useCallback(
    (event) => {
      event.preventDefault();
      if (event.key === 'ArrowRight') {
        nextSlide();
      } else if (event.key === 'ArrowLeft') {
        prevSlide();
      }
    },
    [nextSlide, prevSlide]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  if (!logement || !logement.pictures) {
    return <div>Photos non disponibles</div>;
  }

  return (
    <div className="Carrousel">
      <button onClick={prevSlide} className="CarrouselButton">
        <FaAngleLeft size={96} />
      </button>
      <img
        src={logement.pictures[currentImage]}
        alt={`Slide ${currentImage}`}
        className="CarrouselImage"
        loading="lazy"
        rel="preload"
      />
      <div className="CarrouselIndex">
        {currentImage + 1}/{logement.pictures.length}
      </div>
      <button onClick={nextSlide} className="CarrouselButton">
        <FaAngleRight size={96} />
      </button>
    </div>
  );
}

Carrousel.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Carrousel;
