import React, { Component } from 'react'
import Empleados from './Empleados'
import Global from '../../Global'
import axios from 'axios';

export default class Departamento extends Component {
    url = Global.urlDepartamentos;
    desplegableDepartamentos = React.createRef();
    cargaDepartamentos = () => {
        var request = "webresources/departamentos";
        var departamentosAux = [];
        axios.get(this.url + request).then(response => {
            response.data.map((departamento, index) => {
                departamentosAux.push(departamento);
            })
            this.setState({
                departamentos: departamentosAux
            })
        })
    }
    buscarEmpleados = (event) => {
        event.preventDefault();
        let idDepartamento = this.desplegableDepartamentos.current.value;
        this.setState({
            iddepartamento: idDepartamento
        })
    }
    state = {
        departamentos: [],
        iddepartamento: 0
    }
    componentDidMount = () => {
        this.cargaDepartamentos();
    }
    render() {
    return (
      <div>
        <h1>Departamentos</h1>
        <form onSubmit={this.buscarEmpleados}>
            <select ref={this.desplegableDepartamentos}>
                {
                    this.state.departamentos.map((departamento, index) => {
                        return (
                            <option key={index} value={departamento.numero}>{departamento.nombre}</option>
                        )
                    })
                }
            </select>
            <button>Cargar empleados</button>
        </form>
        {
            this.state.iddepartamento !=0 && (
                <Empleados iddepartamento={this.state.iddepartamento}/>
            )
        }
        </div>
    )
  }
}
