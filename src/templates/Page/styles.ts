import styled from 'styled-components'
import theme from 'styles/theme'

export const Wrapper = styled.main`
  height: 100vh;
  width: 100%;
  background-image: linear-gradient(
    ${theme.colors.background.from},
    ${theme.colors.background.to}
  );
`
export const Text = styled.h3`
  color: ${theme.colors.white};
  margin: ${theme.spacings.medium} 2rem;
`
export const Content = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
`
export const YouPick = styled.div``
export const ComputerPick = styled.div``
export const Header = styled.div`
  width: 75%;
  margin-left: 20vh;
  padding-top: 5rem;
`
