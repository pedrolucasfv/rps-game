import { useState } from 'react'
import Rps from 'components/Rps'
import * as S from './styles'

export type RpsPickProps = {
  pick: 'paper' | 'scissors' | 'rock'
}

const RpsPick = () => {
  const [pickAux, setPick] = useState(' ')
  //pick = pickAux
  return (
    <S.Wrapper>
      <svg xmlns="http://www.w3.org/2000/svg" width="313" height="278">
        <path
          fill="none"
          stroke="#000"
          strokeWidth="15"
          d="M156.5 262 300 8H13z"
          opacity=".2"
        />
      </svg>
      <S.Paper onClick={() => setPick('paper')}>
        <Rps type="paper" />
      </S.Paper>
      <S.Scissors onClick={() => setPick('scissors')}>
        <Rps type="scissors" />
      </S.Scissors>
      <S.Rock onClick={() => setPick('rock')}>
        <Rps type="rock" />
      </S.Rock>
    </S.Wrapper>
  )
}
export default RpsPick
