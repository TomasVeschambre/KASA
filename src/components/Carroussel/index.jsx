import { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import arrowForward from '../../assets/arrow_forward.svg'

const CarrousselContainer = styled.div`
    position: relative;
    width: 100%;
    height: 415px;
    border-radius: 25px;
    overflow: hidden;

    @media (max-width: 375px) {
        height: 255px;
        border-radius: 10px;
    }
`;

const SliderImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const SliderButton = styled.button`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: transparent;
    border: none;
    padding: 0;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    width: 46px;
    height: 79px;

    ${props => props.$position === 'left' ? 'left: 00px;' : 'right: 0px;'}

    @media (max-width: 375px) {
        width: 24px;
        height: 24px;
    }
`;

const SliderIcon = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
    display: block;
    transform: ${props => props.$direction === 'left' ? 'rotate(180deg)' : 'none'};

    @media (max-width: 375px) {
        width: 100%;
        height: 100%;
    }
`;


const SliderCounter = styled.div`
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    color: white;
    font-size: 18px;
    font-weight: 500;
    background: rgba(0, 0, 0, 0.5);
    padding: 8px 16px;
    border-radius: 20px;
    z-index: 10;

    @media (max-width: 768px) {
        display: none;
    }
`;

function Carroussel({ pictures }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Si pas d'images, ne rien afficher
    if (!pictures || pictures.length === 0) {
        return null;
    }

    const handlePrevious = () => {
        setCurrentIndex((currentIndex - 1 + pictures.length) % pictures.length);
    };

    const handleNext = () => {
        setCurrentIndex((currentIndex + 1) % pictures.length);
    };

    // Ne pas afficher les boutons s'il n'y a qu'une seule image
    const showControls = pictures.length > 1;

    return (
        <CarrousselContainer>
            <SliderImage 
                src={pictures[currentIndex]} 
                alt={`Slide ${currentIndex + 1}`} 
            />
            
            {showControls && (
                <>
                    <SliderButton 
                        $position="left" 
                        onClick={handlePrevious}
                        aria-label="Image précédente"
                    >
                        <SliderIcon src={arrowForward} alt="Précédent" $direction="left" />
                    </SliderButton>
                    
                    <SliderButton 
                        $position="right" 
                        onClick={handleNext}
                        aria-label="Image suivante"
                    >
                        <SliderIcon src={arrowForward} alt="Suivant" $direction="right" />
                    </SliderButton>
                    
                    <SliderCounter>
                        {currentIndex + 1} / {pictures.length}
                    </SliderCounter>
                </>
            )}
        </CarrousselContainer>
    );
}

Carroussel.propTypes = {
    pictures: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Carroussel