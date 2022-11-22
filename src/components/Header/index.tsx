import Logo from 'components/Logo'
import Score from 'components/Score'
import * as S from './styles'

export type HeaderProps = {
  game: 'rps' | 'rpsls'
  yourScore: number
  houseScore: number
}

const Header = ({ game, yourScore, houseScore }: HeaderProps) => (
  <S.Wrapper>
    <Score score={yourScore} />
    {game == 'rps' && <Logo game="rps" />}
    {game == 'rpsls' && <Logo game="rpsls" />}
    <Score score={houseScore} />
  </S.Wrapper>
)

export default Header
