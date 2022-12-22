import Logo from 'components/Logo'
import Score from 'components/Score'
import * as S from './styles'

export type HeaderProps = {
  game: 'rps' | 'rpsls'
  changeGame: () => void
  score: number
}

const Header = ({ game, changeGame, score }: HeaderProps) => (
  <S.Wrapper>
    <Score score={score} />
    <S.Text> click on the logo to change the game</S.Text>
    <S.Logo onClick={() => changeGame()}>
      {game == 'rps' && <Logo game="rps" />}
      {game == 'rpsls' && <Logo game="rpsls" />}
    </S.Logo>
  </S.Wrapper>
)

export default Header
