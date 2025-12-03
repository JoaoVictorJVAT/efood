import { Overlay, Dialog, CloseButton, AddButton } from './styles'
import fechar from '../../assets/images/fechar.png'

type Props = {
  aberto: boolean
  aoFechar: () => void
  titulo: string
  descricao: string
  imagem: string
  preco: number
  porcao: string
}

const Modal = ({
  aberto,
  aoFechar,
  titulo,
  descricao,
  imagem,
  preco,
  porcao
}: Props) => {
  if (!aberto) return null

  return (
    <Overlay onClick={aoFechar}>
      <Dialog onClick={(e) => e.stopPropagation()}>
        <img src={imagem} alt={titulo} />
        <div className="content">
          <h2>{titulo}</h2>
          <p>{descricao}</p>
          <br />
          <br />
          <strong>Serve: {porcao}</strong>
          <AddButton>
            Adicionar ao carrinho — R$ {preco.toFixed(2).replace('.', ',')}
          </AddButton>
          <CloseButton onClick={aoFechar}>
            <img src={fechar} alt="Fechar" />
          </CloseButton>
        </div>
      </Dialog>
    </Overlay>
  )
}

export default Modal
