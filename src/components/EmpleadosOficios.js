import React, { Component } from "react";
import Global from "../Global";
import axios from "axios";
import "./EmpleadosOficios.css";

export default class EmpleadosOficios extends Component {
  url = Global.urlEmpleados;
  selectReferencia = React.createRef();
  loadOficios = () => {
    var oficiosaux = [];
    var requestgetempleados = "api/Empleados";
    axios.get(this.url + requestgetempleados).then((response) => {
      response.data.map((empleado, index) => {
        if (!oficiosaux.includes(empleado.oficio))
          oficiosaux.push(empleado.oficio);
      });
      this.setState({
        oficios: oficiosaux,
      });
    });
  };
  loadEmpleados = (event) => {
    event.preventDefault();
    var oficio = this.selectReferencia.current.value;
    var requestgetempleadosporoficio =
      "api/Empleados/EmpleadosOficio/" + oficio;
    axios.get(this.url + requestgetempleadosporoficio).then((response) => {
      this.setState({
        empleados: response.data,
      });
    });
  };
  componentDidMount = () => {
    this.loadOficios();
  };
  state = {
    oficios: [],
    empleados: [],
  };
  render() {
    return (
      <div>
        <h1>Empleados oficios</h1>
        <form>
          <select onChange={this.loadEmpleados} ref={this.selectReferencia}>
            {this.state.oficios.map((oficio, index) => {
              return (
                <option value={oficio} key={index}>
                  {oficio}
                </option>
              );
            })}
          </select>
        </form>
        <br />
        <table border={1}>
          <thead>
            <th>Apellido</th>
            <th>Oficio</th>
            <th>Salario</th>
          </thead>
          <tbody>
            {this.state.empleados &&
              this.state.empleados.map((empleado, index) => {
                return (
                  <tr key={index}>
                    <td>{empleado.apellido}</td>
                    <td>{empleado.oficio}</td>
                    <td>{empleado.salario}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    );
  }
}
