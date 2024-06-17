import styled from "styled-components";

// Switch Shape
export const SwitchContainer = styled.div<{ $selected?: boolean }>`
  background-color: rgb(255, 255, 255);
  height: 2rem;
  border-radius: 1rem;
  width: 4rem;
  position: relative;
  cursor: pointer;
  overflow: hidden;
`;
// Switch Background color
export const SwitchBody = styled.div<{ $selected?: boolean }>`
  background-color: ${props =>
    props.$selected ? "rgba(242, 193, 56, 0.2)" : "rgba(37, 175, 238, 0.2)"};
  width: 100%;
  height: 100%;
`;

// Switch Buttom
export const SwitchSlider = styled.div<{ $selected?: boolean }>`
  position: absolute;
  background-color: ${props =>
    props.$selected ? "rgba(242, 193, 56, 1.0)" : "rgba(37, 175, 238, 1.0)"};
  height: 1.6rem;
  width: 1.6rem;
  border-radius: 0.8rem;
  margin: 0.2rem;
  // move left and right
  left: ${props => (props.$selected ? "2rem" : "0")};
  transition: left 0.5s ease;
  -webkit-transition: left 0.5s ease;
  -ms-transition: left 0.5s ease;

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    height: 1.2rem;
    width: 1.2rem;
  }
`;
