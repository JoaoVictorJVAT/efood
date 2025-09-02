import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.footer`
  background-color: ${cores.bege};
  padding: 32px 0;
  text-align: center;
`

export const Logo = styled.img`
  width: 100px;
  margin-bottom: 16px;
`

export const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-bottom: 16px;

  img {
    width: 24px;
    height: 24px;
  }
`

export const FooterText = styled.p`
  font-size: 14px;
  color: ${cores.rosa};
`
