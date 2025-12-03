import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Card = styled.div`
  background-color: ${cores.branco};
  border: 0px 1px 1px 1px;
  position: relative;
  display: flex;
  flex-direction: column;

  ${TagContainer} {
    margin-right: 8px;
  }

  img {
    width: 472px;
    height: 217px;
  }
`

export const Titulo = styled.h3`
  font-weight: bold;
  font-size: 18px;
  display: block;
`

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin-left: 8px;
  margin-bottom: 16px;
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`

export const Loja = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 8px;
  margin-bottom: 16px;
  margin-right: 8px;
  margin-left: 8px;
`

export const Nota = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  p {
    font-size: 18px;
    font-weight: bold;
    color: ${cores.rosa};
    margin: 0;
  }

  img {
    width: 21px;
    height: 21px;
  }
`

export const BotaoContainer = styled.div`
  margin-top: auto;
`
