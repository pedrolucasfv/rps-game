import { useState } from 'react'
import Header from 'components/Header'
import Result from 'components/Result'
import Rps from 'components/Rps'
import * as S from './styles'
import RpsPick from 'components/RpsPick'
import Button from 'components/Button'
import Rules from 'components/Rules'
import MatchMedia from 'components/MatchMedia'
import { useSelector, useDispatch } from 'react-redux'
import { subtract, sum } from 'store/Default/Default.actions'
import { RootState } from 'store/store'

export type PickProps = {
  type: 'rock' | 'paper' | 'scissors' | 'spock' | 'lizard'
}

const Page = () => {
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

  const [stage, setStage] = useState('pick')
  const [game, setGame] = useState('rps')

  const [rules, setRules] = useState(false)

  const [yourPick, setYourPick] = useState('')
  const [housePick, setHousePick] = useState('')

  const [isWin, setIsWin] = useState(false)
  const [isDraw, setisDraw] = useState(false)

  const result = useSelector((state: RootState) => state.default)
  const dispatch = useDispatch()

  const typePicked = (
    pick: 'rock' | 'paper' | 'scissors' | 'spock' | 'lizard'
  ) => {
    setYourPick(pick)
    computerPick()
    whoPointed()
    setStage('result')
  }

  const computerPick = () => {
    const interval = Math.random()
    if (game == 'rps') {
      if (interval <= 0.333333) setHousePick(types.rock)
      if (interval > 0.333333 && interval <= 0.66666) setHousePick(types.paper)
      if (interval > 0.6666) setHousePick(types.scissors)
    } else {
      if (interval <= 0.2) setHousePick(types.rock)
      if (interval > 0.2 && interval <= 0.4) setHousePick(types.paper)
      if (interval > 0.4 && interval <= 0.6) setHousePick(types.scissors)
      if (interval > 0.6 && interval <= 0.8) setHousePick(types.lizard)
      if (interval > 0.8) setHousePick(types.spock)
    }
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

  //código inspirado no melhor código do clash-of-codes
  const whoPointed = () => {
    if (yourPick == housePick) setisDraw(true)
    else if (
      yourPick == types.rock &&
      (housePick == types.scissors || housePick == types.lizard)
    ) {
      dispatch(sum(result, 1))
      setIsWin(true)
      setisDraw(false)
    } else if (
      yourPick == types.paper &&
      (housePick == types.rock || housePick == types.spock)
    ) {
      dispatch(sum(result, 1))
      setIsWin(true)
      setisDraw(false)
    } else if (
      yourPick == types.scissors &&
      (housePick == types.paper || housePick == types.lizard)
    ) {
      dispatch(sum(result, 1))
      setIsWin(true)
      setisDraw(false)
    } else if (
      yourPick == types.lizard &&
      (housePick == types.spock || housePick == types.paper)
    ) {
      dispatch(sum(result, 1))
      setIsWin(true)
      setisDraw(false)
    } else if (
      yourPick == types.spock &&
      (housePick == types.rock || housePick == types.scissors)
    ) {
      dispatch(sum(result, 1))
      setIsWin(true)
      setisDraw(false)
    } else {
      dispatch(subtract(result, 1))
      setIsWin(false)
      setisDraw(false)
    }
  }

  return (
    <S.Wrapper>
      {game == 'rps' ? (
        <S.Header>
          <Header game="rps" changeGame={changeGame} />
        </S.Header>
      ) : (
        <S.Header>
          <Header game="rpsls" changeGame={changeGame} />
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
        </S.Rules>
      )}
    </S.Wrapper>
  )
}
export default Page
