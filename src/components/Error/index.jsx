import { StyledDiv, StyledH1, StyledH2, StyledLink } from './style';

function error() {

  return (
    <StyledDiv>
      <StyledH1>404</StyledH1>
      <StyledH2>Oups! La page que vous demandez n&#39;existe pas.</StyledH2>
      <StyledLink to="Kasa-opc/">Retourner à l&#39;accueil</StyledLink>
    </StyledDiv>
  );
}

export default error;
