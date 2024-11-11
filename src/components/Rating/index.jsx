import propTypes from 'prop-types';
import styled from 'styled-components';
import { FaStar } from 'react-icons/fa6';

//********* CSS IN JS STYLE *********//

const PinkRatingStars = styled.span`
  color: #ff6060;
  font-size: 36px;
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;
const GreyRatingStars = styled.span`
  color: #e3e3e3;
  font-size: 36px;
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

function Rating({ rating }) {
  const totalStars = 5;
  return (
    <div className="Rating">
      {[...Array(totalStars)].map((_, index) =>
        index < rating ? (
          <PinkRatingStars key={index}>
            <FaStar />
          </PinkRatingStars>
        ) : (
          <GreyRatingStars key={index}>
            <FaStar />
          </GreyRatingStars>
        )
      )}
    </div>
  );
}

Rating.propTypes = {
  rating: propTypes.number.isRequired,
};
export default Rating;
