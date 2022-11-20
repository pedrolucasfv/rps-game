import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    padding: ${theme.spacings.xsmall} ${theme.spacings.medium};
    width: 43rem;
    svg {
      margin-left: ${theme.spacings.medium};
    }
    border-radius: 0.8rem;
  `}
`

export const Title = styled.h2`
  ${({ theme }) => css`
    text-transform: uppercase;
    color: ${theme.colors.DarkText};
    margin-bottom: ${theme.spacings.large};
  `}
`
export const Close = styled.div``

export const Svg = styled.div``

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
`
