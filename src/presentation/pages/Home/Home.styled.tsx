import styled from "styled-components";

export const HomeContainer = styled.main`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  min-height: 100dvh;
`;

export const HomeTitle = styled.h1`
  color: ${props => props.theme.body.titleColor};
  font-size: 3rem !important;
`;
