  import { EstilizarHeader } from "./HeaderStyled"
  import Logo from "./Space.png"

  function Header(props){
  const mudarTelaCarrinho = () => {
    props.setTelaCarrinho(true);
  };

  return (
  <EstilizarHeader>
     <img src={Logo} className="space"/>
    SPACE 
    <button onClick={mudarTelaCarrinho}>
              <img src={"https://static.vecteezy.com/ti/vetor-gratis/p3/2238646-isolado-de-carrinho-de-compras-icone-cesta-simbolo-eps10-gratis-vetor.jpg"} />
            </button>
            
        </EstilizarHeader>)}

        export default Header;