import Footer from '../../components/Footer'
import StoreProduct from '../../components/StoreProduct'

import {
  Banner,
  Banner2,
  BannerInfos,
  BannerTitulo,
  InfoCarrinho,
  List,
  Nacionalidade,
  Titulo
} from './styles'

import { Container } from '../../components/StoreList/styles'

import bannerImage from '../../assets/images/fundo.png'
import pizza from '../../assets/images/pizza.png'
import logo from '../../assets/images/logo.png'
import macarao from '../../assets/images/macarrao.png'
import Product from '../../components/models/Product'

const products: Product[] = [
  {
    id: 1,
    image: pizza,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 2,
    image: pizza,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 3,
    image: pizza,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 4,
    image: pizza,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 5,
    image: pizza,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 6,
    image: pizza,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  }
]

const StorePage = () => {
  return (
    <>
      <Banner style={{ backgroundImage: `url(${bannerImage})` }}>
        <BannerInfos className="container">
          <BannerTitulo>Restaurantes</BannerTitulo>
          <img src={logo} />
          <InfoCarrinho>0 produto(s) no carrinho</InfoCarrinho>
        </BannerInfos>
      </Banner>

      <Banner2 style={{ backgroundImage: `url(${macarao})` }}>
        <Nacionalidade className="container">Italiana</Nacionalidade>
        <Titulo className="container">La Dolce Vita Trattoria</Titulo>
      </Banner2>

      <Container className="container">
        <List>
          {products.map((product) => (
            <StoreProduct
              key={product.id}
              image={product.image}
              title={product.title}
              description={product.description}
            />
          ))}
        </List>
      </Container>
      <Footer />
    </>
  )
}

export default StorePage
