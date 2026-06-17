import styled from 'styled-components'
import logo from '../../assets/logo_header.svg'
import { Link } from 'react-router-dom'

const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
    padding: 24px clamp(20px, 5vw, 40px);
    box-sizing: border-box;
`;

const Logo = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 18px;
`;

const LogoImg = styled.img`
    width: 210.32px;
    height: 68px;

    @media (max-width: 768px) {
        width: 145px;
        height: 47px;
    }
`;

const Nav = styled.nav`
    display: flex;
    align-items: center;
    gap: 57px;

    @media (max-width: 768px) {
        gap: 26px;
        font-size: 12px;
        text-transform: uppercase;
    }
`;

function Header () {
    return (
        <HeaderContainer>
            <Logo>
                <LogoImg src={logo} alt="Kasa" />
            </Logo>
            <Nav>
                <Link to="/">Accueil</Link>
                <Link to="/about">A propos</Link>
            </Nav>
        </HeaderContainer>
    )
}

export default Header