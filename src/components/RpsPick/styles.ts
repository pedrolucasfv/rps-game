import styled from 'styled-components'

export const Wrapper = styled.main`
  display: grid;
  grid-template-rows: 100px 100px;
  grid-template-columns: 120px 120px 100px;
  > svg {
    margin-top: 4rem;
    margin-left: 2rem;
    grid-column: 1 / span 2;
    grid-row: 1 / span 2;
  }
`
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
`
