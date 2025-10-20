import React, { Component } from 'react'
import Global from '../../Global';
import axios from 'axios';
import Alumnos from './Alumnos';

export default class Cursos extends Component {
    url = Global.urlAlumnos;
    desplegableCursos = React.createRef();
    buscarCursos = () => {
        var request = "api/Alumnos/Cursos";
        axios.get(this.url + request).then(response => {
            this.setState({
                cursos: response.data
            })
        })
    }
    seleccionaCurso = (event) => {
        event.preventDefault();
        this.setState({
            cursoSeleccionado: this.desplegableCursos.current.value
        })
    }
    seleccionarAlumno = (alumno) => {
        this.setState({
            alumnoSeleccionado: alumno
        })
    }
    state = {
        cursos: [],
        cursoSeleccionado: 0,
        alumnoSeleccionado: null
    }
    componentDidMount = () => {
        this.buscarCursos();
    }
    render() {
    return (
      <div>
        <h1>Cursos</h1>
        <form>
            <select ref={this.desplegableCursos} onChange={this.seleccionaCurso}>
                <option value="0">SELECCIONA UN CURSO</option>
                {
                    this.state.cursos.map((curso, index) => {
                        return (
                            <option key={index} value={curso}>{curso}</option>
                        )
                    })
                }
            </select>
        </form>
        {this.state.alumnoSeleccionado && (
            <div>
                <h1>{this.state.alumnoSeleccionado.nombre} {this.state.alumnoSeleccionado.apellidos}</h1>
                <h1>IdAlumno: {this.state.alumnoSeleccionado.idAlumno}</h1>
                <img src={this.state.alumnoSeleccionado.imagen} width={250}/>
            </div>
        )}
        {this.state.cursoSeleccionado != 0 && (
            <Alumnos curso={this.state.cursoSeleccionado} seleccionarAlumno={this.seleccionarAlumno}/>
        )}
      </div>
    )
  }
}
