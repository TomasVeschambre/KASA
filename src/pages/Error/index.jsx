import { Link } from 'react-router-dom'
import styled from 'styled-components'

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  text-align: center;
  padding: 40px 20px;
`;

const ErrorCode = styled.h1`
  font-size: 263px;
  font-weight: 700;
  color: #FF6060;
  margin: 0;
  line-height: 1;

  @media (max-width: 768px) {
    font-size: 96px;
  }
`;

const ErrorMessage = styled.p`
  font-size: 36px;
  font-weight: 500;
  color: #FF6060;
  margin: 60px 0;
  max-width: 872px;

  @media (max-width: 768px) {
    font-size: 18px;
    margin: 30px 0;
  }
`;

const HomeLink = styled(Link)`
  font-size: 18px;
  color: #000000ff;
  text-decoration: underline;
  margin-top: 140px;
  transition: opacity 0.3s ease;
  max-width: 284px;

  &:hover {
    opacity: 0.7;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    margin-top: 80px;
  }
`;

function Error() {
  return (
    <ErrorContainer>
      <ErrorCode>404</ErrorCode>
      <ErrorMessage>
        Oups! La page que vous demandez n'existe pas.
      </ErrorMessage>
      <HomeLink to="/">
        Retourner sur la page d'accueil
      </HomeLink>
    </ErrorContainer>
  )
}

export default Error