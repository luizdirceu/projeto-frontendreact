
import { EstilizarDiv, EstilizarNav, EstilizarBody,  } from "./styled"
import Carrinho from "../carrinho/Carrinho";
import { useState } from 'react';



function Home(props) {

    const [carrinho, setCarrinho] = useState ([]);

    const produtos = [{
        id: 1,
        nome: "Camiseta espaço ",
        value: 90,
        imagem: "https://http2.mlstatic.com/D_NQ_NP_834109-MLB52337098778_112022-V.jpg",
        quantidade: null,
      }, {
        id: 2,
        nome: "Camiseta planetas",
        value: 60,
        imagem: "https://cf.shopee.com.br/file/84ee54b439785296ebce6ee6617992a5",
        quantidade: null,
      },
      {
        id: 3,
        nome: "Camiseta space",
        value: 80,
        imagem: "https://a-static.mlcdn.com.br/1500x1500/camiseta-astronauta-camisa-espaco-darkwood/darkwoodshop2/11107465490/5280fe5e55e12ee91a50c0d9bb914049.jpeg",
        quantidade: null,
      }
        ,
      {
        id: 4,
        nome: "Camisa astronauta",
        value: 40,
        imagem: "https://img.elo7.com.br/product/main/2508E7B/camiseta-astronauta-filmes.jpg",
        quantidade: null,
      },
      {
        id: 5,
        nome: "Planetas",
        value: 45,
        imagem: "https://a-static.mlcdn.com.br/800x560/camiseta-planetas-camisa-espaco-galaxias-darkwood/darkwoodshop2/11228650989/98261ab296824e6d69a6e7f6b0c5ee7d.jpeg",
        quantidade: null,
      },
      {
        id: 6,
        nome: "Astronauta",
        value: 67,
        imagem: "https://http2.mlstatic.com/D_NQ_NP_987401-MLB31678320137_082019-O.jpg",
        quantidade: null,
      }
    ]

    
    // const mudarTelaCarrinho = () => {
    //     props.setTelaCarrinho(true);
    //   };

      const onChangeItem = (event) => {
        setCarrinho(event.target.value);
      };

      const adicionarCarrinho = (item) => {
        const novoCarrinho = [...carrinho];
        const produto = item;
        const produtoExistente = novoCarrinho.find((item) => {
          return item.id === produto.id;
        });
        if (produtoExistente) {
          produtoExistente.quantidade++;
          produtoExistente.precoTotal = produtoExistente.quantidade * produtoExistente.value;
        } else {
          novoCarrinho.push({
            ...produto,
            quantidade: 1,
            precoTotal: produto.value,
          });
        }
        
          const carrinhoJson = JSON.stringify(novoCarrinho);
          localStorage.setItem("carrinho", carrinhoJson);
        
        setCarrinho(novoCarrinho);
        
      };

    return (

        <>
        {/* <EstilizarHeader>LOCAL SPACE 
        
            <button onClick={mudarTelaCarrinho}>
              <img src={"https://static.vecteezy.com/ti/vetor-gratis/p3/2238646-isolado-de-carrinho-de-compras-icone-cesta-simbolo-eps10-gratis-vetor.jpg"} />
            </button>
            
        </EstilizarHeader> */}
        
      {!props.telaCarrinho ? (
        <EstilizarBody>
           
          <EstilizarNav>
            {produtos
              .filter ((item)=>{
                return props.minValue ? item.value >= props.minValue : item
              })
              .filter((item) => {
                return props.maxValue ? item.value <= props.maxValue : item;
              })
              .sort((a, b) => {
                if (props.order === "cresc") {
                  if (a.nome < b.nome) {
                    return -1;
                  } else {
                    return 1;
                  }
                } else if (props.order === "decresc") {
                  if (a.nome < b.nome) {
                    return 1;
                  } else {
                    return -1;
                  }
                }
              })
              .map((item, index) => (
                <EstilizarDiv key={index}>
                  <h1>{item.nome}</h1>
                  <img src={item.imagem} alt={item.nome} />
                  <p>
                    Preço:{" "}
                    {item.value.toLocaleString("pt-br", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </p>
                  <button
                    onClick={() => adicionarCarrinho(item)}
                    onChange={onChangeItem}
                  >
                    COMPRAR
                  </button>
                </EstilizarDiv>
              ))}
          </EstilizarNav>
        </EstilizarBody>
      )
       : (
        <Carrinho
          setTelaCarrinho={props.setTelaCarrinho}
          carrinho={carrinho}
          setCarrinho={setCarrinho}
        />
      )}
    </>
  );
};
    

        
export default Home;
