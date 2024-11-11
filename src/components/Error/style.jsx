import styled from 'styled-components';
import { Link } from 'react-router-dom';

//****** CSS in JS ERROR STYLE ******//

export const StyledDiv = styled.div`
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 6em;
      margin: 6em auto;
      @media (max-width: 768px) {
          gap: 4em;
          margin: 4em auto;
      } 
      @media (max-width: 480px) {
          gap: 3em;
          margin: 3em auto;
      }
  `;

export const StyledH1 = styled.h1`
      font-size: 18rem;
      font-weight: 700;
      color: #FF6060;
      margin: 0;
      @media (max-width: 480px) {
          font-size: 6em;
      }
  `;

export const StyledH2 = styled.h2`
      font-size: 2.25em;
      font-weight: 700;
      margin: 0;
      color: #FF6060;
      @media (max-width: 480px) {
          font-size: 1.125em;
      }
  ;`

export const StyledLink = styled(Link)`
    font-size: 1.125em;
    font-weight: 700;
    text-decoration: underline;
      @media (max-width: 480px) {
          font-size: 0.875em;
      }
`;