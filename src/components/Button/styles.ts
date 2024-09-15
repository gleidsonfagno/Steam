import styled from "styled-components";

export const ButtonStyles = styled.button`
  padding: 18px 48px;
  text-transform: uppercase;
  /* max-width: 229px; */
  width: 100%;
  background: ${(props) => props.theme["blue-300"]};
  color: ${(props) => props.theme["text"]};
  border: 0;
  border-radius: 0.25rem;
  cursor: pointer;
`;
