import styled, { css } from 'styled-components'

const wrapperModifiers = {
  small: () => css`
    height: 4rem;
    width: 4rem;
  `,
  medium: () => css`
    height: 7rem;
    width: 7rem;
  `,
  large: () => css`
    height: 12rem;
    width: 12rem;
  `
}
type WrapperProps = {
  size: 'small' | 'medium' | 'large'
}
export const Wrapper = styled.div<WrapperProps>`
  ${({ size }) => css`
    color: #3b4262;
    ${wrapperModifiers[size]}
  `}
`
