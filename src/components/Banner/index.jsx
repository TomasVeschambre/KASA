import styled from 'styled-components'
import PropTypes from 'prop-types'

const BannerContainer = styled.div`
    position: relative;
    width: 100%;
    height: 223px;
    border-radius: 25px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 375px) {
        height: 111px;
        border-radius: 10px;
    }
`;

const BannerImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
`;

const BannerWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

const BannerOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
    z-index: 2;
`;

const BannerTitle = styled.h1`
    position: relative;
    color: white;
    font-size: 48px;
    font-weight: 500;
    margin: 0;
    z-index: 3;
    text-align: center;
    padding: 0 20px;
    
    @media (max-width: 768px) {
        font-size: 32px;
        text-align: left;
        width: 100%;
        white-space: pre-line;
        line-height: 1.1;
    }

    @media (max-width: 375px) {
        font-size: 24px;
    }
`;

function Banner({ picture, title = '' }) {
    const formattedTitle = title.includes(', ')
        ? title.replace(', ', ',\n')
        : title

    return (
        <BannerWrapper>
            <BannerContainer>
                <BannerImg src={picture} alt={title} />
                <BannerOverlay />
                <BannerTitle>{formattedTitle}</BannerTitle>
            </BannerContainer>
        </BannerWrapper>
    )
}

Banner.propTypes = {
    picture: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}

export default Banner
