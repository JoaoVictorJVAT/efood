import styled from 'styled-components'

import { cores } from '../../styles'

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Dialog = styled.div`
  position: relative;
  background-color: ${cores.rosa};
  max-width: 1024px;
  width: 100%;
  padding: 32px;
  display: flex;
  gap: 16px;
  color: ${cores.branco};

  img {
    width: 280px;
  }

  h2 {
    font-size: 18px;
    margin: 0;
    font-weight: bold;
  }

  .content {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  p {
    font-size: 14px;
    line-height: 22px;
    margin: 0;
  }
`

export const AddButton = styled.button`
  background-color: ${cores.bege};
  color: ${cores.rosa};
  width: 218px;
  height: 24px;
  font-weight: bold;
  font-size: 14px;
  border: none;
  cursor: pointer;
  margin-bottom: 27px;

  &:hover {
    opacity: 0.9;
  }
`

export const CloseButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;

  img {
    width: 16px;
    height: 16px;
  }
`
