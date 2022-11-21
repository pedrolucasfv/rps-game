import Logo from 'components/Logo'
import Score from 'components/Score'
import * as S from './styles'

export type HeaderProps = {
  game: 'rps' | 'rpsls'
}

const Header = ({ game }: HeaderProps) => (
  <S.Wrapper>
    <Score score={12} />
    {game == 'rps' && <Logo game="rps" />}
    {game == 'rpsls' && <Logo game="rpsls" />}
    <Score score={10} />
  </S.Wrapper>
)

export default Header
