import { useEffect, useState } from 'react'
import Header from 'components/Header'
import Result from 'components/Result'
import Rps from 'components/Rps'
import * as S from './styles'
import RpsPick from 'components/RpsPick'
import Button from 'components/Button'
import Rules from 'components/Rules'
import MatchMedia from 'components/MatchMedia'

export type PickProps = 'rock' | 'paper' | 'scissors' | 'spock' | 'lizard'

const Page = () => {
  const types = {
    rock: 'rock' as unknown as PickProps,
    paper: 'paper' as unknown as PickProps,
    scissors: 'scissors' as unknown as PickProps,
    lizard: 'lizard' as unknown as PickProps,
    spock: 'spock' as unknown as PickProps
  }

  const picks = {
    yourPick: types.rock,
    computerPick: types.scissors
  }
  const [stage, setStage] = useState('pick')
  const [game, setGame] = useState('rps')

  const [rules, setRules] = useState(false)
  const [points, setPoints] = useState(0)
  const [yourPick, setYourPick] = useState('')
  const [housePick, setHousePick] = useState('')

  const [isWin, setIsWin] = useState(false)
  const [isDraw, setisDraw] = useState(false)

  const typePicked = (pick: PickProps, computer: PickProps, score: number) => {
    setPoints(points + score)
    picks.yourPick = pick
    picks.computerPick = computer
    setYourPick(picks.yourPick)
    setHousePick(picks.computerPick)
    setStage('result')
    gameResult(score)
    localStorage.setItem('points', `${points + score}`)
  }

  const gameResult = (score: number) => {
    if (score == 1) {
      setIsWin(true)
      setisDraw(false)
    } else if (score == -1) {
      setIsWin(false)
      setisDraw(false)
    } else setisDraw(true)
  }
  const playAgain = () => {
    setStage('pick')
  }

  const closeRules = () => {
    setRules(false)
  }

  const changeGame = () => {
    if (game == 'rps') setGame('rpsls')
    else setGame('rps')
  }

  useEffect(() => {
    async function getInitialValue() {
      const initialPoints = parseInt(
        (localStorage.getItem('points') || 0) as string
      )
      setPoints(initialPoints)
    }
    getInitialValue()
  }, [])

  return (
    <S.Wrapper>
      {game == 'rps' ? (
        <S.Header>
          <Header game="rps" changeGame={changeGame} score={points} />
        </S.Header>
      ) : (
        <S.Header>
          <Header game="rpsls" changeGame={changeGame} score={points} />
        </S.Header>
      )}

      {stage == 'pick' && (
        <S.Content stage={stage}>
          {game == 'rps' ? (
            <RpsPick game="rps" typePicked={typePicked} />
          ) : (
            <RpsPick game="rpsls" typePicked={typePicked} />
          )}
        </S.Content>
      )}

      {stage == 'result' && (
        <S.Content stage={stage}>
          <S.YouPick>
            <MatchMedia greaterThan="medium">
              <S.Text>YOUR PICK</S.Text>
              {yourPick == 'paper' && <Rps type="paper" size="large" />}
              {yourPick == 'rock' && <Rps type="rock" size="large" />}
              {yourPick == 'scissors' && <Rps type="scissors" size="large" />}
              {yourPick == 'lizard' && <Rps type="lizard" size="large" />}
              {yourPick == 'spock' && <Rps type="spock" size="large" />}
            </MatchMedia>
            <MatchMedia lessThan="medium">
              <S.Text>YOUR PICK</S.Text>
              {yourPick == 'paper' && <Rps type="paper" size="small" />}
              {yourPick == 'rock' && <Rps type="rock" size="small" />}
              {yourPick == 'scissors' && <Rps type="scissors" size="small" />}
              {yourPick == 'lizard' && <Rps type="lizard" size="small" />}
              {yourPick == 'spock' && <Rps type="spock" size="small" />}
            </MatchMedia>
          </S.YouPick>

          <Result isWin={isWin} playAgain={playAgain} isDraw={isDraw} />

          <S.ComputerPick>
            <S.Text>HOUSE PICK</S.Text>
            <MatchMedia greaterThan="medium">
              {housePick == 'paper' && <Rps type="paper" size="large" />}
              {housePick == 'rock' && <Rps type="rock" size="large" />}
              {housePick == 'scissors' && <Rps type="scissors" size="large" />}
              {housePick == 'lizard' && <Rps type="lizard" size="large" />}
              {housePick == 'spock' && <Rps type="spock" size="large" />}
            </MatchMedia>
            <MatchMedia lessThan="medium">
              {housePick == 'paper' && <Rps type="paper" size="small" />}
              {housePick == 'rock' && <Rps type="rock" size="small" />}
              {housePick == 'scissors' && <Rps type="scissors" size="small" />}
              {housePick == 'lizard' && <Rps type="lizard" size="small" />}
              {housePick == 'spock' && <Rps type="spock" size="small" />}
            </MatchMedia>
          </S.ComputerPick>
        </S.Content>
      )}

      <S.ButtonRules onClick={() => setRules(true)}>
        <Button color="dark">RULES</Button>
      </S.ButtonRules>

      {rules && (
        <S.Rules>
          <S.ContentRules>
            <MatchMedia greaterThan="medium">
              {game == 'rps' ? (
                <Rules game="rps" closeRules={closeRules} />
              ) : (
                <Rules game="rpsls" closeRules={closeRules} />
              )}
            </MatchMedia>
            <MatchMedia lessThan="medium">
              {game == 'rps' ? (
                <Rules game="rps" closeRules={closeRules} fullScreen />
              ) : (
                <Rules game="rpsls" closeRules={closeRules} fullScreen />
              )}
            </MatchMedia>
          </S.ContentRules>
          <S.Sombra />
        </S.Rules>
      )}
    </S.Wrapper>
  )
}
export default Page
