import Rps from 'components/Rps'
import * as S from './styles'
import MatchMedia from 'components/MatchMedia'

export type RpsPickProps = {
  typePicked: (pick: 'rock' | 'paper' | 'scissors' | 'spock' | 'lizard') => void
  game: 'rps' | 'rpsls'
}

const RpsPick = ({ typePicked, game }: RpsPickProps) => {
  const types = {
    rock: 'rock' as unknown as
      | 'rock'
      | 'paper'
      | 'scissors'
      | 'spock'
      | 'lizard',
    paper: 'paper' as unknown as
      | 'rock'
      | 'paper'
      | 'scissors'
      | 'spock'
      | 'lizard',
    scissors: 'scissors' as unknown as
      | 'rock'
      | 'paper'
      | 'scissors'
      | 'spock'
      | 'lizard',
    lizard: 'lizard' as unknown as
      | 'rock'
      | 'paper'
      | 'scissors'
      | 'spock'
      | 'lizard',
    spock: 'spock' as unknown as
      | 'rock'
      | 'paper'
      | 'scissors'
      | 'spock'
      | 'lizard'
  }
  return (
    <S.Wrapper>
      <MatchMedia lessThan="huge">
        {game == 'rps' && (
          <S.ContentRps>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 320">
              <path
                fill="none"
                stroke="#000"
                strokeWidth="15"
                d="M156.5 262 300 8H13z"
                opacity=".2"
              />
            </svg>
            <S.RpsPaper onClick={() => typePicked(types.paper)}>
              <Rps type={types.paper} size="medium" />
            </S.RpsPaper>
            <S.RpsScissors onClick={() => typePicked(types.scissors)}>
              <Rps type={types.scissors} size="medium" />
            </S.RpsScissors>
            <S.RpsRock onClick={() => typePicked(types.rock)}>
              <Rps type={types.rock} size="medium" />
            </S.RpsRock>
          </S.ContentRps>
        )}

        {game == 'rpsls' && (
          <S.ContentRpsls>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 330 320">
              <path
                fill="none"
                stroke="#000"
                strokeWidth="15"
                d="M164.5 9.27L9.26 122.06l59.296 182.495h191.888L319.74 122.06 164.5 9.271z"
                opacity=".2"
              />
            </svg>
            <S.RpslsPaper onClick={() => typePicked(types.paper)}>
              <Rps type={types.paper} size="small" />
            </S.RpslsPaper>
            <S.RpslsScissors onClick={() => typePicked(types.scissors)}>
              <Rps type={types.scissors} size="small" />
            </S.RpslsScissors>
            <S.RpslsRock onClick={() => typePicked(types.rock)}>
              <Rps type={types.rock} size="small" />
            </S.RpslsRock>
            <S.RpslsLizard onClick={() => typePicked(types.lizard)}>
              <Rps type={types.lizard} size="small" />
            </S.RpslsLizard>
            <S.RpslsSpock onClick={() => typePicked(types.spock)}>
              <Rps type={types.spock} size="small" />
            </S.RpslsSpock>
          </S.ContentRpsls>
        )}
      </MatchMedia>

      <MatchMedia greaterThan="huge">
        {game == 'rps' && (
          <S.ContentRps>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 320">
              <path
                fill="none"
                stroke="#000"
                strokeWidth="15"
                d="M156.5 262 300 8H13z"
                opacity=".2"
              />
            </svg>
            <S.RpsPaper onClick={() => typePicked(types.paper)}>
              <Rps type={types.paper} size="large" />
            </S.RpsPaper>
            <S.RpsScissors onClick={() => typePicked(types.scissors)}>
              <Rps type={types.scissors} size="large" />
            </S.RpsScissors>
            <S.RpsRock onClick={() => typePicked(types.rock)}>
              <Rps type={types.rock} size="large" />
            </S.RpsRock>
          </S.ContentRps>
        )}

        {game == 'rpsls' && (
          <S.ContentRpsls>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 350 350">
              <path
                fill="none"
                stroke="#000"
                strokeWidth="15"
                d="M164.5 9.27L9.26 122.06l59.296 182.495h191.888L319.74 122.06 164.5 9.271z"
                opacity=".2"
              />
            </svg>
            <S.RpslsPaper onClick={() => typePicked(types.paper)}>
              <Rps type={types.paper} size="medium" />
            </S.RpslsPaper>
            <S.RpslsScissors onClick={() => typePicked(types.scissors)}>
              <Rps type={types.scissors} size="medium" />
            </S.RpslsScissors>
            <S.RpslsRock onClick={() => typePicked(types.rock)}>
              <Rps type={types.rock} size="medium" />
            </S.RpslsRock>
            <S.RpslsLizard onClick={() => typePicked(types.lizard)}>
              <Rps type={types.lizard} size="medium" />
            </S.RpslsLizard>
            <S.RpslsSpock onClick={() => typePicked(types.spock)}>
              <Rps type={types.spock} size="medium" />
            </S.RpslsSpock>
          </S.ContentRpsls>
        )}
      </MatchMedia>
    </S.Wrapper>
  )
}
export default RpsPick
