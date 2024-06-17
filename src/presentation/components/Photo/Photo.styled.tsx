import styled from "styled-components";
import { Device } from "../../tools/utils/breakpoints";

export const PhotoContainer = styled.div`
  min-width: 25rem;
  width: 100%;
  height: 18rem;
  border-radius: 1rem;
  background-color: black;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  img {
    max-width: 100%;
    max-height: 100%;
    @media (${Device.tablet}) {
      width: 100%;
    }
  }
  @media (${Device.tablet}) {
    min-width: 10rem;
    height: auto;
    min-height: 10rem;
  }
`;

export const PhotoFooter = styled.div`
  position: absolute;
  bottom: 0;
  height: 3rem;
  display: flex;
  width: 100%;
  padding: 0.3rem;
  justify-content: space-between;
  align-items: center;
  background: ${props => props.theme.photo.bgColor};
`;

export const PhotoFooterDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  p {
    max-width: 10rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 0.7rem;
    margin: 0;
    color: white;
  }
  span {
    font-size: 0.7rem;
    margin: 0;
    color: white;
    font-weight: 600;
  }
`;

export const PhotoFooterTags = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.4rem;
`;

export const PhotoFooterTag = styled.div`
  font-size: 0.7rem;
  border: 0.1rem solid white;
  border-radius: 0.4rem;
  padding: 0.2rem 0.3rem;
  color: white;
  max-width: 4rem;
  // if text exceeds width
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const GalleryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 100%;
  gap: 1rem;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1700px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 1300px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (${Device.tablet}) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
