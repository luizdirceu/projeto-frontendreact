import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background-color: gainsboro;
  background-repeat: no-repeat;
  justify-content: space-between;
  align-items: center;
  border: 1px solid black;
  color: red;
  height: 5vh;
  font-size: 18px;
  @media (max-width: 800px) {
    flex-direction: column;
    height: 9.5vh;
  }
  div {
    display: flex;
    z-index: 1;
  }
  input {
    border-radius: 7px;
    border: 1px solid black;
  }
`;

export const Search = styled.div`
  gap: 10px;
  height: 24px;
  input {
    background-image: url("https://cdn-icons-png.flaticon.com/512/1617/1617460.png");
    background-size: 1.7em;
    background-repeat: no-repeat;
    background-position: left;
    padding-left: 1.8em;
    width: 150px;
  }
  select {
    background-color: #e3c9df;
    width: 140px;
    border: none;
    font-size: 16px;
    
  }
`;

export const SearchValue = styled.div`
  margin-left: 25px;
  gap: 10px;
  input {
    width: 105px;
    @media (max-width: 800px) {
    width: 20vw;
  }
  }
`;
