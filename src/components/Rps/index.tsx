import Svgrps from 'components/Svgrps'
import { PickProps } from 'templates/Page'
import * as S from './styles'

export type RpsProps = {
  size?: 'small' | 'medium' | 'large'
  noColor?: boolean
  type: PickProps
}

const Rps = ({ type, size = 'small', noColor = false }: RpsProps) => {
  return (
    <S.Wrapper type={type} size={size} noColor={noColor}>
      <Svgrps type={type} size={size} />
    </S.Wrapper>
  )
}
export default Rps
