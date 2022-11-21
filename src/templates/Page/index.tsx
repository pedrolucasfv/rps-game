import { useState } from 'react'
import Header from 'components/Header'
import Result from 'components/Result'
import Rps from 'components/Rps'
import * as S from './styles'
import RpsPick from 'components/RpsPick'

const Page = () => {
  const [stage, setStage] = useState('pick')
  return (
    <S.Wrapper>
      <S.Header onClick={() => setStage('result')}>
        <Header game="rps" />
      </S.Header>
      {stage == 'pick' && (
        <S.Content stage={stage}>
          <RpsPick />
        </S.Content>
      )}
      {stage == 'result' && (
        <S.Content stage={stage}>
          <S.YouPick>
            <S.Text>YOU PICKED</S.Text>
            <Rps type="paper" size="large" />
          </S.YouPick>
          <Result />
          <S.ComputerPick>
            <S.Text>THE HOUSE PICKED</S.Text>
            <Rps type="paper" size="large" />
          </S.ComputerPick>
        </S.Content>
      )}
    </S.Wrapper>
  )
}
export default Page
