import React, { Component } from "react";
import Global from "../Global";
import axios from "axios";

export default class EmpleadosDepartamento extends Component {
  url = Global.urlEmpleados;
  cajaid = React.createRef();
  loadEmpleados = (event) => {
    event.preventDefault();
    let idDepartamento = parseInt(this.cajaid.current.value);
    let requestget = "api/Empleados/EmpleadosDepartamento/" + idDepartamento;
    axios.get(this.url + requestget).then((response) => {
      this.setState({
        empleados: response.data,
      });
    });
  };
  state = {
    empleados: [],
  };
  render() {
    return (
      <div>
        <h1>Empleados departamento</h1>
        <form onSubmit={this.loadEmpleados}>
          <label>Introduce el id del departamento: </label>
          <input type="number" ref={this.cajaid} />
          <br />
          <button type="submit">Leer empleados</button>
        </form>
        <ul>
          {this.state.empleados &&
            this.state.empleados.map((empleado, index) => {
              return <li key={index}>{empleado.apellido}</li>;
            })}
        </ul>
      </div>
    );
  }
}
