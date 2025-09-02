import StoreList from '../../components/StoreList'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Eatery from '../../components/models/Eatery'

import sushi from '../../assets/images/sushi.png'
import macarrao from '../../assets/images/macarrao.png'

const restaurantes: Eatery[] = [
  {
    id: 'japonesa',
    title: 'Hioki Sushi',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    image: sushi,
    infos: ['Destaque da semana', 'Japonesa']
  },
  {
    id: 'italiana',
    title: 'La Dolce Vita Trattoria',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: macarrao,
    infos: ['Italiana']
  },
  {
    id: 'italiana',
    title: 'La Dolce Vita Trattoria',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: macarrao,
    infos: ['Italiana']
  },
  {
    id: 'italiana',
    title: 'La Dolce Vita Trattoria',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: macarrao,
    infos: ['Italiana']
  },
  {
    id: 'italiana',
    title: 'La Dolce Vita Trattoria',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: macarrao,
    infos: ['Italiana']
  },
  {
    id: 'italiana',
    title: 'La Dolce Vita Trattoria',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: macarrao,
    infos: ['Italiana']
  }
]

const Home = () => (
  <>
    <Header />
    <StoreList eateries={restaurantes} />
    <Footer />
  </>
)

export default Home
