import { useState } from 'react'
import Rps from 'components/Rps'
import * as S from './styles'
import MatchMedia from 'components/MatchMedia'

export type RpsPickProps = {
  pick: 'paper' | 'scissors' | 'rock'
}

const RpsPick = () => {
  const [pickAux, setPick] = useState(' ')
  //pick = pickAux
  return (
    <S.Wrapper>
      <MatchMedia greaterThan="huge">
        <S.Content>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 550 600">
            <path
              fill="none"
              stroke="#000"
              strokeWidth="15"
              d="M156.5 262 300 8H13z"
              opacity=".2"
            />
          </svg>
          <S.Paper onClick={() => setPick('paper')}>
            <Rps type="paper" size="large" />
          </S.Paper>
          <S.Scissors onClick={() => setPick('scissors')}>
            <Rps type="scissors" size="large" />
          </S.Scissors>
          <S.Rock onClick={() => setPick('rock')}>
            <Rps type="rock" size="large" />
          </S.Rock>
        </S.Content>
      </MatchMedia>
    </S.Wrapper>
  )
}
export default RpsPick
