import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Text = styled.h2`
  ${({ theme }) => css`
    font-size: 4.5rem;
    margin-bottom: ${theme.spacings.xxsmall};
    color: ${theme.colors.white};
  `}
`
export const Button = styled.div``

export const Content = styled.div``
