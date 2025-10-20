import React, { Component } from 'react'
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom'
import Home from './Home'
import TablaMultiplicar from './TablaMultiplicar'
import NotFound from './NotFound'

export default class Router extends Component {
  render() {
    function TablaMultiplicarElement () {
        //ESTA FUNCIÓN NOS SERVIRA PARA CAPTURAR LOS PARAMETROS RECIBIDOS EN UNA RUTA Y ENVIARLOS CON PROPS A NUESTRO COMPONENT
        //VOY A ENVIAR UN PARAMETRO LLAMADO minumero
        let {minumero} = useParams();
        //DEVOLVEMOS EL COMPONENTE TABLAMULTIPLICAR CON SUS PROPS
        return <TablaMultiplicar numero={minumero}/>
    }
    return (
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/tabla/:minumero' element={<TablaMultiplicarElement/>}/>
            <Route path='*' element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    )
  }
}
