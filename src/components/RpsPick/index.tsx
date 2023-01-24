import Rps from 'components/Rps'
import * as S from './styles'
import MatchMedia from 'components/MatchMedia'
import { PickProps } from 'templates/Page'

export type RpsPickProps = {
  typePicked: (pick: PickProps, computer: PickProps, score: number) => void
  game: 'rps' | 'rpsls'
}

const RpsPick = ({ typePicked, game }: RpsPickProps) => {
  const types = {
    rock: 'rock' as unknown as PickProps,
    paper: 'paper' as unknown as PickProps,
    scissors: 'scissors' as unknown as PickProps,
    lizard: 'lizard' as unknown as PickProps,
    spock: 'spock' as unknown as PickProps
  }

  const computerPick = () => {
    const interval = Math.random()
    if (game == 'rps') {
      if (interval <= 0.333333) return types.rock
      if (interval > 0.333333 && interval <= 0.66666) return types.paper
      if (interval > 0.6666) return types.scissors
    } else {
      if (interval <= 0.2) return types.rock
      if (interval > 0.2 && interval <= 0.4) return types.paper
      if (interval > 0.4 && interval <= 0.6) return types.scissors
      if (interval > 0.6 && interval <= 0.8) return types.lizard
      if (interval > 0.8) return types.spock
    }
    return types.rock
  }

  const logicGame = (pick: PickProps) => {
    const computer: PickProps = computerPick()
    const score: number = whoPointed(pick, computer)
    typePicked(pick, computer, score)
  }

  const whoPointed = (pick: PickProps, computer: PickProps) => {
    if (pick == computer) return 0
    else if (
      pick == types.rock &&
      (computer == types.scissors || computer == types.lizard)
    ) {
      return 1
    } else if (
      pick == types.paper &&
      (computer == types.rock || computer == types.spock)
    ) {
      return 1
    } else if (
      pick == types.scissors &&
      (computer == types.paper || computer == types.lizard)
    ) {
      return 1
    } else if (
      pick == types.lizard &&
      (computer == types.spock || computer == types.paper)
    ) {
      return 1
    } else if (
      pick == types.spock &&
      (computer == types.rock || computer == types.scissors)
    ) {
      return 1
    } else {
      return -1
    }
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
            <S.RpsPaper onClick={() => logicGame(types.paper)}>
              <Rps type={types.paper} size="medium" />
            </S.RpsPaper>
            <S.RpsScissors onClick={() => logicGame(types.scissors)}>
              <Rps type={types.scissors} size="medium" />
            </S.RpsScissors>
            <S.RpsRock onClick={() => logicGame(types.rock)}>
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
            <S.RpslsPaper onClick={() => logicGame(types.paper)}>
              <Rps type={types.paper} size="small" />
            </S.RpslsPaper>
            <S.RpslsScissors onClick={() => logicGame(types.scissors)}>
              <Rps type={types.scissors} size="small" />
            </S.RpslsScissors>
            <S.RpslsRock onClick={() => logicGame(types.rock)}>
              <Rps type={types.rock} size="small" />
            </S.RpslsRock>
            <S.RpslsLizard onClick={() => logicGame(types.lizard)}>
              <Rps type={types.lizard} size="small" />
            </S.RpslsLizard>
            <S.RpslsSpock onClick={() => logicGame(types.spock)}>
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
            <S.RpsPaper onClick={() => logicGame(types.paper)}>
              <Rps type={types.paper} size="large" />
            </S.RpsPaper>
            <S.RpsScissors onClick={() => logicGame(types.scissors)}>
              <Rps type={types.scissors} size="large" />
            </S.RpsScissors>
            <S.RpsRock onClick={() => logicGame(types.rock)}>
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
            <S.RpslsPaper onClick={() => logicGame(types.paper)}>
              <Rps type={types.paper} size="medium" />
            </S.RpslsPaper>
            <S.RpslsScissors onClick={() => logicGame(types.scissors)}>
              <Rps type={types.scissors} size="medium" />
            </S.RpslsScissors>
            <S.RpslsRock onClick={() => logicGame(types.rock)}>
              <Rps type={types.rock} size="medium" />
            </S.RpslsRock>
            <S.RpslsLizard onClick={() => logicGame(types.lizard)}>
              <Rps type={types.lizard} size="medium" />
            </S.RpslsLizard>
            <S.RpslsSpock onClick={() => logicGame(types.spock)}>
              <Rps type={types.spock} size="medium" />
            </S.RpslsSpock>
          </S.ContentRpsls>
        )}
      </MatchMedia>
    </S.Wrapper>
  )
}
export default RpsPick
