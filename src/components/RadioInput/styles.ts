import styled from 'styled-components'
import { buttons } from '../../styles/buttons'

export const Container = styled.label`
  padding: 1rem;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  border-radius: 0.375rem;
  border: 1px solid transparent;
  background-color: ${({ theme }) => theme.base['base-button']};
  color: ${({ theme }) => theme.base['base-text']};
  text-transform: uppercase;
  ${buttons.buttonM};
  transition: all 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.base['base-hover']};
  }

  &[data-state='true'] {
    background-color: ${({ theme }) => theme.product['purple-light']};
    border-color: ${({ theme }) => theme.product.purple};
  }

  input {
    display: none;
  }

  svg {
    color: ${({ theme }) => theme.product.purple};
  }
`
