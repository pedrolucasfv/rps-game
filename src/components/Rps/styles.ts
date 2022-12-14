import styled, { css, DefaultTheme } from 'styled-components'
import { RpsProps } from '.'

const wrapperModifiers = {
  rock: (theme: DefaultTheme) => css`
    border-color: ${theme.colors.rock.from};
    svg {
      margin-top: 0.6rem;
    }
  `,
  paper: (theme: DefaultTheme) => css`
    border-color: ${theme.colors.paper.from};
  `,
  scissors: (theme: DefaultTheme) => css`
    border-color: ${theme.colors.scissors.from};
  `,
  lizard: (theme: DefaultTheme) => css`
    border-color: ${theme.colors.lizard.from};
    svg {
      margin-top: 0.1rem;
      margin-left: 0.1rem;
    }
  `,
  spock: (theme: DefaultTheme) => css`
    border-color: ${theme.colors.spock.from};
    svg {
      margin-left: 1rem;
    }
  `,
  small: () => css`
    height: 9rem;
    width: 9rem;
    border-width: 1.2rem;
  `,
  medium: () => css`
    height: 14rem;
    width: 14rem;
  `,
  large: () => css`
    height: 22rem;
    width: 22rem;
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
