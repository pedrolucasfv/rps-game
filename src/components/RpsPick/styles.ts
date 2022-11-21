import styled from 'styled-components'

export const Wrapper = styled.main``
export const Rock = styled.div`
  grid-row: 1;
  grid-column: 1;
  cursor: pointer;
`
export const Paper = styled.div`
  grid-column: 3;
  grid-row: 1;
  cursor: pointer;
`
export const Scissors = styled.div`
  grid-column: 2;
  cursor: pointer;
  display: flex;
  justify-content: center;
`
export const Content = styled.div`
  display: grid;
  grid-template-rows: 20rem 20rem;
  grid-template-columns: 20rem auto 25rem;
  > svg {
    height: 100rem;
    margin-top: 5rem;
    margin-left: 7rem;
    grid-column: 1 / span 2;
    grid-row: 1 / span 2;
  }
`
