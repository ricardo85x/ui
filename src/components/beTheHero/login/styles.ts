import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;

  display: flex;
`;

export const Content = styled.div`
  max-width: 869px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin: 122px auto;
  flex-direction: row;
  justify-content: space-between;

  div.left {
    display: flex;
    flex-direction: column;

    img {
      max-width: 250px;
      margin: 2em auto 4em;
    }

    div.form {
      margin: 0 auto;
      display: flex;
      flex-direction: column;

      strong {
        font-size: 1.5em;
        font-weight: 500;
        margin: 0.2em 0;
      }
      input {
        font-size: 1em;

        padding: 0.5em;
        margin: 1em 0;
        border-color: var(--gray-100);
        border-radius: 5px;
      }

      button {
        font-size: 0.8em;
        padding: 1em;
        background-color: var(--red-hero);
        border-radius: 5px;
        border: none;

        color: var(--gray-50);
        font-weight: 700;

        &:hover {
          background-color: var(--red-500);
        }

        &:active {
          background-color: var(--red-400);
        }
      }

      div {
        margin: 1em 0;

        a {
          margin-left: 0.3em 0;
          color: var(--gray-900);
          text-decoration: none;

          display: flex;
          flex-direction: row;
          align-items: center;

          &:hover {
            color: var(--gray-700);
          }

          svg {
            margin-right: 10px;
          }
        }
      }
    }
  }

  div.right {
    img {
      max-width: 593px;
    }
  }
`;
