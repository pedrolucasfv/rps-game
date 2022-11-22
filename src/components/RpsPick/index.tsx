import Rps from 'components/Rps'
import * as S from './styles'
import MatchMedia from 'components/MatchMedia'
import { PickProps } from 'templates/Page'

export type RpsPickProps = {
  typePicked: (pick: PickProps) => void
}

const RpsPick = ({ typePicked }: RpsPickProps) => {
  return (
    <S.Wrapper>
      <MatchMedia greaterThan="medium">
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
          <S.Paper onClick={() => typePicked('paper')}>
            <Rps type="paper" size="large" />
          </S.Paper>
          <S.Scissors onClick={() => typePicked('scissors')}>
            <Rps type="scissors" size="large" />
          </S.Scissors>
          <S.Rock onClick={() => typePicked('rock')}>
            <Rps type="rock" size="large" />
          </S.Rock>
        </S.Content>
      </MatchMedia>
    </S.Wrapper>
  )
}
export default RpsPick
