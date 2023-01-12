import styled from "styled-components";

export const EstilizarHeader = styled.header`
background-color: yellow;
font-family: Verdana, Geneva, Tahoma, sans-serif;
font-style: italic;
text-align: left;
height: 70px;
font-size: 50px;

  img {
    width: 50px;
    height: 50px;
    border-radius:3px;
  }
  button {
    position: absolute;
    margin-left: 70%;
    background: none;
    border: none;
    width: 70px;
    height: 70px;
    cursor: pointer;
  }

  @media (max-width: 800px) {
      margin: 0 auto;
      img{
        width: 50px;
        height: 50px;
      }
      button {
        width: 50px;
        height: 50px;
    cursor: pointer;
  }
    }
   
`