import Rps from 'components/Rps'
import * as S from './styles'

const RpsPick = () => (
  <S.Wrapper>
    <svg xmlns="http://www.w3.org/2000/svg" width="313" height="278">
      <path
        fill="none"
        stroke="#000"
        stroke-width="15"
        d="M156.5 262 300 8H13z"
        opacity=".2"
      />
    </svg>
    <S.Paper>
      <Rps type="paper" />
    </S.Paper>
    <S.Scissors>
      <Rps type="scissors" />
    </S.Scissors>
    <S.Rock>
      <Rps type="rock" />
    </S.Rock>
  </S.Wrapper>
)

export default RpsPick
