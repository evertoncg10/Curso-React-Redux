import React from 'react';
import ReactDOM from 'react-dom';
import PrimeiroComponente from './componentes/PrimeiroComponente';

const elemento = document.getElementById('root');
ReactDOM.render(
    <div>
        <PrimeiroComponente/>
    </div>
    , elemento);

// const elemento = document.getElementById('root');
// ReactDOM.render(<h1> Olá React</h1>, elemento);

