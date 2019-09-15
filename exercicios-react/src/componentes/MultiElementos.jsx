import React from 'react';

// Alternativas para retornar multiplos elementos adjacentes a partir de um componente
export default (props) => [
    <h1>Parte 1</h1>,
    <h2>Parte 2</h2>
]

//Solução 01. Mais utilizada
// export default (props) => 
//     <div>
//         <h1>Parte 1</h1>
//         <h2>Parte 2</h2>
//     </div>


//Solução 02.
// export default (props) => 
//     <React.Fragment>
//         <h1>Parte 1</h1>
//         <h2>Parte 2</h2>
//     </React.Fragment>