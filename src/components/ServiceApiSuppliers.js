import axios from "axios";
import React, { Component } from "react";

export default class ServiceApiSuppliers extends Component {
  url = "https://services.odata.org/V4/Northwind/Northwind.svc/Suppliers";
  cajaId = React.createRef();
  state = {
    suppliers: [],
    supplierEncontrado: null,
  };
  loadSuppliers = () => {
    axios.get(this.url).then((response) => {
      this.setState({
        suppliers: response.data.value,
      });
    });
  };
  buscarSupplier = (event) => {
    event.preventDefault();
    var id = parseInt(this.cajaId.current.value);
    this.state.suppliers.map((supplier, index) => {
      if (supplier.SupplierID == id) {
        this.setState({
          supplierEncontrado: supplier,
        });
      }
    });
  };
  componentDidMount = () => {
    console.log("Creando componente");
    this.loadSuppliers();
  };
  render() {
    return (
      <div>
        <h1>Service API Suppliers</h1>
        <ul>
          {this.state.suppliers.map((supplier, index) => {
            return <li key={index}>{supplier.ContactName}</li>;
          })}
        </ul>
        <form onSubmit={this.buscarSupplier}>
          <label>Introduce un ID: </label>
          <input type="number" ref={this.cajaId}></input>
          <button type="submit">Buscar supplier</button>
        </form>
        {this.state.supplierEncontrado && (
          <div
            style={{
              padding: "1rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              border: "1px solid black",
              width: "25%",
              textAlign: "center",
              margin: "1rem",
            }}
          >
            <h2 style={{ color: "blue", textDecoration: "underline" }}>
              {this.state.supplierEncontrado.ContactName}
            </h2>
            <h3>{this.state.supplierEncontrado.ContactTitle}</h3>
            <h3>{this.state.supplierEncontrado.CompanyName}</h3>
          </div>
        )}
      </div>
    );
  }
}
