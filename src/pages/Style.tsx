import styled from "styled-components";

export const Container = styled.div`
  background-color: white;
  /* max-width: 100; */
  width: 100%;
  padding: 4% 10%;
  text-align: center;
  color: black;
`;

export const MoveLeft = styled.div`
  margin-right: auto;
  width: 50%;
`;

export const MoveRight = styled.div`
  margin-left: auto;
`;

export const BigText = styled.h1`
  font-size: clamp(1.5rem, 4vw, 3rem);
  margin: 0;
`;

export const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5%;
  width: 100%;
`;

export const AddTodoContainer = styled(Flex)`
  gap: 1%;
`;

export const InputText = styled.input`
  padding: 1rem;
  border: 2px solid lightskyblue;
  text-align: center;
  color: blueviolet;

  &::placeholder {
    color: lightskyblue;
  }

  &:focus {
    outline: none;
    border: 2px solid darkorange;
  }
`;

export const AddButton = styled.button`
  background-color: lightskyblue;
  color: white;
  padding: 1rem;
  border: none;
  font-size: 1rem;
`;

export const TodoContainer = styled(Flex)`
  background-color: lightskyblue;
  opacity: 0.5;
`;
