import React from 'react';
import ReactDOM from 'react-dom';
import PrimeiroComponente from './componentes/PrimeiroComponente';

const elemento = document.getElementById('root');
ReactDOM.render(
    <div>
        { /*O ** é  o operador de potência. Equivale a Math.pow(2, 8)*/}
        <PrimeiroComponente valor = "Bom dia" potencia2={2**8}/>
    </div>
    , elemento);

// const elemento = document.getElementById('root');
// ReactDOM.render(<h1> Olá React</h1>, elemento);

