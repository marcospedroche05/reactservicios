import React, { Component } from "react";
import Global from "../Global";
import axios from "axios";
import Trabajadores from "./Trabajadores";

export default class HospitalesMultiple extends Component {
  url = Global.apiTrabajadores;
  selectMultiple = React.createRef();
  cajaIncremento = React.createRef();
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
  incrementoSalarial = () => {
    var incremento = parseInt(this.cajaIncremento.current.value);
    var opciones = Array.from(this.selectMultiple.current.selectedOptions);
    var data = "";
    data += "incremento=" + incremento + "&";
    opciones.map((opcion, index) => {
      data += "idhospital=" + opcion.value + "&";
    });
    data = data.substring(0, data.length - 1);
    var request =
      "api/trabajadores/updatesalariotrabajadoreshospitales?" + data;
    axios.put(this.url + request).then((response) => {
      window.location.reload();
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
          <br />
          <label>Incremento: </label>
          <input type="number" ref={this.cajaIncremento} />
          <br />
          <button onClick={this.incrementoSalarial}>Incrementar Salario</button>
          <button>Enviar trabajadores</button>
        </form>
        {this.state.hospitalesEnviados.length >= 1 && (
          <Trabajadores hospitales={this.state.hospitalesEnviados} />
        )}
      </div>
    );
  }
}
