import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { cores } from '../../styles'

export const ButtonContainer = styled.button`
  color: ${cores.bege2};
  background-color: ${cores.rosa};
  font-family: Roboto;
  font-weight: bold;
  font-size: 14px;
  width: 100%;
  padding: 4px 6px;
  text-decoration: none;
  cursor: pointer;
  display: inline-block;
  text-align: center;
  margin: 8px;
  border: none;
  text-decoration: none;
`

export const ButtonLink = styled(Link)`
  color: ${cores.bege2};
  background-color: ${cores.rosa};
  font-family: Roboto;
  font-weight: bold;
  font-size: 14px;
  padding: 4px 6px;
  text-decoration: none;
  cursor: pointer;
  display: inline-block;
  text-align: center;
  margin: 8px;
  border: none;
  text-decoration: none;
`
