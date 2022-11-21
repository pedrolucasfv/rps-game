import { useState } from 'react'
import Header from 'components/Header'
import Result from 'components/Result'
import Rps from 'components/Rps'
import * as S from './styles'

const Page = () => {
  const [stage, setStage] = useState('pick')
  return (
    <S.Wrapper>
      <S.Header>
        <Header game="rps" />
      </S.Header>
      {stage == 'result' && (
        <S.Content>
          <S.YouPick>
            <S.Text>YOU PICKED</S.Text>
            <Rps type="paper" />
          </S.YouPick>
          <Result />
          <S.ComputerPick>
            <S.Text>THE HOUSE PICKED</S.Text>
            <Rps type="paper" />
          </S.ComputerPick>
        </S.Content>
      )}
    </S.Wrapper>
  )
}
export default Page
