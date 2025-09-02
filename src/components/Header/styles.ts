import styled from 'styled-components'

export const Imagem = styled.div`
  width: 100%;
  height: 384px;
  display: block;
  background-repeat: repeat;
  background-size: auto;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  .conteudo {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 138px;
  }
`
export const Logo = styled.img`
  margin-bottom: 16px;
`

export const Titulo = styled.h2`
  font-size: 36px;
  font-weight: bold;
`

export const Conteudo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 138px;
`
