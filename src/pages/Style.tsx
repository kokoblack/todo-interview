import styled from "styled-components";

export const Progress = styled.div`
  background: linear-gradient(to right, yellow %, white 50%);
  margin-right: auto;
  padding: 0.5rem;
  width: 45%;
  border: 1px solid lightgrey;

  @media screen and (min-width: 480px) and (max-width: 767px) {
    font-size: 0.8rem;
  }

  @media screen and (max-width: 480px) {
    padding: 2%;
    font-size: 3vw;
    width: 42%;
  }
`;
