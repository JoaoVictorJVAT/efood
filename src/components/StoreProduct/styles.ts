import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  background-color: ${cores.rosa};
  color: ${cores.branco};
  padding: 8px;
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;
`

export const Image = styled.img`
  width: 100%;
  margin-bottom: 8px;
`

export const Titulo = styled.h3`
  color: ${cores.branco};
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 8px;
  margin-top: 8px;
`

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  color: ${cores.branco};
  margin-bottom: 16px;
`

export const Button = styled.button`
  background-color: ${cores.bege};
  color: ${cores.rosa};
  font-weight: bold;
  font-size: 14px;
  padding: 8px 16px;
  border: none;
  cursor: pointer;
`
