import styled from "styled-components";

export const Carde = styled.article`
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  :before {
    content: ""; 
    position: absolute;
    top: 0;
    left: 0;
    max-width: 280px;
    width: 100%;
    height: 100%;
    max-height: 150px;
    background-image: linear-gradient(
      180deg,
      rgba(14, 19, 30, 0) 0%,
      rgba(14, 19, 30, 0.88) 96.35%
    );

    
  }
  img {
    display: block;
    max-width: 280px;
    width: 100%;
    object-fit: cover;
    transition: transform 0.3s ease; 
  }
  &:hover img {
    transform: scale(1.1); 
  }


  div {
    position: absolute;
    bottom: 0;
    display: flex;
    text-align: center;
    justify-content: center;
    padding-block: 40px;
    padding-inline: 40px;
    width: 100%;

    img {
      display: block;
      /* max-width: 280px; */
      width: 100%;
      object-fit: cover;
    }
  }
`;
