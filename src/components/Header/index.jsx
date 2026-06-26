import styled from 'styled-components'
import logo from '../../assets/logo_header.svg'
import { NavLink as RouterNavLink } from 'react-router-dom'

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

const NavLink = styled(RouterNavLink)`
    color: #000000;
    text-decoration: none;

    &:visited {
        color: #000000;
    }

    &:hover {
        color: #000000;
    }

    &:active {
        color: #000000;
    }

    &.active {
        text-decoration: underline;
        text-underline-offset: 4px;
        text-decoration-thickness: 2px;
    }
`;

function Header () {
    return (
        <HeaderContainer>
            <Logo>
                <LogoImg src={logo} alt="Kasa" />
            </Logo>
            <Nav>
                <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')}>
                    Accueil
                </NavLink>
                <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>
                    A propos
                </NavLink>
            </Nav>
        </HeaderContainer>
    )
}

export default Header