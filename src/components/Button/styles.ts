import styled, { css, DefaultTheme } from 'styled-components'
import { ButtonProps } from '.'

type WrapperProps = Pick<ButtonProps, 'color'>

const wrapperModifers = {
  light: (theme: DefaultTheme) => css`
    background: ${theme.colors.white};
    color: ${theme.colors.DarkText};
    height: ${theme.spacings.xxlarge};
    font-size: ${theme.font.sizes.xlarge};
  `,
  dark: (theme: DefaultTheme) => css`
    background: ${theme.colors.background.from};
    color: ${theme.colors.white};
    border: 0.2rem solid ${theme.colors.white};
    height: ${theme.spacings.xlarge};
    font-size: ${theme.font.sizes.large};
  `
}

export const Wrapper = styled.main<WrapperProps>`
  ${({ theme, color }) => css`
    display: flex;
    letter-spacing: 0.3rem;
    font-weight: 600;
    text-transform: uppercase;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border-radius: ${theme.border.radius};
    text-decoration: none;
    ${!!color && wrapperModifers[color](theme)}
  `}
`
