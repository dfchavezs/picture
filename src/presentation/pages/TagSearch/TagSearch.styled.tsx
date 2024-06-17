import styled from "styled-components";

export const TagSearchContainer = styled.main`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  min-height: 100dvh;

  /* Styling Paginator */
  .p-paginator,
  .p-paginator-prev,
  .p-paginator-first,
  .p-paginator-next,
  .p-paginator-last,
  .p-paginator-page {
    color: ${props => props.theme.pagination.textColor};
    background-color: transparent;
  }
  .p-paginator .p-highlight {
    background-color: ${props => props.theme.pagination.selectedBg};
    color: ${props => props.theme.pagination.selectedTextColor};
    cursor: auto;
  }
  .p-paginator-page:hover,
  .p-paginator-prev:hover,
  .p-paginator-first:hover,
  .p-paginator-next:hover,
  .p-paginator-last:hover {
    /* background-color: transparent; */
    color: ${props => props.theme.pagination.textColorHover};
  }
`;

export const TagSearchTitle = styled.h1`
  color: ${props => props.theme.body.titleColor};
  font-size: 3rem !important;
  text-align: center;
`;
