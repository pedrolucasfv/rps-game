import styled, { css } from 'styled-components'
import theme from 'styles/theme'

export const Wrapper = styled.main`
  height: 150vh; //consertar isso aqui
  width: 100%;

  background-image: linear-gradient(
    ${theme.colors.background.from},
    ${theme.colors.background.to}
  );

  display: grid;
  grid-template-rows: 75px 150px 800px 150px;
  grid-template-columns: 400px 100px 400px 400px 100px 400px;
`
export const Text = styled.h3`
  color: ${theme.colors.white};
  margin: ${theme.spacings.medium} 2rem;
`

const contentModifiers = {
  pick: () => css`
    grid-column: 3 / 5;
  `,
  result: () => css`
    grid-column: 2 / 6;
  `
}
type ContentProps = {
  stage: 'pick' | 'result'
}

export const Content = styled.div<ContentProps>`
  ${({ stage }) => css`
    display: flex;
    justify-content: space-around;
    align-items: center;
    ${contentModifiers[stage]}
    grid-row: 3;
  `}
`
export const YouPick = styled.div``
export const ComputerPick = styled.div``
export const Header = styled.div`
  grid-row: 2;
  grid-column: 3 / 5;
`
