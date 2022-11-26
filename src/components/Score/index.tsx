import { useSelector } from 'react-redux'
import * as S from './styles'

const Score = () => {
  const scoreRedux = useSelector((state) => state.default)
  console.log(scoreRedux)
  return (
    <S.Wrapper>
      <S.Title>SCORE</S.Title>
      <S.Score>{scoreRedux}</S.Score>
    </S.Wrapper>
  )
}

export default Score
