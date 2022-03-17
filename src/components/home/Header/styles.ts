import styled from "styled-components";

export const Container = styled.header`
  background: var(--gray-200);
  position: relative;
  height: 4rem;
`;

export const Content = styled.div`
  max-width: 320px;
  position: absolute;
  right: 0;
  top: 0;

  padding: 0 1.5rem;

  font-size: 1.5rem;
  font-weight: 500;

  ul {
    display: flex;
    list-style-type: none;

    li {
      margin: 1rem;

      a {
        text-decoration: none;
        color: var(--gray-800);

        &:hover {
          color: var(--gray-700);
        }
      }
    }
  }
`;
