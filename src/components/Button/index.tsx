import * as S from './styles'

export type ButtonProps = {
  children: React.ReactNode
  color?: 'light' | 'dark'
}

const Button = ({ children, color = 'light' }: ButtonProps) => (
  <S.Wrapper color={color}>{children}</S.Wrapper>
)

export default Button
