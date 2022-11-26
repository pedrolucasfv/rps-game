import { useSelector } from 'react-redux'
import { RootState } from 'store/store'
import * as S from './styles'

const Score = () => {
  const scoreRedux = useSelector((state: RootState) => state.default)
  console.log(scoreRedux)
  return (
    <S.Wrapper>
      <S.Title>SCORE</S.Title>
      <S.Score>{scoreRedux}</S.Score>
    </S.Wrapper>
  )
}

export default Score
