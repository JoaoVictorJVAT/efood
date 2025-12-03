import Button from '../Button'
import Tag from '../Tag'
import estrela from '../../assets/images/estrela.png'

import {
  Card,
  Descricao,
  Titulo,
  Infos,
  Loja,
  Nota,
  BotaoContainer
} from './styles'

type Props = {
  title: string
  image: string
  description: string
  infos: string[]
  id: string | number
  avaliacao: number
}

const RestaurantCard = ({
  title,
  image,
  description,
  infos,
  id,
  avaliacao
}: Props) => (
  <Card>
    <img src={image} alt={title} />
    <Infos>
      {infos.map((info) => (
        <Tag size="small" key={info}>
          {info}
        </Tag>
      ))}
    </Infos>
    <Loja>
      <Titulo>{title}</Titulo>
      <Nota>
        <p>{avaliacao.toFixed(1)}</p>
        <img src={estrela} />
      </Nota>
    </Loja>
    <Descricao>{description}</Descricao>
    <BotaoContainer>
      <Button type="link" to={`/perfil/${id}`} title="Ver detalhes da loja">
        Saiba mais
      </Button>
    </BotaoContainer>
  </Card>
)

export default RestaurantCard
