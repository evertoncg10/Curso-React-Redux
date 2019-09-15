import React from 'react';
import ReactDOM from 'react-dom';
//import PrimeiroComponente from './componentes/PrimeiroComponente';
// o as serve para dar um apelido ao componente
//import { CompA, CompB as B} from './componentes/DoisComponentes';

// import MultiElementos from './componentes/MultiElementos';

import FamiliaSilva from './componentes/FamiliaSilva';

const elemento = document.getElementById('root');
ReactDOM.render(
    <div>
        { /*O ** é  o operador de potência. Equivale a Math.pow(2, 8)*/}
        {/*<PrimeiroComponente valor="Bom dia" potencia2={2**8}/>

        <CompA valor="Olá eu sou A!"/>
        <B valor="B na área!"/>*/}
        {/* <MultiElementos/> */}
        <FamiliaSilva />
    </div>
    , elemento);

// const elemento = document.getElementById('root');
// ReactDOM.render(<h1> Olá React</h1>, elemento);

