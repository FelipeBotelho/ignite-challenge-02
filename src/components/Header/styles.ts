import styled from 'styled-components'
import { fonts } from '../../styles/fonts'

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 72.5rem;
  padding: 2rem 0.625rem;
  margin: 0 auto;
`

export const CheckoutArea = styled.aside`
  display: flex;
  gap: 0.75rem;
  .location {
    display: flex;
    align-items: center;
    gap: 0.25rem;

    background-color: ${(props) => props.theme.product['purple-light']};
    svg {
      color: ${(props) => props.theme.product.purple};
    }
    span {
      color: ${(props) => props.theme.product['purple-dark']};
    }
    padding: 0.625rem 0.5rem;
    border-radius: 6px;
  }
  a {
    display: flex;
    align-items: center;
    background-color: ${(props) => props.theme.product['yellow-light']};
    color: ${(props) => props.theme.product['yellow-dark']};
    padding: 0.5rem;
    border-radius: 6px;
    position: relative;
    &[aria-disabled='true'] {
      pointer-events: none;
    }
    span {
      ${fonts.textS};
      font-weight: bold;
      color: ${({ theme }) => theme.white};
      background-color: ${({ theme }) => theme.product['yellow-dark']};
      border-radius: 50%;
      width: 1.25rem;
      height: 1.25rem;
      display: flex;
      align-items: center;
      justify-content: center;

      position: absolute;
      top: 0px;
      right: 0px;
      transform: translate(50%, -50%);
    }
  }
`
