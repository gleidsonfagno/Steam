import styled from "styled-components";

export const CardReleaseStyle = styled.article`
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-width: 280px;
  .image {
    display: block;
    overflow: hidden;
    width: 100%;
    position: relative;
    img {
      display: block;
      width: 100%;
      object-fit: cover;
      border-radius: 4px 4px 0;
      transition: transform 0.3s ease;
    }
    &:hover img {
      transform: scale(1.1);
    }

    &:before {
    content: ""; /* Cria um pseudo-elemento antes da imagem */
    position: absolute;
    /* top: 0; */
    /* left: 0; */
    max-width: 280px;
    width: 100%;
    height: 100%;
    max-height: 150px;
    background-image: linear-gradient(
      180deg,
      rgba(14, 19, 30, 0) 0%,
      rgba(14, 19, 30, 0.88) 96.35%
    );
    z-index: 1;
  }
  }

  p {
    font-size: 1rem ;
    font-weight: 500;
    line-height: 1.1875rem;
  }
  
  .price {
    display: flex;
    flex-direction: row;
    gap: 0.75rem;
    align-items: center;
    span {
      font-size: 14px;
      font-weight: 500;
    }
    .desconto {
      padding: 0.25rem 0.5rem;
      background: ${(props) => props.theme["blue-300"]};
      border-radius: 4px;
      font-weight: 600;
    }
    .preco {
      text-decoration: line-through;
      color: ${(props) => props.theme["darck-400"]};
    }
  }
`;
