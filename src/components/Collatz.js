import React, { Component } from "react";

export default class Collatz extends Component {
  realizarConjetura = () => {
    var numero = this.props.numero;
    var aux = [];
    while (numero != 1) {
      if (numero % 2 == 0) {
        numero = numero / 2;
      } else {
        numero = numero * 3 + 1;
      }
      aux.push(numero);
    }
    this.setState({
      numeros: aux,
    });
  };
  state = {
    numeros: [],
  };
  componentDidUpdate = (oldProps) => {
    if (oldProps.numero != this.props.numero) this.realizarConjetura();
  };
  componentDidMount = () => {
    this.realizarConjetura();
  };
  render() {
    return (
      <div>
        <h1>Conjetura de Collatz con el número {this.props.numero}</h1>
        <ul>
          {this.state.numeros.map((numero, index) => {
            return <li key={index}>{numero}</li>;
          })}
        </ul>
      </div>
    );
  }
}
