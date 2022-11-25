import Logo from 'components/Logo'
import Score from 'components/Score'
import * as S from './styles'

export type HeaderProps = {
  game: 'rps' | 'rpsls'
  yourScore?: number
  changeGame?: () => void
}

const Header = ({ game, yourScore = 0, changeGame }: HeaderProps) => (
  <S.Wrapper>
    <Score score={yourScore} />
    <S.Logo onClick={() => changeGame()}>
      {game == 'rps' && <Logo game="rps" />}
      {game == 'rpsls' && <Logo game="rpsls" />}
    </S.Logo>
  </S.Wrapper>
)

export default Header
