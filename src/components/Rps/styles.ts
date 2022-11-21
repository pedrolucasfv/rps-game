import styled, { css, DefaultTheme } from 'styled-components'
import { RpsProps } from '.'

const wrapperModifiers = {
  rock: (theme: DefaultTheme) => css`
    border-color: ${theme.colors.rock.from};
  `,
  paper: (theme: DefaultTheme) => css`
    border-color: ${theme.colors.paper.from};
  `,
  scissors: (theme: DefaultTheme) => css`
    border-color: ${theme.colors.scissors.from};
  `,
  small: () => css`
    height: 12rem;
    width: 12rem;
    border-width: 1.2rem;
  `,
  medium: () => css`
    height: 16rem;
    width: 16rem;
  `,
  large: () => css`
    height: 26rem;
    width: 26rem;
  `,
  noColor: (theme: DefaultTheme) => css`
    background: #e1e4ed;
    border-color: ${theme.colors.lightGray};

    svg {
      color: ${theme.colors.HeaderOutline};
    }
  `
}

export const Wrapper = styled.main<RpsProps>`
  ${({ theme, type, size, noColor }) => css`
    background: ${theme.colors.white};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 1.6rem solid gray;
    ${type && wrapperModifiers[type](theme)}
    ${size && wrapperModifiers[size]()}
    ${noColor && wrapperModifiers.noColor(theme)}
  `}
`
