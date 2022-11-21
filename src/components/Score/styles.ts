import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    width: 12rem;
    height: 10rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    border-radius: 0.6rem;
  `}
`

export const Title = styled.h4`
  ${({ theme }) => css`
    letter-spacing: 0.15rem;
    margin-top: 0.8rem;
    font-weight: ${theme.font.bold};
    color: ${theme.colors.ScoreText};
  `}
`

export const Score = styled.div`
  ${({ theme }) => css`
    font-size: 5rem;
    flex-grow: 1;
    margin-bottom: 1rem;
    font-weight: 620;
    color: ${theme.colors.DarkText};
  `}
`
