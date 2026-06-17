import PropTypes from 'prop-types'
import styled from 'styled-components'
import Rating from '../Rating'

const TitleLogement = styled.h1`
    font-size: 36px;
    font-weight: 500;
    color: #FF6060;
    margin: 0 0 0 0;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const LocationLogement = styled.p`
    font-size: 18px; 
    font-weight: 500;
    color: #000000ff;
    margin: 0 0 20px 0;

  @media (max-width: 768px) {
    font-size: 14px;
    margin: 0 0 10px 0;
  }
`;

const TagsContainer = styled.div`
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
`;

const TagLogement = styled.span`
    display: inline-block;
    background-color: #FF6060;
    color: #ffffff;
    padding: 5px 15px;
    border-radius: 10px;
    font-size: 14px;
    font-weight: 500;

  @media (max-width: 768px) {
    font-size: 10px;
    padding: 4px 10px;
    border-radius: 5px;
  }
`;
const HostName = styled.div`
    font-size: 16px;
    font-weight: 500;
    color: #000000ff;
    display: flex;
    flex-direction: column;
    text-align: right;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;
const HostImage = styled.img`
    width: 64px;    
    height: 64px;
    border-radius: 50%;
    object-fit: cover;

  @media (max-width: 768px) {
    width: 32px;
    height: 32px;
  }
`;

const HeaderContainer = styled.div`
  width: 100%;
  max-width: 1300px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin: 0 auto;
  box-sizing: border-box;
  gap: 76px;
  padding-top: 30px;
  text-align: left;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 30px 20px 0;
    width: 100%;
    gap: 16px;
  }

  @media (max-width: 375px) {
    align-items: stretch;
  }
`;

const LeftLogement = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 10px;
  align-items: flex-start;
  text-align: left;

  @media (max-width: 375px) {
    width: 100%;
  }
`;

const RightLogement = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 10px;

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
  }
`;

const HostContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;

  @media (max-width: 768px) {
    gap: 8px;
  }
`;

function HeaderLogement({ title, description, host, rating, location, equipment, tags }) {
  return (
    <HeaderContainer>
      <LeftLogement>
        <TitleLogement>{title}</TitleLogement>
        <LocationLogement>{location}</LocationLogement>
        <TagsContainer>
          {tags.map((tag, index) => (
            <TagLogement key={index}>{tag}</TagLogement>
          ))}
        </TagsContainer>
      </LeftLogement>
      <RightLogement>
        <HostContainer>
          <HostName>
            <span>{host.name.split(' ')[0]}</span>
            <span>{host.name.split(' ')[1]}</span>
          </HostName>
          <HostImage src={host.picture} alt={host.name} />
        </HostContainer>
        <Rating rating={rating} />
      </RightLogement>
    </HeaderContainer>
  );
}

HeaderLogement.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    host: PropTypes.object.isRequired,
    rating: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    equipment: PropTypes.arrayOf(PropTypes.string).isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default HeaderLogement;