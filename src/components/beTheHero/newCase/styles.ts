import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`;
export const Content = styled.div`
  box-shadow: 0px 0px 30px var(--gray-300);
  border-radius: 0.5rem;

  padding: 4rem;

  max-width: 969px;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  gap: 1rem;

  margin: auto;

  div.left {
    max-width: 350px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 3rem;

    img {
      max-width: 191px;
    }

    strong {
      font-size: 2.3rem;
      font-weight: 700;
    }

    p {
      color: var(--gray-500);
    }

    a {
      display: flex;
      align-items: center;
      margin: -1rem;

      text-decoration: none;
      color: var(--gray-900);
      font-weight: 700;
    }
  }

  div.right {
    display: flex;
    flex-direction: column;
    max-width: 448px;
    width: 100%;
    gap: 0.5rem;

    input,
    textarea {
      padding: 1rem;
      border: 1px solid var(--gray-300);
      border-radius: 0.25rem;
      font-size: 1rem;
    }

    textarea {
      min-height: 175px;
    }

    div {
      display: flex;
      justify-content: space-between;
      width: 100%;

      button {
        padding: 1rem;
        border-radius: 0.25rem;
        font-weight: 700;
        font-size: 1rem;
      }
      button[type="button"] {
        background: none;
        border: 1px solid var(--gray-300);
        width: 30%;

        &:hover {
          background: var(--gray-200);
        }
        &:active {
          background: var(--gray-300);
        }
      }

      button[type="submit"] {
        background: var(--red-hero);
        border: none;
        color: var(--gray-50);
        margin-left: 0.5rem;
        width: 70%;

        &:hover {
          background: var(--red-500);
        }
        &:active {
          background: var(--red-600);
        }
      }
    }
  }
`;
