import * as S from './styles'

export type ScoreProps = {
  score: number
}

const Score = ({ score = 0 }: ScoreProps) => (
  <S.Wrapper>
    <S.Title>SCORE</S.Title>
    <S.Score>{score}</S.Score>
  </S.Wrapper>
)

export default Score
