import styled from 'styled-components'
import media from 'styled-media-query'

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
  ${media.lessThan('huge')`
  display: flex ;
  justify-content: center;
    align-items: center;
  `}
`
export const RpslsPaper = styled.div`
  grid-column: 2;
  grid-row: 1;
  cursor: pointer;

  ${media.lessThan('huge')`
  display: flex;
  align-items: center;
    justify-content: flex-end;
  `}
`
export const RpslsScissors = styled.div`
  grid-column: 1;
  grid-row: 3;
  cursor: pointer;
  display: flex;
  justify-content: center;
  ${media.lessThan('huge')`
    align-items: center;
    justify-content: flex-end;
  `}
`
export const RpslsLizard = styled.div`
  grid-row: 2;
  grid-column: 3;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  ${media.lessThan('huge')`
    justify-content: center;
    align-items: center;
  `}
`
export const RpslsSpock = styled.div`
  grid-column: 3;
  grid-row: 3;
  cursor: pointer;

  ${media.lessThan('huge')`
  display:flex ;
  align-items: center;
    justify-content: flex-start;
  `}
`

export const ContentRps = styled.div`
  display: grid;
  grid-template-rows: 20rem 20rem;
  grid-template-columns: 20rem 25rem 25rem;

  ${media.lessThan('huge')`
  grid-template-rows: 10rem 10rem;
  grid-template-columns: 13rem 14rem 14rem;
  `}

  > svg {
    height: 55rem;
    ${media.lessThan('huge')`
      height: 28rem;
    `}
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

  ${media.lessThan('huge')`
  grid-template-rows: 11rem 12rem 15rem;
  grid-template-columns: 15rem 10rem 17rem;
  `}

  > svg {
    height: 70rem;
    ${media.lessThan('huge')`
      height: 26rem;
    `}
    margin-top: 6rem;
    margin-left: 7rem;
    grid-column: 1 / span 2;
    grid-row: 1 / span 2;
  }
`
