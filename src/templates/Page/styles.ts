import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import theme from 'styles/theme'

export const Wrapper = styled.main`
  height: 100vh; //consertar isso aqui
  width: 100%;

  background-image: linear-gradient(
    ${theme.colors.background.from},
    ${theme.colors.background.to}
  );

  display: grid;
  grid-template-rows: 3% 13% 74% 10%;
  grid-template-columns: 5% 12% 8% 25% 25% 8% 12% 5%;

  ${media.lessThan('small')`
  grid-template-rows: 3% 13% 60% 10% 15%;
  grid-template-columns: 5% 12% 8% 25% 25% 8% 12% 5%;
  `}
`
export const Text = styled.h3`
  color: ${theme.colors.white};
  margin: ${theme.spacings.medium} 2rem;
`

const contentModifiers = {
  pick: () => css`
    grid-column: 4 / 6;
    margin-top: 4rem;
    align-items: flex-end;
  `,
  result: () => css`
    grid-column: 3 / 7;
    align-items: center;
  `
}
type ContentProps = {
  stage: 'pick' | 'result'
}

export const Content = styled.div<ContentProps>`
  ${({ stage }) => css`
    display: flex;
    justify-content: space-around;
    ${contentModifiers[stage]}
    grid-row: 3;
  `}
`
export const YouPick = styled.div`
  margin-right: 3rem;
`
export const ComputerPick = styled.div`
  margin-left: 3rem;
`
export const Header = styled.div`
  grid-row: 2;
  grid-column: 4 / 6;
  ${media.lessThan('small')`
  grid-row: 2;
  grid-column: 2 / 8;
  `}
`
export const Rules = styled.div`
  ${media.lessThan('small')`
  position: absolute;
  height: 100vh;
  width: 100%;
  `}
  ${media.greaterThan('small')`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-row: 2 / 8;
  grid-column: 4 / 6;
  `}
`

export const ButtonRules = styled.div`
  grid-row: 4;
  grid-column: 7;
  ${media.lessThan('small')`
  grid-row: 5;
  grid-column: 4/6;
  margin: 2rem;
  `}
`
