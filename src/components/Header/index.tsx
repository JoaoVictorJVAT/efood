import { Imagem, Titulo, Logo } from './styles'

import headerImg from '../../assets/images/fundo.png'
import logoImg from '../../assets/images/logo.png'

const Header = () => (
  <Imagem style={{ backgroundImage: `url(${headerImg})` }}>
    <div className="container">
      <div className="conteudo">
        <Logo src={logoImg} alt="Logo" />
        <Titulo>
          Viva experiências gastronômicas
          <br />
          no conforto da sua casa
        </Titulo>
      </div>
    </div>
  </Imagem>
)

export default Header
