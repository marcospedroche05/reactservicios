import React, { Component } from 'react'

export default class MenuRutas extends Component {
  render() {
    return (
      <div>
        <ul>
            <li><a href='/'>Home</a></li>
            <li><a href='/tabla/21'>Tabla multiplicar 21</a></li>
            <li><a href='/tabla/10'>Tabla multiplicar 10</a></li>
            <li><a href='/collatz/9'>Collatz con 9</a></li>
            <li><a href='/collatz/12'>Collatz con 12</a></li>
        </ul>
      </div>
    )
  }
}
