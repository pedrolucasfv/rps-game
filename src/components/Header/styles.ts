import styled from 'styled-components'
import theme from 'styles/theme'

export const Wrapper = styled.main`
  padding: ${theme.spacings.xsmall};
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 0.3rem solid ${theme.colors.gray};
  border-radius: 1.5rem;
`
export const Logo = styled.div`
  cursor: pointer;
`
