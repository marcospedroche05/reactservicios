import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class MenuRutas extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/tabla/21">Tabla multiplicar 21</NavLink>
          </li>
          <li>
            <NavLink to="/tabla/10">Tabla multiplicar 10</NavLink>
          </li>
          <li>
            <NavLink to="/collatz/9">Collatz con 9</NavLink>
          </li>
          <li>
            <NavLink to="/collatz/12">Collatz con 12</NavLink>
          </li>
        </ul>
      </div>
    );
  }
}
