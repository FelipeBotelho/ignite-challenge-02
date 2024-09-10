import styled from 'styled-components'
import { fonts } from '../../styles/fonts'
import { buttons } from '../../styles/buttons'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  background-color: ${({ theme }) => theme.base['base-card']};
  padding: 0 1.25rem 1.25rem;
  border-radius: 6px 36px;
  width: 16rem;
`

export const CoffeeImg = styled.img`
  align-self: center;
  margin-top: -1.25rem;
  max-width: 7.5rem;
  max-height: 7.5rem;
`

export const Tags = styled.div`
  display: flex;
  align-items: center;
  align-self: center;
  margin-top: 0.75rem;
  gap: 0.25rem;

  span {
    padding: 0.25rem 0.5rem;
    border-radius: 6.25rem;
    background-color: ${({ theme }) => theme.product['yellow-light']};
    color: ${({ theme }) => theme.product['yellow-dark']};
    text-transform: uppercase;
    ${buttons.tag}
  }
`

export const Title = styled.h3`
  margin-top: 1rem;

  color: ${({ theme }) => theme.base['base-subtitle']};
  ${fonts.titleS}
`

export const Description = styled.span`
  margin-top: 0.5rem;
  width: 100%;

  color: ${({ theme }) => theme.base['base-label']};
  ${fonts.textS}
`

export const Control = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 2rem;
`

export const Price = styled.div`
  display: flex;
  align-items: baseline;
  gap: 0.125rem;

  span:first-child {
    ${fonts.textS};
    color: ${({ theme }) => theme.base['base-text']};
  }

  span:last-child {
    ${fonts.titleM};
    color: ${({ theme }) => theme.base['base-text']};
  }
`

export const Order = styled.div<{ $itemAdded?: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  > button {
    background-color: ${({ theme, $itemAdded }) =>
      $itemAdded ? theme.product['yellow-dark'] : theme.product['purple-dark']};
    transition: background-color 0.2s;
    border-radius: 0.375rem;
    padding: 0.5rem;
    display: flex;

    &:hover {
      background-color: ${({ theme, $itemAdded }) =>
        $itemAdded ? theme.product.yellow : theme.product.purple};
    }
  }
`
