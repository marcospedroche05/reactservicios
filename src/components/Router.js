import React, { Component } from "react";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Home from "./Home";
import TablaMultiplicar from "./TablaMultiplicar";
import NotFound from "./NotFound";
import Collatz from "./Collatz";
import MenuRutas from "./MenuRutas";

export default class Router extends Component {
  render() {
    function TablaMultiplicarElement() {
      //ESTA FUNCIÓN NOS SERVIRA PARA CAPTURAR LOS PARAMETROS RECIBIDOS EN UNA RUTA Y ENVIARLOS CON PROPS A NUESTRO COMPONENT
      //VOY A ENVIAR UN PARAMETRO LLAMADO minumero
      let { minumero } = useParams();
      //DEVOLVEMOS EL COMPONENTE TABLAMULTIPLICAR CON SUS PROPS
      return <TablaMultiplicar numero={minumero} />;
    }
    function CollatzElement() {
      let { numero } = useParams();
      return <Collatz numero={numero} />;
    }
    return (
      <BrowserRouter>
        <MenuRutas />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/tabla/:minumero"
            element={<TablaMultiplicarElement />}
          />
          <Route path="/collatz/:numero" element={<CollatzElement />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    );
  }
}
