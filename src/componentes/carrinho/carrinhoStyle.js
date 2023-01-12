import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
  height: 70%;
  
  section {
    border: 3px solid red;
    margin: 50px auto;
    width: 50vw;
    border-radius: 5px;
    padding: 10px 0 0 10px;
  
    @media (max-width:800px) {
      width: 75vw;
      margin: 10vh auto;
    }
  }
`;

export const CarrinhoDiv = styled.div`

      display: flex;
      flex-direction: row;
      justify-content: center;
    
  img {
    width: 20px;
    height: 20px;
  }
  div {
    display: flex;
    margin: 5px;
    align-items: center;
  }
  button {
    background: none;
    border: none;
    cursor: pointer;
    
  }
`;

export const Compras = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  padding:20px;
  
  @media (max-width:800px) {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
    }
  button {
    margin-top: 5px;
    margin-bottom: 5px;
    display: flex;
    border-radius: 10px;
    padding-top: 20px;
    font-size: 17px;
    width: 14vw;
    height: 60px;
    border: none;
    background-color: red;
    color: white;
    transition: all 0.5s;
    justify-content: center;
    margin-left:210px;
    margin-top:25px;
    :hover {
      background-color: silver;
      color: black;
    }

    :active {
      background-color: black;
      color: white;
    }
    cursor: pointer;
    @media (max-width:800px) {
      margin: 0;
      display: block;
      padding: 0px;
      width: 32vw;
      margin-bottom: 6px;
      font-size: 12px;
      font-weight: bold;
}
  }
`;
