import styled from 'styled-components'
import { fonts } from '../../styles/fonts'

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const Container = styled.label<{ $hasError?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 0.375rem;
  border: 1px solid ${({ theme }) => theme.base['base-button']};
  border-radius: 0.375rem;

  background-color: ${({ theme }) => theme.base['base-input']};

  transition: all 0.2s;

  &[data-state='focused'] {
    border-color: ${({ theme }) => theme.product['yellow-dark']};
  }

  &[data-state='blurred'] {
    border-color: ${({ theme }) => theme.base['base-button']};
  }

  input {
    color: ${({ theme }) => theme.base['base-text']};
    width: 100%;
    background-color: transparent;
    border: ${({ $hasError }) => ($hasError ? '1px solid red' : 'none')};
    padding: 0.75rem;
    outline: none;

    &::placeholder {
      color: ${({ theme }) => theme.base['base-label']};
    }
  }

  span {
    color: ${({ theme }) => theme.base['base-label']};
    padding-right: 0.75rem;
    ${fonts.textS};
    font-style: italic;
  }
`

export const ErrorMessage = styled.p`
  ${fonts.textXS};
  font-weight: 400;
  color: red;
`
