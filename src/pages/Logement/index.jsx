import { useEffect,useState } from 'react'
import Carroussel from '../../components/Carroussel'
import { useParams, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import HeaderLogement from '../../components/HeaderLogement';
import MenuRoulant from '../../components/MenuRoulant';

const SliderOverlay = styled.div`
    position: relative;
    width: 100%;
    max-width: 1300px;
    margin: 40px auto 0;
    box-sizing: border-box;
    z-index: 2;

    @media (max-width: 375px) {
        margin: 16px auto 0;
        padding: 0 20px;
        width: auto;
    }
`;

const ImgCarrousel = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
`;

const MenuRoulantContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    width: 100%;
    max-width: 1300px;
    margin: 40px auto 0;
    box-sizing: border-box;
    column-gap: 80px;

    @media (max-width: 768px) {
        flex-direction: column;
        row-gap: 20px;
    }

    @media (max-width: 375px) {
        margin: 20px auto 0;
        padding: 0 20px;
        width: auto;
        row-gap: 16px;
        margin-bottom: 20px;
    }
`;

const LeftMenu = styled.div`
    flex: 1;
    min-width: 0;
`;

const RightMenu = styled.div`
    flex: 1;
    min-width: 0;
`;

function Logement() {
    const [isDataLoading, setDataLoading] = useState(false)
    const [error, setError] = useState(false)
    const [logementData, setLogement] = useState(null)
    const navigate = useNavigate();
    
    // Récupération de l'ID dans les paramètres de l'URL
    let params =  useParams ();

    useEffect(() => {
        async function fetchLocgements() {
            setDataLoading(true)
            try{
                const response = await fetch(`http://localhost:8080/api/properties/${params.id}`)
                
                if (!response.ok) {
                    throw new Error(`Erreur HTTP: ${response.status}`)
                }
                
                const logementData = await response.json()
                console.log('Données reçues:', logementData)
                setLogement(logementData)
                document.title = `Kasa - ${logementData.title}`
            }
            catch(err){
                console.log('===== error =====', err)
                setError(true)
                navigate('/error')
            }
            finally{
                setDataLoading(false)
            }
        }
        fetchLocgements()
    }, [])



    return (
        <>
        <SliderOverlay>
            {logementData && (
                <Carroussel 
                    pictures={logementData.pictures}
                />
            )}
        </SliderOverlay>
        {logementData &&  (
        <HeaderLogement 
            key={logementData.id}
            title={logementData.title}
            location={logementData.location}
            tags={logementData.tags}
            host={logementData.host}
            rating={logementData.rating}    
        />
        )}
        {logementData &&  (
        <>
            <MenuRoulantContainer>
                <LeftMenu>
                    <MenuRoulant
                        title="Description"
                        content={logementData.description}
                    />
                </LeftMenu>
                <RightMenu>
                    <MenuRoulant
                        title="Équipements"
                        content={logementData.equipments}
                    />
                </RightMenu>
            </MenuRoulantContainer>
        </>
        )}
        </>
    )
}
export default Logement