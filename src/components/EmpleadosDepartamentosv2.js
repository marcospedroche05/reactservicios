import React, { Component } from "react";
import Global from "../Global";
import axios from "axios";

export default class EmpleadosDepartamentosv2 extends Component {
  urlDepartamentos = Global.urlDepartamentos;
  urlEmpleados = Global.urlEmpleados;
  selectDepartamentos = React.createRef();
  loadDepartamentos = () => {
    var requestgetdepartamentos = "webresources/departamentos";
    axios
      .get(this.urlDepartamentos + requestgetdepartamentos)
      .then((response) => {
        this.setState({
          departamentos: response.data,
        });
      });
  };
  loadEmpleados = (event) => {
    event.preventDefault();
    var idDepartamento = parseInt(this.selectDepartamentos.current.value);
    var requestgetempleados =
      "api/Empleados/EmpleadosDepartamento/" + idDepartamento;
    axios.get(this.urlEmpleados + requestgetempleados).then((response) => {
      this.setState({
        empleados: response.data,
      });
    });
  };
  state = {
    departamentos: [],
    empleados: [],
  };
  componentDidMount = () => {
    this.loadDepartamentos();
  };
  render() {
    return (
      <div>
        <h1>Empleados departamentos</h1>
        <form>
          <select ref={this.selectDepartamentos} onChange={this.loadEmpleados}>
            {this.state.departamentos.map((departamento, index) => {
              return (
                <option value={departamento.numero} key={index}>
                  {departamento.nombre}
                </option>
              );
            })}
          </select>
        </form>
        <ul>
          {this.state.empleados.map((empleado, index) => {
            return <li key={index}>{empleado.apellido}</li>;
          })}
        </ul>
      </div>
    );
  }
}
