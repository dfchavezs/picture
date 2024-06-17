import styled from "styled-components";

export const MaintenanceContainer = styled.div`
  display: flex;
  width: 100%;
  height: 80dvh;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  gap: 0.6rem;

  h2 {
    font-size: 1.5rem !important;
    color: ${props => props.theme.maintenance.textColor};
    font-weight: 500;
  }

  img {
    max-width: 100%;
    max-height: 60%;
  }
`;
