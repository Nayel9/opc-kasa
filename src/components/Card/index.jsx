import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './card.scss';


function Card({ id, title = '', cover = 'DefaultPicture' }) {
  return (
    <div className="Card">
      <Link to = {`/logement/${id}`}>
      <img src={cover} alt="cover" className="CardCover" loading="lazy" rel="preload"/>
      <h2 className="CardTitle">{title}</h2>
      </Link>
    </div>
  );
}

Card.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
};


export default Card;