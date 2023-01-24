import Button from 'components/Button'
import * as S from './styles'

export type ResultProps = {
  isWin?: boolean
  playAgain: () => void
  isDraw?: boolean
}

const Result = ({ isWin, playAgain, isDraw }: ResultProps) => (
  <S.Wrapper>
    {isDraw && <S.Text>DRAW</S.Text>}
    {!isDraw && (
      <S.Content>
        {isWin && <S.Text>YOU WIN</S.Text>}
        {!isWin && <S.Text>YOU LOSE</S.Text>}
      </S.Content>
    )}

    <S.Button onClick={() => playAgain()}>
      <Button>PLAY AGAIN</Button>
    </S.Button>
  </S.Wrapper>
)

export default Result
