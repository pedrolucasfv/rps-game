import * as S from './styles'

export type ScoreProps = {
  score: number
}

const Score = ({ score }: ScoreProps) => {
  return (
    <S.Wrapper>
      <S.Title>SCORE</S.Title>
      <S.Score>{score}</S.Score>
    </S.Wrapper>
  )
}

export default Score
