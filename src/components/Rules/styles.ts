import styled, { css } from 'styled-components'
import { RulesProps } from '.'

const wrapperModifiers = {
  fullScreen: () => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    svg {
      margin-top: 6rem;
      margin-bottom: 6.5rem;
    }
  `,
  default: () => css`
    width: 45rem;
    height: 50rem;
  `
}

export const Wrapper = styled.div<RulesProps>`
  ${({ theme, fullScreen }) => css`
    background-color: ${theme.colors.white};
    padding: ${theme.spacings.small} ${theme.spacings.medium};
    border-radius: 0.8rem;

    ${fullScreen && wrapperModifiers.fullScreen()}
    ${!fullScreen && wrapperModifiers.default()}
  svg {
      margin-left: ${theme.spacings.medium};
    }
  `}
`

export const Title = styled.h2`
  ${({ theme }) => css`
    text-transform: uppercase;
    color: ${theme.colors.DarkText};
  `}
`
export const Close = styled.div`
  cursor: pointer;
`

export const Svg = styled.div``

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: ${theme.spacings.xlarge};
  `}
`
