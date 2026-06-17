import PropTypes from 'prop-types'
import styled from 'styled-components'

const RatingContainer = styled.div`
    display: flex;
    gap: 8px;
    width: 196px;
    height: 36px;

    @media (max-width: 768px) {
        width: auto;
        height: auto;
        gap: 6px;
    }

`;

const Star = styled.span`
    font-size: 36px;
    width: 36px;
    height: 36px;
    color: ${props => props.$filled ? '#FF6060' : '#E3E3E3'};

    @media (max-width: 768px) {
        font-size: 18px;
        width: 18px;
        height: 18px;
    }
`;

function Rating({ rating }) {
    
    const stars = Array.from({ length: 5 }, (_, index) => index < rating);

    return (
        <RatingContainer>
            {stars.map((filled, index) => (
                <Star key={index} $filled={filled}>
                    ★
                </Star>
            ))}
        </RatingContainer>
    );
}

Rating.propTypes = {
    rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
}

export default Rating;
