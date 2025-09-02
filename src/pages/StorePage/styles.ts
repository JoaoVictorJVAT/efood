import styled from 'styled-components'
import { cores } from '../../styles'

export const Banner = styled.div`
  height: 140px;
  background-size: cover;
  background-position: center;
  display: flex;
`

export const BannerInfos = styled.div`
  width: 100%;
  max-width: 1024px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const BannerTitulo = styled.h2`
  font-family: Roboto;
  font-weight: 900;
  font-size: 18px;
  line-height: 100%;
  letter-spacing: 0%;
  text-align: center;
`
export const InfoCarrinho = styled.span`
  font-family: Roboto;
  font-weight: 900;
  font-size: 18px;
  line-height: 100%;
  letter-spacing: 0%;
  text-align: right;
`

export const Banner2 = styled.div`
  height: 240px;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

export const Nacionalidade = styled.span`
  font-family: Roboto;
  font-weight: 400;
  font-size: 32px;
  line-height: 100%;
  letter-spacing: 0%;
  color: ${cores.branco};
`

export const Titulo = styled.h2`
  font-family: Roboto;
  font-weight: 900;
  font-size: 32px;
  line-height: 100%;
  letter-spacing: 0%;
  color: ${cores.branco};
`

export const List = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
`
