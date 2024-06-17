import styled from "styled-components";

export const Option = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  padding: 0;

  img {
    max-width: 1rem;
    max-height: 1rem;
    margin-left: 0.2rem;
  }
`;

export const DropdownContainer = styled.div`
  .p-dropdown-label {
    padding: 0.25rem 0.3rem;
  }
  .p-dropdown-item {
    padding: 0.1rem 0.2rem !important;
  }
`;
