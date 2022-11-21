import Svgrps, { SvgrpsProps } from 'components/Svgrps'
import * as S from './styles'

export type RpsProps = {
  size?: 'small' | 'medium'
  noColor?: boolean
} & Pick<SvgrpsProps, 'type'>

const Rps = ({ type, size = 'small', noColor = false }: RpsProps) => (
  <S.Wrapper type={type} size={size} noColor={noColor}>
    <Svgrps type={type} />
  </S.Wrapper>
)

export default Rps
