import propTypes from 'prop-types';
import styled from 'styled-components';

const TagsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 10px;
`;

const TagsRestyled = styled.span`
    color: white;
    font-size: 0.875em;
    font-weight: 700;
    background-color: #FF6060;
    text-align: center;
    padding: 5px 20px;
    border-radius: 10px;
    min-width: 150px;
    @media (max-width: 480px) {
        font-size: 0.625em;
        min-width: inherit;
        border-radius: 5px;
    }
`;

function Tags({ tags }) {
  // noinspection JSValidateTypes
  return (
    <TagsWrapper>
      {tags.map((tag, index) => (
        <TagsRestyled key={index}>
          {tag}
        </TagsRestyled>
      ))}
    </TagsWrapper>
  );
}

Tags.propTypes = {
  tags: propTypes.arrayOf(propTypes.string).isRequired,
};

export default Tags;