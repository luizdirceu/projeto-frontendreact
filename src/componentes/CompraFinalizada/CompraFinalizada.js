import { Container } from "./CompraFinalizadasttyle";

const CompraFinalizada = (props) => {
  return (
    <Container>
      <div>
        <h1>Compra Finalizada</h1>
        <p>Seu produto chegará em breve</p>
        <p>Volte Sempre!</p>
        <button onClick={props.mudarTelaCarrinho}>Menu Principal</button>
      </div>
    </Container>
  );
};

export default CompraFinalizada;