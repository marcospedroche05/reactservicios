import React, { Component } from "react";
import Global from "../Global";
import axios from "axios";

export default class Trabajadores extends Component {
  url = Global.apiTrabajadores;
  loadTrabajadores = () => {
    var data = "";
    this.props.hospitales.map((hospital, index) => {
      data += "idHospital=" + hospital + "&";
    });
    data = data.substring(0, data.length - 1);
    var request = "api/Trabajadores/Trabajadoreshospitales?" + data;

    axios.get(this.url + request).then((response) => {
      this.setState({
        trabajadores: response.data,
      });
    });
  };
  state = {
    trabajadores: [],
  };
  componentDidMount = () => {
    this.loadTrabajadores();
  };
  componentDidUpdate = (oldProps) => {
    if (oldProps.hospitales != this.props.hospitales) {
      this.loadTrabajadores();
    }
  };
  render() {
    return (
      <div>
        <h1>Trabajadores</h1>
        <table>
          <thead>
            <th>Id Trabajador</th>
            <th>Apellido</th>
            <th>Oficio</th>
            <th>Salario</th>
            <th>Id hospital</th>
          </thead>
          <tbody>
            {this.state.trabajadores.map((trabajador, index) => {
              return (
                <tr key={index}>
                  <td>{trabajador.idTrabajador}</td>
                  <td>{trabajador.apellido}</td>
                  <td>{trabajador.oficio}</td>
                  <td>{trabajador.salario}</td>
                  <td>{trabajador.idHospital}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
