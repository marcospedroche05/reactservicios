import React, { Component } from 'react'
import Global from '../../Global';
import axios from 'axios';

export default class Alumnos extends Component {
    url = Global.urlCursos;
    buscarAlumnos = () => {
        var curso = this.props.curso;
        var request = "api/Alumnos/FiltrarCurso/" + curso
        axios.get(this.url + request).then(response => {
            this.setState({
                alumnos: response.data
            })
        })
    }
    state = {
        alumnos: [],
    }
    componentDidUpdate = (oldProps) => {
        if(oldProps.curso != this.props.curso) {
            this.buscarAlumnos();
        }
    }
    componentDidMount = () => {
        this.buscarAlumnos();
    }
    render() {
    return (
      <div>
        <div>

        </div>
        <h1>Alumnos</h1>
        <ul>
            {
                this.state.alumnos.map((alumno, index) => {
                    return (
                        <li key={index}>{alumno.nombre} {alumno.apellidos} <button onClick={() => {
                            this.props.seleccionarAlumno(alumno);
                        }}>Detalles</button></li>
                    )
                })
            }
        </ul>
      </div>
    )
  }
}
