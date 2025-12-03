import { Card, Titulo, Descricao, Button } from './styles'
type Props = {
  title: string
  description: string
  image: string
  price: number
  aoAbrirModal: () => void
}

const StoreProduct = ({ title, description, image, aoAbrirModal }: Props) => {
  return (
    <>
      <Card>
        <img src={image} />
        <Titulo>{title}</Titulo>
        <Descricao>{description}</Descricao>
        <Button
          type="button"
          title="Adicionar ao carrinho"
          onClick={aoAbrirModal}
        >
          Adicionar ao carrinho
        </Button>
      </Card>
    </>
  )
}

export default StoreProduct
