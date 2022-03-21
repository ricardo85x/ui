import styled, { createGlobalStyle } from "styled-components";

export const PageStyle = createGlobalStyle`
 body {
   // background: var(--gray-100);
  } 
`;
export const Container = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Content = styled.div`
  max-width: 869px;
  width: 100%;
  margin: 2rem auto;

  padding-bottom: 3rem;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  > strong {
    font-size: 1.5rem;
    padding-bottom: 2rem;
  }

  .cards {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-row-gap: 2rem;
    grid-column-gap: 2rem;

    .card {
      display: flex;
      justify-content: space-between;
      background-color: white;
      padding: 1rem;
      border-radius: 0.5rem;

      .left {
        display: flex;
        flex-direction: column;

        div {
          padding: 1rem;

          strong {
            font-weight: 700;
            color: var(--gray-700);
          }
          p {
            margin-top: 1rem;

            color: var(--gray-500);
          }
        }
      }
    }
  }
`;
