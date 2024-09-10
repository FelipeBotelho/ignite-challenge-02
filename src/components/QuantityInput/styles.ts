import styled from 'styled-components'

export const Container = styled.div`
  padding: 1rem;
  background-color: ${({ theme }) => theme.base['base-button']};
  border-radius: 0.375rem;

  display: flex;
  gap: 0.25rem;

  button {
    background-color: transparent;
    display: flex;
    align-items: center;
  }

  button svg {
    color: ${({ theme }) => theme.product.purple};
    transition: all 0.2s;
    &:hover {
      color: ${({ theme }) => theme.product['purple-dark']};
    }
  }
  span {
    padding-top: 0.125rem;
    color: ${({ theme }) => theme.base['base-title']};
  }
`
