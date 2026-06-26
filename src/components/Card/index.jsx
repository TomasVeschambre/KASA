import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const CardLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: block;
`

const CardWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 340px;
  background: transparent;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`

const CardOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.27) 0%, rgba(0, 0, 0, 0.51) 100%);
  z-index: 2;
`

const CardTitle = styled.h3`
  position: absolute;
  bottom: 20px;
  left: 20px;
  color: white;
  font-size: 18px;
  font-weight: 500;
  margin: 0;
  z-index: 3;
  max-width: calc(100% - 40px);
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.9),
               0 1px 4px rgba(0, 0, 0, 0.7);
`

function Card({ title, picture, id })
{
    return (
        <CardLink to={`/logement/${id}`}>
            <CardWrapper>
                <CardImage src={picture} alt={title} />
                <CardOverlay />
                <CardTitle>{title}</CardTitle>
            </CardWrapper>
        </CardLink>
    )
}

Card.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired
}

Card.defaultProps = {
  title: '',
  picture: '',
}

export default Card