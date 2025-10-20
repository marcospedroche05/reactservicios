import React, { Component } from 'react'
import Global from '../../Global';
import axios from 'axios';

export default class Empleados extends Component {
    url = Global.urlEmpleados;
    buscarEmpleados = () => {
        var request = "api/Empleados/EmpleadosDepartamento/" + this.props.iddepartamento;
        console.log(request);
        axios.get(this.url + request).then(response => {
            this.setState({
                empleadosDepartamento: response.data
            })
        })
    }   
    state = {
        empleadosDepartamento: [],
        texto: ""
    }
    componentDidUpdate = (oldProps) => {
        //DIBUJAMOS LAS NUEVAS Y LAS ANTIGUAS
        // console.log("Current: " + this.props.iddepartamento);
        // console.log("Old: " + oldProps.iddepartamento);
        //SOLAMENTE ACTUALIZAMOS STATE SI PROPS HA CAMBIADO
        if(oldProps.iddepartamento != this.props.iddepartamento) {
            console.log("Entra");
            this.buscarEmpleados();
        }
    }
    componentDidMount = () => {
        this.buscarEmpleados();
    }
  render() {
    return (
      <div>
        <h1>Empleados {this.props.iddepartamento}</h1>
        <ul>
            {
                this.state.empleadosDepartamento.map((empleado, index) => {
                    return(
                        <li key={index}>{empleado.apellido} - {empleado.oficio}</li>
                    )
                })
            }
        </ul>
      </div>
    )
  }
}
