import Button from 'components/Button'
import * as S from './styles'

export type ResultProps = {
  isWin?: boolean
}

const Result = ({ isWin }: ResultProps) => (
  <S.Wrapper>
    {isWin && <S.Text>YOU WIN</S.Text>}
    {!isWin && <S.Text>YOU LOSE</S.Text>}
    <Button>PLAY AGAIN</Button>
  </S.Wrapper>
)

export default Result
