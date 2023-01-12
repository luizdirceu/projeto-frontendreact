import { React } from "react";
import { GlobalStayled } from "./GlobalStyle";
import Home from "./componentes/home/Home";
import Filtros from "./componentes/filtro/Filtro";
import { useState } from 'react';
import Header from "./componentes/Header/Header";
import Footer from "./componentes/Footer/Footer";

function App() {
  
  const [order, setOrder] = useState("cresc");
  const [maxValue, setMaxValue] = useState("");
  const [minValue, setMinValue] = useState("");
  const [telaCarrinho, setTelaCarrinho] = useState(false)
  

  return (
    <div>
<GlobalStayled/>
<Header setTelaCarrinho={setTelaCarrinho} />
        <GlobalStayled />
        <Filtros
          
          order={order}
          setOrder={setOrder}
          maxValue={maxValue}
          setMaxValue={setMaxValue}
          minValue={minValue}
          setMinValue={setMinValue}
        />
        <Home telaCarrinho={telaCarrinho}
          setTelaCarrinho={setTelaCarrinho}
          order={order}
          setOrder={setOrder}
          maxValue={maxValue}
          setMaxValue={setMaxValue}
          minValue={minValue}
          setMinValue={setMinValue}
        />
       <Footer/>
    </div>
  );
}

export default App;
