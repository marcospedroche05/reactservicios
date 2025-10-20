import React, { Component } from "react";
import Global from "../../Global";
import axios from "axios";

export default class Alumnos extends Component {
  url = Global.urlAlumnos;
  buscarAlumnos = () => {
    var curso = this.props.curso;
    var request = "api/Alumnos/FiltrarCurso/" + curso;
    axios.get(this.url + request).then((response) => {
      this.setState({
        alumnos: response.data,
      });
    });
  };
  state = {
    alumnos: [],
  };
  //CADA VEZ QUE SE ACTUALIZA EL COMPONENTE, ES DECIR, CADA VEZ QUE YO CAMBIO DE CURSO SELECCIONADO, VUELVO A BUSCAR LOS ALUMNOS DE DICHO CURSO
  componentDidUpdate = (oldProps) => {
    if (oldProps.curso != this.props.curso) {
      this.buscarAlumnos();
    }
  };
  //TAMBIÉN HE DE LLAMARLO CUANDO SE MONTA PARA QUE APAREZCA LA PRIMERA VEZ QUE CLICO
  componentDidMount = () => {
    this.buscarAlumnos();
  };
  render() {
    return (
      <div>
        <h1>Alumnos curso: {this.props.curso}</h1>
        <ul>
          {this.state.alumnos.map((alumno, index) => {
            return (
              <li key={index}>
                {alumno.nombre} {alumno.apellidos}{" "}
                <button
                  onClick={() => {
                    //LLAMADA AL METODO PROPS QUE ASIGNA AL STATE DEL PADRE EL ALUMNO SELECCIONADO
                    this.props.seleccionarAlumno(alumno);
                  }}
                >
                  Detalles
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
