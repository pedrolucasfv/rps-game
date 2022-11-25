import { useState, useContext } from 'react'
import Header from 'components/Header'
import Result from 'components/Result'
import Rps from 'components/Rps'
import * as S from './styles'
import RpsPick from 'components/RpsPick'
import { SvgrpsProps } from 'components/Svgrps'
import Context from 'providers/context'
export type PickProps = Pick<SvgrpsProps, 'type'>

const Page = () => {
  const [stage, setStage] = useState('pick')

  const [yourPick, setYourPick] = useState('')
  const [housePick, setHousePick] = useState('')

  const [yourPoint, setYourPoint] = useContext(Context)

  const [isWin, setIsWin] = useState(false)

  const typePicked = (pick: PickProps) => {
    setYourPick(pick)
    computerPick()
    whoPointed(pick, housePick)

    console.log(` your: ${yourPoint}`)
    setStage('result')
  }

  const computerPick = () => {
    const interval = Math.random()
    if (interval < 0.3333333) setHousePick('rock')
    if (interval >= 0.3333333 && interval < 0.6666666) setHousePick('paper')
    if (interval >= 0.6666666) setHousePick('scissors')
  }

  const playAgain = () => {
    setStage('pick')
  }

  //código inspirado no melhor código do clash-of-codes
  const whoPointed = (yourPick: PickProps, housePick: PickProps) => {
    if (yourPick == housePick) console.log('nobody wins')
    else if (yourPick == 'rock' && housePick == 'scissors') {
      setYourPoint((yourPoint) => yourPoint + 1)
      setIsWin(true)
    } else if (yourPick == 'paper' && housePick == 'rock') {
      setYourPoint((yourPoint) => yourPoint + 1)
      setIsWin(true)
    } else if (yourPick == 'scissors' && housePick == 'paper') {
      setYourPoint((yourPoint) => yourPoint + 1)
      setIsWin(true)
    } else {
      setYourPoint((yourPoint) => yourPoint - 1)
      setIsWin(false)
    }
  }

  return (
    <S.Wrapper>
      <S.Header>
        <Header game="rps" yourScore={yourPoint} />
      </S.Header>
      {stage == 'pick' && (
        <S.Content stage={stage}>
          <RpsPick typePicked={typePicked} />
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
    </S.Wrapper>
  )
}
export default Page
