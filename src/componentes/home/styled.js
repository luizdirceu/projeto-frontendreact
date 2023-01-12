import styled from "styled-components";

// export const EstilizarHeader = styled.header`
// background-color: darkslateblue;
// font-family: Verdana, Geneva, Tahoma, sans-serif;
// font-style: italic;
// text-align: center;
// height: 70px;
// font-size: 50px;
//   img {
//     width: 50px;
//     height: 50px;
//     border-radius:3px;
//   }
//   button {
//     position: absolute;
//     margin-left: 30%;
//     background: none;
//     border: none;
//     width: 70px;
//     height: 70px;
//     cursor: pointer;
//   }
//   @media (max-width: 800px) {
//       margin: 0 auto;
//       img{
//         width: 50px;
//         height: 50px;
//       }
//       button {
//         width: 50px;
//         height: 50px;
//     cursor: pointer;
//   }
//     }

// `
export const EstilizarDiv = styled.div`
display: flex;
flex-direction: column;
justify-items: center;
flex-wrap:wrap;
  background-color: white;
  border: 1px solid black;
  margin: 40px;
  max-width: 19rem;
 
  border-radius: 10px;
  box-shadow: 10px 10px 30px #bdbdbd;
  cursor: pointer;
  :hover{
    transform: scale(1.1);}
  h1{
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 20px;
text-align:center;
padding: 5px;
  }
  p{
    background-color:red;
    text-align:center;
padding: 5px;
  }
  img{
    width: 15rem;
    height:15rem;
    border-radius: 10px;
    
  }
  button{
    position: relative;
    padding: 5px;
    margin: 10px;
    cursor:pointer;
   border-radius: 4px;
  }
  button:hover {
      background-color: silver;
      color: black;
    }
  `



export const EstilizarNav = styled.nav`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-between;
padding:30px;
padding-top: 50px;
`

export const EstilizarBody = styled.body`
height: 100%;
`


