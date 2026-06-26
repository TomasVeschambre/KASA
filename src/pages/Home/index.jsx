import Card from '../../components/Card'
import Banner from '../../components/Banner'
import styled from 'styled-components'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import headerHome from '../../assets/header_home.png'

const BannerWrapper = styled.div`
  margin: 20px auto;
  width: 100%;
  max-width: 1240px;
  box-sizing: border-box;

  @media (max-width: 375px) {
    margin: 16px auto;
    padding: 0 20px;
  }
`;

const HomeContainer = styled.div`
  padding: 40px;
  background: #F6F6F6;
  margin: 20px auto;
  border-radius: 25px;
  max-width: 1240px;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 768px) {
    background: none;
    margin: 0;
    width: 100%;
    padding: 40px 0;
    
  }
  @media (max-width: 375px) {
    padding: 20px;
    margin: 16px 20px;
    border-radius: 10px;
    background: transparent;
    width: auto;
  }
`

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  width: 100%;

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  @media (max-width: 375px) {
    gap: 20px;
    padding: 0;
  }
`

function Home() {
    const [isDataLoading, setDataLoading] = useState(false)
    const [error, setError] = useState(false)
    const [locationsData, setLocations] = useState([])

    useEffect(() => {
        document.title = 'Kasa - Home'

        async function fetchLocations() {
            setDataLoading(true)
            try{
                const response = await fetch(`http://localhost:8080/api/properties`)
                const locationsData = await response.json()
                console.log('Données reçues:', locationsData)
                setLocations(locationsData)
            }
            catch(err){
                console.log('===== error =====', err)
                setError(true)
            }
            finally{
                setDataLoading(false)
            }
        }
        fetchLocations()
    }, [])

    return (
        <>
            <BannerWrapper>
                <Banner 
                    picture={headerHome} 
                    title="Chez vous, partout et ailleurs" 
                />
            </BannerWrapper>
            <HomeContainer>
                <CardsGrid>
                    {locationsData.map((location) => (
                        <Card
                            key={location.id}
                            id={location.id}
                            title={location.title}
                            picture={location.cover || location.picture}
                        />
                        
                    ))}
                </CardsGrid>
            </HomeContainer>
        </>
    )
}

export default Home