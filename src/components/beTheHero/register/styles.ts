import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  max-width: 969px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  /* margin: 122px auto; */
  flex-direction: row;
  justify-content: space-between;

  box-shadow: 0px 0px 30px var(--gray-300);
  border-radius: 0.5rem;

  padding: 4rem;

  div.left {
    display: flex;
    flex-direction: column;
    max-width: 384px;
    width: 100%;
    align-items: flex-start;

    img {
      max-width: 191px;
      margin-bottom: 2em;
    }

    strong {
      font-size: 2em;
      font-weight: 500;
      margin: 1em 0;
    }

    p {
      color: var(--gray-600);
    }

    a {
      margin: 2rem 0 2rem -1rem;
      text-decoration: none;
      color: var(--gray-900);
      display: flex;
      align-items: center;
      font-weight: 700;

      :hover {
        color: var(--red-hero);
      }
    }
  }

  div.right {
    display: flex;
    flex-direction: column;
    max-width: 448px;
    width: 100%;

    input {
      width: 100%;
      padding: 1rem;
      margin-bottom: 0.5rem;
      border: 1px solid var(--gray-200);
      border-radius: 0.25rem;
      font-size: 1rem;
    }

    div.location {
      display: grid;
      grid-template-columns: 1fr 60px;
      gap: 0.5rem;
    }

    button {
      padding: 1rem;
      border-radius: 0.5rem;
      background-color: var(--red-hero);
      border: none;
      color: var(--gray-100);
      font-size: 1rem;

      &:hover {
        background-color: var(--red-500);
      }
    }
  }
`;
