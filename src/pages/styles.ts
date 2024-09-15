import styled from "styled-components";

export const HomeContainer = styled.main`
  max-width: 76rem;
  margin: auto;
  
`;
export const Section = styled.section`
  padding-inline: 16px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  align-items: center;

  margin-bottom: 6.25rem;

  gap: 32px;
  @media (max-width: 1186px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 32px;
  }

  @media (max-width: 320px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 32px;
  }
`;

export const SectionCategory = styled.section`
  padding-inline: 1rem;
  h2 {
    font-size: 24px;
    text-transform: uppercase;
    margin-bottom: 2.5rem;
    font-weight: 600;
  }
  ul {
    list-style-type: none;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-items: center;
    align-items: center;
    gap: 2rem;
    @media (max-width: 1186px) {
      grid-template-columns: repeat(2, 1fr);
      gap: 32px;
    }

    @media (max-width: 568px) {
      grid-template-columns: repeat(1, 1fr);
      gap: 32px;
    }

    li {
      width: 100%;
      height: 100%;
    }
  }
  margin-bottom: 6.25rem;

  gap: 32px;
`;

export const SectionRelease = styled.section`
  padding-inline: 16px;
  margin-bottom: 6.25rem;

  h2 {
    font-size: 24px;
    font-weight: 600;
    text-transform: uppercase;
    line-height: 1.8125rem;
    margin-bottom: 2.5rem;
  }
  div {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-items: center;
    align-items: center;
    gap: 2rem;

  }
  @media (max-width: 1080px) {
    div {
      grid-template-columns: repeat(2, 1fr);
    gap: 32px;
    }
  }

  @media (max-width: 320px) {
    div {
      grid-template-columns: repeat(1, 1fr);
    gap: 32px;
    }
  }
`;
