import React, { Component } from "react";
import axios from "axios";

export default class ServicioApiCustomers extends Component {
  url = "https://services.odata.org/V4/Northwind/Northwind.svc/Customers";
  state = {
    customers: [],
  };
  leerCustomers = () => {
    console.log("Antes del servicio");
    axios.get(this.url).then((response) => {
      console.log("Dentro del servicio");
      this.setState({
        customers: response.data.value,
      });
    });

    console.log("Después del servicio");
  };
  componentDidMount = () => {
    console.log("Creando component");
    this.leerCustomers();
  };
  render() {
    return (
      <div>
        <h1>Servicio de API customers</h1>
        <button>Load Customers</button>
        {this.state.customers.map((cliente, index) => {
          return <h3 key={index}>{cliente.ContactName}</h3>;
        })}
      </div>
    );
  }
}
