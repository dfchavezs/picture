import styled from "styled-components";
import { Device } from "../../tools/utils/breakpoints";

export const HeaderContainer = styled.header`
  width: 100%;
`;

export const HeaderTop = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  height: 4rem;
  background: ${props => props.theme.header.bgColor};

  img {
    height: 2rem;
  }
`;

export const HeaderOptionsGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export const InputGroup = styled.div<{ $displayResponsive?: boolean }>`
  display: ${props => (props.$displayResponsive ? "none" : "flex")};
  align-items: center;
  position: relative;
  label {
    position: absolute;
    right: ${props => (props.$displayResponsive ? "none" : "0.5rem")};
    left: ${props => (props.$displayResponsive ? "0.5rem" : "none")};
  }

  i {
    font-size: 1rem;
    color: rgba(0, 0, 0, 0.5);
  }

  @media (${Device.tablet}) {
    display: ${props => (props.$displayResponsive ? "flex" : "none")};
  }
`;

export const HeaderBottom = styled.div`
  display: none;
  padding: 1rem 2rem;
  justify-content: space-between;
  align-items: center;
  background: ${props => props.theme.body.bgColor};

  > label {
    color: ${props => props.theme.header.searchTextColor};
    font-weight: 500;
  }

  @media (${Device.tablet}) {
    display: flex;
  }
`;
