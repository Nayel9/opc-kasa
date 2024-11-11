import logements from '../../data/logements.json';
import { useState } from 'react';
import '../../utils/style/carrousel.scss';
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import PropTypes from 'prop-types';

function Carrousel({ id }) {
  const logement = logements.find((logement) => logement.id === id);
  const [currentImage, setCurrentImage] = useState(0);

  if (!logement || !logement.pictures) {
    return <div>Photos non disponibles</div>;
  }

  const nextSlide = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % logement.pictures.length); //modulo to loop
  };

  const prevSlide = () => {
    setCurrentImage((prevImage) => (prevImage - 1 + logement.pictures.length) % logement.pictures.length);
  };

  return (
    <div className="Carrousel">
      <button onClick={prevSlide} className="CarrouselButton"><FaAngleLeft size={96}/></button>
      <img src={logement.pictures[currentImage]} alt={`Slide ${currentImage}`} className="CarrouselImage" loading="lazy" rel="preload"/>
      <div className="CarrouselIndex">{currentImage + 1}/{logement.pictures.length}</div>
      <button onClick={nextSlide} className="CarrouselButton"><FaAngleRight size={96} /></button>
    </div>
  );
}

Carrousel.propTypes = {
  id: PropTypes.string.isRequired,
};


export default Carrousel;
