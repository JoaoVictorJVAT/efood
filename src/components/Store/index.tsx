import Button from '../Button'
import Tag from '../Tag'
import estrela from '../../assets/images/estrela.png'

import { Card, Descricao, Titulo, Infos, Loja, Nota } from './styles'

type Props = {
  title: string
  image: string
  description: string
  infos: string[]
  id?: string
}

const Store = ({ title, image, description, infos, id }: Props) => (
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
        <p>4.9</p>
        <img src={estrela} />
      </Nota>
    </Loja>

    <Descricao>{description}</Descricao>
    {id === 'japonesa' ? (
      <Button type="link" to="/perfil" title="Ver detalhes da loja">
        Saiba mais
      </Button>
    ) : (
      <Button type="button" title="Desabilitado">
        Saiba mais
      </Button>
    )}
  </Card>
)

export default Store
