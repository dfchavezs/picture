import styled from "styled-components";

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100dvh;
  width: 100vw;
  overflow: auto;
`;

export const LayoutHeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100dvw;
`;
export const LayoutBodyContainer = styled.div`
  width: 100dvw;
  background: ${props => props.theme.body.bgColor};
  overflow-x: auto;
`;
export const LayoutFooterContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;
