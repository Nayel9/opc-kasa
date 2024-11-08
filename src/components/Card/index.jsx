import PropTypes from 'prop-types';

function Card({ title = '', cover = 'DefaultPicture' }) {
  return (
    <div className="Card">
      <img src={cover} alt="cover" className="CardCover" />
      <h2 className="CardTitle">{title}</h2>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
};


export default Card;