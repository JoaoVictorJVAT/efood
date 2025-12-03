import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useGetRestaurantesQuery } from '../../services/api'

import Modal from '../../components/Modal'
import Footer from '../../components/Footer'
import StoreProduct from '../../components/StoreProduct'
import { Container } from '../../components/StoreList/styles'

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

import bannerImage from '../../assets/images/fundo.png'
import logo from '../../assets/images/logo.png'

import Product from '../../components/models/Product'

const StorePage = () => {
  const { id } = useParams<{ id: string }>()
  const { data: restaurantes, isLoading } = useGetRestaurantesQuery()
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  if (isLoading) {
    return <p>Carregando...</p>
  }

  const restaurante = restaurantes?.find((item) => item.id === Number(id))

  if (!restaurante) {
    return <p>Restaurante não encontrado.</p>
  }

  const handleOpenModal = (product: Product) => {
    setSelectedProduct(product)
    setModalOpen(true)
  }

  return (
    <>
      <Banner style={{ backgroundImage: `url(${bannerImage})` }}>
        <BannerInfos className="container">
          <BannerTitulo>Restaurantes</BannerTitulo>
          <img src={logo} alt="Logo efood" />
          <InfoCarrinho>0 produto(s) no carrinho</InfoCarrinho>
        </BannerInfos>
      </Banner>

      <Banner2 style={{ backgroundImage: `url(${restaurante.capa})` }}>
        <Nacionalidade className="container">{restaurante.tipo}</Nacionalidade>
        <Titulo className="container">{restaurante.titulo}</Titulo>
      </Banner2>

      <Container className="container">
        <List>
          {restaurante.cardapio.map((produto) => (
            <StoreProduct
              key={produto.id}
              image={produto.foto}
              title={produto.nome}
              description={produto.descricao}
              price={produto.preco}
              aoAbrirModal={() =>
                handleOpenModal({
                  id: produto.id,
                  image: produto.foto,
                  title: produto.nome,
                  description: produto.descricao,
                  price: produto.preco,
                  porcao: produto.porcao
                })
              }
            />
          ))}
        </List>
      </Container>

      {selectedProduct && (
        <Modal
          aberto={modalOpen}
          aoFechar={() => setModalOpen(false)}
          titulo={selectedProduct.title}
          descricao={selectedProduct.description}
          imagem={selectedProduct.image}
          preco={selectedProduct.price}
          porcao={selectedProduct.porcao}
        />
      )}
      <Footer />
    </>
  )
}

export default StorePage
