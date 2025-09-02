import { Card, Image, Titulo, Descricao, Button } from './styles'

type Props = {
  title: string
  description: string
  image: string
}

const StoreProduct = ({ title, description, image }: Props) => (
  <Card>
    <Image src={image} alt={title} />
    <Titulo>{title}</Titulo>
    <Descricao>{description}</Descricao>
    <Button type="button">Adicionar ao carrinho</Button>
  </Card>
)

export default StoreProduct
