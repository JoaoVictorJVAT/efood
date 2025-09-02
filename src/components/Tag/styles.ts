import styled from 'styled-components'
import { cores } from '../../styles'

import { Props } from '.'

export const TagContainer = styled.div<Props>`
  background-color: ${cores.rosa};
  color: ${cores.bege2};
  font-weight: bold;
  font-size: ${(props) => props.size === 'small' && '12px'};
  padding: ${(props) => props.size === 'small' && '6px 4px'};
  display: inline-block;
`
