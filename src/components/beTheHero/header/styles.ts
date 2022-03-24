import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
`;

export const Content = styled.div`
  max-width: 869px;
  width: 100%;

  margin: 1rem auto;

  display: flex;
  justify-content: space-between;

  div.left {
    display: flex;
    align-items: center;

    img {
      max-width: 144px;
      margin: 0 24px 0 0;
    }
    span {
      margin: 0 24px;
    }
  }

  div.right {
    display: flex;
    align-items: center;

    button {
      padding: 1rem 1.5rem;
      color: var(--gray-50);
      background-color: var(--red-hero);
      border-radius: 5px;
      border: none;
      font-size: 1rem;
      font-weight: 700;

      &:hover {
        background-color: var(--red-400);
      }

      &:active {
        background-color: var(--red-500);
      }
    }

    a {
      cursor: pointer;
      padding: 0.8rem;
      margin-left: 1rem;
      border: 2px solid var(--gray-200);
      border-radius: 5px;
    }
  }
`;
