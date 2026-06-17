import { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const MenuRoulantContainer = styled.div`
  width: 100%;
  max-width: 100%;
  margin: 0;
  background-color: #F6F6F6;
  border-radius: 5px;
  overflow: hidden;
`;

const MenuHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #FF6060;
  color: white;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  user-select: none;
  position: relative;

  @media (max-width: 768px) {
    padding: 7px 12px;
    font-size: 13px;
  }
`;

const Arrow = styled.span`
  font-size: 32px;
  font-weight: bold;
  transform: ${props => props.$isOpen ? 'rotate(180deg)' : 'rotate(0deg)'};
  transition: transform 0.5s ease;
  line-height: 1;
  position: absolute;
  right: ${props => props.$arrowPosition || '20px'};
  color: white;

  @media (max-width: 768px) {
    font-size: 20px;
    right: ${props => props.$arrowPosition || '12px'};
  }
`;

const MenuContent = styled.div`
  max-height: ${props => props.$isOpen ? '500px' : '0'};
  overflow: hidden;
  transition: max-height 0.35s ease, padding 0.35s ease;
  padding: ${props => props.$isOpen ? '20px' : '0 20px'};
  will-change: max-height, padding;
  color: #FF6060;
  font-size: 16px;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 12px;
    padding: ${props => props.$isOpen ? '12px' : '0 12px'};
  }
`;

function MenuRoulant({ title, content, arrowPosition }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <MenuRoulantContainer>
      <MenuHeader onClick={toggleMenu}>
        <span>{title}</span>
        <Arrow $isOpen={isOpen} $arrowPosition={arrowPosition}>^</Arrow>
      </MenuHeader>
      <MenuContent $isOpen={isOpen}>
        {Array.isArray(content) ? (
          content.map((item, index) => (
            <div key={index}>{item}</div>
          ))
        ) : (
          <div>{content}</div>
        )}
      </MenuContent>
    </MenuRoulantContainer>
  );
}

MenuRoulant.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]).isRequired,
  arrowPosition: PropTypes.string,
}


export default MenuRoulant;