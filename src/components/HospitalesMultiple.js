import React, { Component } from "react";
import Global from "../Global";
import axios from "axios";
import Trabajadores from "./Trabajadores";

export default class HospitalesMultiple extends Component {
  url = Global.apiTrabajadores;
  selectMultiple = React.createRef();
  loadHospitales = () => {
    var request = "api/Hospitales";
    axios.get(this.url + request).then((response) => {
      this.setState({
        hospitales: response.data,
      });
    });
  };
  seleccionHospitales = (event) => {
    event.preventDefault();
    var aux = [];
    var opciones = Array.from(this.selectMultiple.current.selectedOptions);
    opciones.map((opcion, index) => {
      aux.push(parseInt(opcion.value));
    });
    this.setState({
      hospitalesEnviados: aux,
    });
  };
  state = {
    hospitales: [],
    hospitalesEnviados: [],
  };
  componentDidMount = () => {
    this.loadHospitales();
  };
  render() {
    return (
      <div>
        <h1>Hospitales</h1>
        <form onSubmit={this.seleccionHospitales}>
          <select ref={this.selectMultiple} multiple style={{ width: "150px" }}>
            {this.state.hospitales.map((hospital, index) => {
              return (
                <option key={index} value={hospital.idHospital}>
                  {hospital.nombre}
                </option>
              );
            })}
          </select>
          <button>Enviar trabajadores</button>
        </form>
        {this.state.hospitalesEnviados.length >= 1 && (
          <Trabajadores hospitales={this.state.hospitalesEnviados} />
        )}
      </div>
    );
  }
}
