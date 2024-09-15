import styled from "styled-components";

export interface SlidebarProps {
  backgoundImage: string;
}

export const SlideBar = styled.div`
  /* essao são as configuraçoes do slide/carrosel */
  .baner {
    width: 100%;
    height: 31.25rem;
    background: linear-gradient(
      266.12deg,
      rgba(14, 19, 30, 0) 0%,
      rgba(14, 19, 30, 0.7) 44.25%,
      rgba(14, 19, 30, 0.7) 88.17%,
      rgba(14, 19, 30, 0) 100%
    );
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    display: inline-block;
  }

  .baner::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      266.12deg,
      rgba(14, 19, 30, 0) 0%,
      rgba(14, 19, 30, 0.7) 44.25%,
      rgba(14, 19, 30, 0.7) 88.17%,
      rgba(14, 19, 30, 0) 100%
    );
  }
  .swiper {
    padding-bottom: 3.125rem;
  }
  .swiper-pagination
    .swiper-pagination-clickable
    .swiper-pagination-bullets
    .swiper-pagination-horizontal {
    position: relative;
    /* top: 2rem ; */
  }

  .swiper-pagination-bullet {
    width: 2.75rem;
    height: 0.3125rem;
    background-color: #ffffff;
    opacity: 1;
    border-radius: 0;
  }

  .swiper-pagination-bullet-active {
    background-color: #0094ff;
    opacity: 1;
  }
  .swiper-pagination-bullet:nth-child(n + 25) {
    display: none;
  }
`;

export const CardSlid = styled.article`
  max-width: 76rem;
  margin: auto;
  padding-block: 5.5625rem;
  div {
    position: relative;
    z-index: 1;
    padding-inline: 1rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    max-width: 31.25rem;
    justify-content: start;

    img {
      display: block;
      max-width: 15rem;
      width: 100%;
    }

    p {
      font-size: 1.125rem;
    }

    button {
      padding: 18px 48px;
      text-transform: uppercase;
      max-width: 14.3125rem;
      background: ${(props) => props.theme["blue-300"]};
      color: ${(props) => props.theme["text"]};
      border: 0;
      border-radius: 0.25rem;
      cursor: pointer;
    }
  }

  @media (max-width: 768px) {
    div {
      position: relative;
      z-index: 1;
      padding-inline: 1rem;
      display: flex;
      flex-direction: column;
      gap: 2rem;
      max-width: 31.25rem;
      justify-content: start;

      img {
        display: block;
        max-width: 15rem;
        width: 100%;
      }

      p {
        font-size: .875rem;
      }

      button {
        padding: 18px 48px;
        text-transform: uppercase;
        max-width: 14.3125rem;
        background: ${(props) => props.theme["blue-300"]};
        color: ${(props) => props.theme["text"]};
        border: 0;
        border-radius: 0.25rem;
        cursor: pointer;
      }
    }
  }
`;
