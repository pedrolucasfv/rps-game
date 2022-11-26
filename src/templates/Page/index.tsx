import { useState } from 'react'
import Header from 'components/Header'
import Result from 'components/Result'
import Rps from 'components/Rps'
import * as S from './styles'
import RpsPick from 'components/RpsPick'
import { SvgrpsProps } from 'components/Svgrps'
import Button from 'components/Button'
import Rules from 'components/Rules'
import MatchMedia from 'components/MatchMedia'
import { useSelector, useDispatch } from 'react-redux'
import { subtract, sum } from 'store/Default/Default.actions'
import { RootState } from 'store/store'

export type PickProps = Pick<SvgrpsProps, 'type'>
const Page = () => {
  const [stage, setStage] = useState('pick')
  const [game, setGame] = useState('rps')
  const [rules, setRules] = useState(false)

  const [yourPick, setYourPick] = useState('')
  const [housePick, setHousePick] = useState('')

  const [isWin, setIsWin] = useState(false)

  const result = useSelector((state: RootState) => state.default)
  const dispatch = useDispatch()

  const typePicked = (pick: PickProps) => {
    setYourPick(pick)
    computerPick()
    whoPointed()
    setStage('result')
  }

  const computerPick = () => {
    const interval = Math.random()
    if (game == 'rps') {
      if (interval <= 0.333333) setHousePick('rock')
      if (interval > 0.333333 && interval <= 0.66666) setHousePick('paper')
      if (interval > 0.6666) setHousePick('scissors')
    } else {
      if (interval <= 0.2) setHousePick('rock')
      if (interval > 0.2 && interval <= 0.4) setHousePick('paper')
      if (interval > 0.4 && interval <= 0.6) setHousePick('scissors')
      if (interval > 0.6 && interval <= 0.8) setHousePick('lizard')
      if (interval > 0.8) setHousePick('spock')
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
    if (yourPick == housePick) console.log('nobody wins')
    else if (
      yourPick == 'rock' &&
      (housePick == 'scissors' || housePick == 'lizard')
    ) {
      dispatch(sum(result, 1))
      setIsWin(true)
    } else if (
      yourPick == 'paper' &&
      (housePick == 'rock' || housePick == 'spock')
    ) {
      dispatch(sum(result, 1))
      setIsWin(true)
    } else if (
      yourPick == 'scissors' &&
      (housePick == 'paper' || housePick == 'lizard')
    ) {
      dispatch(sum(result, 1))
      setIsWin(true)
    } else if (
      yourPick == 'lizard' &&
      (housePick == 'spock' || housePick == 'paper')
    ) {
      dispatch(sum(result, 1))
      setIsWin(true)
    } else if (
      yourPick == 'spock' &&
      (housePick == 'rock' || housePick == 'scissors')
    ) {
      dispatch(sum(result, 1))
      setIsWin(true)
    } else {
      dispatch(subtract(result, 1))
      setIsWin(false)
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
            <S.Text>YOUR PICK</S.Text>
            <Rps type={yourPick} size="large" />
          </S.YouPick>
          <Result isWin={isWin} playAgain={playAgain} />
          <S.ComputerPick>
            <S.Text>HOUSE PICK</S.Text>
            <Rps type={housePick} size="large" />
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
