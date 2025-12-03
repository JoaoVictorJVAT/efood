import { Container, Logo, SocialLinks, FooterText } from './styles'
import logo from '../../assets/images/logo.png'
import facebook from '../../assets/images/facebook.png'
import instagram from '../../assets/images/instagram.png'
import twitter from '../../assets/images/twitter.png'

const Footer = () => (
  <Container>
    <Logo src={logo} />
    <SocialLinks>
      <a href="#">
        <img src={facebook} alt="Facebook" />
      </a>
      <a href="#">
        <img src={instagram} alt="Instagram" />
      </a>
      <a href="#">
        <img src={twitter} alt="Twitter" />
      </a>
    </SocialLinks>
    <FooterText>&copy; 2025 Efood - Todos os direitos reservados</FooterText>
  </Container>
)

export default Footer
