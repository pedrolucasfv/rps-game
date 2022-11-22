import { useState } from 'react'
import Header from 'components/Header'
import Result from 'components/Result'
import Rps from 'components/Rps'
import * as S from './styles'
import RpsPick from 'components/RpsPick'
import { SvgrpsProps } from 'components/Svgrps'

export type PickProps = Pick<SvgrpsProps, 'type'>

const Page = () => {
  const [stage, setStage] = useState('pick')

  const [yourPick, setYourPick] = useState('')
  const [housePick, setHousePick] = useState('')

  const [yourPoint, setYourPoint] = useState(0)
  const [housePoint, setHousePoint] = useState(0)

  const [isWin, setIsWin] = useState(false)

  const typePicked = (pick: PickProps) => {
    setYourPick(pick)
    computerPick()
    whoPointed(pick, housePick)

    console.log(` your: ${yourPoint}`)
    console.log(` house: ${housePoint}`)
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

  const whoPointed = (yourPick: PickProps, housePick: PickProps) => {
    if (yourPick == 'rock') {
      if (housePick == 'paper') {
        setHousePoint((housePoint) => housePoint + 1)
        setIsWin(false)
      }
      if (housePick == 'scissors') {
        setYourPoint((yourPoint) => yourPoint + 1)
        setIsWin(true)
      } else console.log('nobody pointed')
    }
    if (yourPick == 'paper') {
      if (housePick == 'rock') {
        setYourPoint((yourPoint) => yourPoint + 1)
        setIsWin(true)
      }
      if (housePick == 'scissors') {
        setHousePoint((housePoint) => housePoint + 1)
        setIsWin(false)
      } else console.log('nobody pointed')
    }
    if (yourPick == 'scissors') {
      if (housePick == 'rock') {
        setHousePoint((housePoint) => housePoint + 1)
        setIsWin(false)
      }
      if (housePick == 'paper') {
        setYourPoint((yourPoint) => yourPoint + 1)
        setIsWin(true)
      } else console.log('nobody pointed')
    }
  }

  return (
    <S.Wrapper>
      <S.Header>
        <Header game="rps" yourScore={yourPoint} houseScore={housePoint} />
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
