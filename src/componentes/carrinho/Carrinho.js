import React, { useState } from "react";
import { Container, CarrinhoDiv, Compras } from "./carrinhoStyle";

import CompraFinalizada from "../CompraFinalizada/CompraFinalizada";


function CarrinhoDeCompras (props){
    const [telaPedidoFinalizado, setTelaPedidoFinalizado] = useState(true);

    //Função pra mudar de tela
    const mudarTelaCarrinho = () => {
      props.setTelaCarrinho(false);
    };
  
    //Função pra mudar de tela
    const mudarTelaPedidoFinalizado = () => {
      setTelaPedidoFinalizado(false);
      props.setCarrinho([])
    };
  
    //Soma dos produtos no carrinho
    let totalCarrinho = 0;
  
    for (let i = 0; i < props.carrinho.length; i++) {
      totalCarrinho = totalCarrinho + props.carrinho[i].precoTotal;
    }

//Remover produto do carrinho
const removerItem = (item) => {
    const novoCarrinho = [...props.carrinho];
    const produto = item;
    const produtoExistente = novoCarrinho.find((item) => {
      return item.id === produto.id;
    }
    )

    //Faz a soma do valor total
    if (produtoExistente.quantidade > 1) {
      produtoExistente.quantidade--;
      produtoExistente.precoTotal = produtoExistente.quantidade * produtoExistente.value;
    } 
   else if ((produtoExistente.quantidade = 1)) {
      novoCarrinho.pop(produtoExistente);
    }

    //Guarda as informações no local storage
    const carrinhoJson = JSON.stringify(novoCarrinho);
    localStorage.setItem("carrinho", carrinhoJson);
    
    props.setCarrinho(novoCarrinho);
  };

  //Contador de produtos adicionados no carrinho
  let contadorProdutos = 0;

  for (let i = 0; i < props.carrinho.length; i++) {
    contadorProdutos = contadorProdutos - props.carrinho[i].quantidade;
  }

return(
<>
      {telaPedidoFinalizado ? (
        <Container>
          <section>
            <h1>Total de produtos: {contadorProdutos}</h1>
            <h1>Carrinho: </h1>
            {props.carrinho.map((item, index) => {
              return (
                <CarrinhoDiv key={index}>
                  <div>
                    <p>
                      x{item.quantidade} {item.nome} <img src={item.imagem} /> - {""}
                      {item.value}{" "}
                    </p>
                    <div>
                      <button onClick={() => removerItem(item)}>
                        <img src={"https://st4.depositphotos.com/20524830/26021/i/450/depositphotos_260218458-stock-photo-trash-can-icon-from-primitive.jpg"} />
                      </button>
                    </div>
                  </div>
                </CarrinhoDiv>
              );
            })}
            <Compras>
              <h1>
                Total:{" "}
                {totalCarrinho.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </h1>
              <button onClick={mudarTelaCarrinho}>Continue Comprando</button>
              <button onClick={mudarTelaPedidoFinalizado}>
                Finalizar Compra
              </button>
            </Compras>
          </section>
        </Container>
      ) : (
        <CompraFinalizada
          setTelaCarrinho={props.setTelaCarrinho}
          mudarTelaCarrinho={mudarTelaCarrinho}
        />
      )}
    </>
  );
};



export default CarrinhoDeCompras;