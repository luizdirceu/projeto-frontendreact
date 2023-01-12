import { Container, Search, SearchValue } from "./FiltroStyle";

const Filtros = (props) => {
  // const handleSearch = (event) => {
  //   props.setPesquisa(event.target.value);
  // };

  const handleOrderSearch = (event) => {
    props.setOrder(event.target.value);
  };

  const handleMaxValue = (event) => {
    props.setMaxValue(event.target.value);
  };

  const handleMinValue = (event) => {
    props.setMinValue(event.target.value);
  };

  return (
    <Container>
      <SearchValue>
        <p>Valor máximo: </p>
        <input type="number" value={props.maxValue} onChange={handleMaxValue} placeholder="R$0,00"/>
        <p>Valor mínimo: </p>
        <input type="number" value={props.minValue} onChange={handleMinValue} placeholder="R$0,00"/>
      </SearchValue>
      <Search>
        {/* <input
          type="text"
          placeholder="Buscar..."
          onChange={handleSearch}
          value={props.pesquisa}
        /> */}
        <select value={props.order} onChange={handleOrderSearch}>
          <option value="cresc">Crescente A-Z</option>
          <option value="decresc">Decrescente Z-A</option>
        </select>
      </Search>
    </Container>
  );
};

export default Filtros;