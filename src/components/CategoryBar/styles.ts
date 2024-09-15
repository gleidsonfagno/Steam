import styled from "styled-components";

export const Navlink = styled.div`
  padding: 1.25rem 1rem;
  margin: 1rem;
  background: ${(props) => props.theme["darck-300"]};
  ul {
    display: flex;
    flex-direction: row;
    list-style: none;
    gap: 2.5rem;
    justify-content: space-between;

    li {
      a {
        text-decoration: none;
        color: ${(props) => props.theme.text};
        font-size: 1.125rem;
        font-style: normal;
        padding: 10px;
        font-weight: 500;
        text-transform: uppercase;
        line-height: 21.78px;

        padding-bottom: 1.7rem;
        &:hover {
          color: ${(props) => props.theme["blue-300"]};
        }
      }
    }
  }

  @media (max-width: 1080px) {
    ul {
      flex-direction: column;
      align-items: center;
      text-align: center;
      a{
        font-size: .875rem;
        text-align: center;
      }
    }
  }
`;

