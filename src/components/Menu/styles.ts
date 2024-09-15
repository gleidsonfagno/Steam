import styled from "styled-components";

interface NavlinkProps {
  menuOpen: boolean;
}

export const NavgationContainer = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem 1rem;
  background: ${(props) => props.theme["darck-500"]};

  .open_menu {
    display: none;
  }

  @media (max-width: 53.625rem) {
    flex-direction: row-reverse;

    .open_menu {
      display: block;
      padding: 0.5rem 1rem;
      background: transparent;
      border: 0;
      color: #CCC;
      width: 44px;
      cursor: pointer;
    }
  }
`;

export const Navlink = styled.div<NavlinkProps>`
  display: flex;
  gap: 80px;
  align-items: center;
  position: relative;

  ul {
    display: flex;
    flex-direction: row;
    list-style: none;
    gap: 2.5rem;

    li {
      a {
        text-decoration: none;
        color: ${(props) => props.theme.text};
        font-size: 1.125rem;
        font-weight: 500;
        text-transform: uppercase;

        &:hover {
          color: ${(props) => props.theme["blue-300"]};
          border-bottom: 0.25rem solid ${(props) => props.theme["blue-300"]};
        }
      }
    }
  }

  @media (max-width: 60rem) {
    ul {
      position: fixed;
      top: 0;
      left: ${(props) =>
        props.menuOpen ? "0" : "-100%"}; /* Deslizar da esquerda */
      width: 50%;
      height: 100vh;
      background: ${(props) => props.theme["darck-500"]};
      display: flex;
      flex-direction: column;
      gap: 2.5rem;
      justify-content: center;
      padding-left: 2rem;
      transition: left 0.3s ease;
      z-index: 2;
    }
  }
`;

export const Navicones = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  a {
    padding: 0.5rem;
    border-radius: 50%;
    background: ${(props) => props.theme["darck-300"]};

    &:hover {
      background: ${(props) => props.theme["blue-300"]};
    }

    img {
      display: block;
      max-width: 24px;
    }
  }

  .profile {
    display: block !important;
    img {
      object-fit: cover;
      width: 100%;
      max-width: 40px;
      border-radius: 50%;
    }
  }

  @media (max-width: 48rem) {
    a {
      display: none;
    }
  }
`;
