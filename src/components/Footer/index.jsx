import styled from 'styled-components'
import logo from '../../assets/logo_footer.svg'

const FooterContainer = styled.footer`
  background-color: #000000;
  color: #ffffff;
  text-align: center;
  padding: 40px 20px;
  margin-top: auto;

  @media (max-width: 375px) {
    padding: 30px 20px 20px;
  }
`

const Logo = styled.div`
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 20px;
  letter-spacing: 2px;
`

const LogoImg = styled.img`
    weight: 122px;
    height: 39.44px;`
;

const Copyright = styled.p`
  font-size: 14px;
  margin: 0;
  opacity: 0.8;

  @media (max-width: 375px) {
    font-size: 12px;
  }
`

function Footer() {
  return (
    <FooterContainer>
      <Logo>
        <LogoImg src={logo} alt="Shiny" />
      </Logo>
      <Copyright>© 2020 Kasa. All rights reserved</Copyright>
    </FooterContainer>
  )
}

export default Footer