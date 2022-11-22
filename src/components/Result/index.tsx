import Button from 'components/Button'
import * as S from './styles'

export type ResultProps = {
  isWin?: boolean
  playAgain: () => void
}

const Result = ({ isWin, playAgain }: ResultProps) => (
  <S.Wrapper>
    {isWin && <S.Text>YOU WIN</S.Text>}
    {!isWin && <S.Text>YOU LOSE</S.Text>}
    <S.Button onClick={() => playAgain()}>
      <Button>PLAY AGAIN</Button>
    </S.Button>
  </S.Wrapper>
)

export default Result
