import Rps from 'components/Rps'
import * as S from './styles'
import MatchMedia from 'components/MatchMedia'
import { PickProps } from 'templates/Page'

export type RpsPickProps = {
  typePicked?: (pick: PickProps) => void
  game: 'rps' | 'rpsls'
}

const RpsPick = ({ typePicked, game }: RpsPickProps) => {
  return (
    <S.Wrapper>
      <MatchMedia lessThan="huge">
        {game == 'rps' && (
          <S.ContentRps>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 550 600">
              <path
                fill="none"
                stroke="#000"
                strokeWidth="15"
                d="M156.5 262 300 8H13z"
                opacity=".2"
              />
            </svg>
            <S.RpsPaper onClick={() => typePicked('paper')}>
              <Rps type="paper" size="medium" />
            </S.RpsPaper>
            <S.RpsScissors onClick={() => typePicked('scissors')}>
              <Rps type="scissors" size="medium" />
            </S.RpsScissors>
            <S.RpsRock onClick={() => typePicked('rock')}>
              <Rps type="rock" size="medium" />
            </S.RpsRock>
          </S.ContentRps>
        )}

        {game == 'rpsls' && (
          <S.ContentRpsls>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 550 800">
              <path
                fill="none"
                stroke="#000"
                strokeWidth="15"
                d="M164.5 9.27L9.26 122.06l59.296 182.495h191.888L319.74 122.06 164.5 9.271z"
                opacity=".2"
              />
            </svg>
            <S.RpslsPaper onClick={() => typePicked('paper')}>
              <Rps type="paper" size="small" />
            </S.RpslsPaper>
            <S.RpslsScissors onClick={() => typePicked('scissors')}>
              <Rps type="scissors" size="small" />
            </S.RpslsScissors>
            <S.RpslsRock onClick={() => typePicked('rock')}>
              <Rps type="rock" size="small" />
            </S.RpslsRock>
            <S.RpslsLizard onClick={() => typePicked('Lizard')}>
              <Rps type="lizard" size="small" />
            </S.RpslsLizard>
            <S.RpslsSpock onClick={() => typePicked('Spock')}>
              <Rps type="spock" size="small" />
            </S.RpslsSpock>
          </S.ContentRpsls>
        )}
      </MatchMedia>

      <MatchMedia greaterThan="huge">
        {game == 'rps' && (
          <S.ContentRps>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 550 600">
              <path
                fill="none"
                stroke="#000"
                strokeWidth="15"
                d="M156.5 262 300 8H13z"
                opacity=".2"
              />
            </svg>
            <S.RpsPaper onClick={() => typePicked('paper')}>
              <Rps type="paper" size="large" />
            </S.RpsPaper>
            <S.RpsScissors onClick={() => typePicked('scissors')}>
              <Rps type="scissors" size="large" />
            </S.RpsScissors>
            <S.RpsRock onClick={() => typePicked('rock')}>
              <Rps type="rock" size="large" />
            </S.RpsRock>
          </S.ContentRps>
        )}

        {game == 'rpsls' && (
          <S.ContentRpsls>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 350 600">
              <path
                fill="none"
                stroke="#000"
                strokeWidth="15"
                d="M164.5 9.27L9.26 122.06l59.296 182.495h191.888L319.74 122.06 164.5 9.271z"
                opacity=".2"
              />
            </svg>
            <S.RpslsPaper onClick={() => typePicked('paper')}>
              <Rps type="paper" size="large" />
            </S.RpslsPaper>
            <S.RpslsScissors onClick={() => typePicked('scissors')}>
              <Rps type="scissors" size="large" />
            </S.RpslsScissors>
            <S.RpslsRock onClick={() => typePicked('rock')}>
              <Rps type="rock" size="large" />
            </S.RpslsRock>
            <S.RpslsLizard onClick={() => typePicked('Lizard')}>
              <Rps type="lizard" size="large" />
            </S.RpslsLizard>
            <S.RpslsSpock onClick={() => typePicked('Spock')}>
              <Rps type="spock" size="large" />
            </S.RpslsSpock>
          </S.ContentRpsls>
        )}
      </MatchMedia>
    </S.Wrapper>
  )
}
export default RpsPick
