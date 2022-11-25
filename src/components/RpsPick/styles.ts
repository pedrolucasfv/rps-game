import styled from 'styled-components'

export const Wrapper = styled.main``

// RPS COMPONENTS  -------------------
export const RpsRock = styled.div`
  grid-row: 1;
  grid-column: 1;
  cursor: pointer;
`
export const RpsPaper = styled.div`
  grid-column: 3;
  grid-row: 1;
  cursor: pointer;
`
export const RpsScissors = styled.div`
  grid-column: 2;
  cursor: pointer;
  display: flex;
  justify-content: center;
`

// RPSLS COMPONENTS  -------------------
export const RpslsRock = styled.div`
  grid-row: 2;
  grid-column: 1;
  cursor: pointer;
`
export const RpslsPaper = styled.div`
  grid-column: 2;
  grid-row: 1;
  cursor: pointer;
`
export const RpslsScissors = styled.div`
  grid-column: 1;
  grid-row: 3;
  cursor: pointer;
  display: flex;
  justify-content: center;
`
export const RpslsLizard = styled.div`
  grid-row: 2;
  grid-column: 3;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`
export const RpslsSpock = styled.div`
  grid-column: 3;
  grid-row: 3;
  cursor: pointer;
`

export const ContentRps = styled.div`
  display: grid;
  grid-template-rows: 20rem 20rem;
  grid-template-columns: 20rem 25rem 25rem;
  > svg {
    height: 100rem;
    margin-top: 6rem;
    margin-left: 7rem;
    grid-column: 1 / span 2;
    grid-row: 1 / span 2;
  }
`

export const ContentRpsls = styled.div`
  display: grid;
  grid-template-rows: 20rem 30rem;
  grid-template-columns: 25rem 20rem 30rem;
  > svg {
    height: 110rem;
    margin-top: 6rem;
    margin-left: 7rem;
    grid-column: 1 / span 2;
    grid-row: 1 / span 2;
  }
`
