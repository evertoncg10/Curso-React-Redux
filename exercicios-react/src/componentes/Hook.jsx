import React, { useState, useEffect } from 'react';

export default props => {
    /*
     * Indice 1 do array é o atributo a vai ser alerado o estado.
     * Indice 2 a função que irá manipular a alteração do estado do atributo.
     * Parametro do useState é o valor inicial
     */
    const [contador, setContador] = useState(100);
    const [parOuImpar, setParOuImpar] = useState('Par');

    useEffect(() => {
        contador % 2 === 0 ? setParOuImpar('Par') : setParOuImpar('Impar');
    });

    return (
        <div>
            <h1>{contador}</h1>
            <h1>{parOuImpar}</h1>
            <button onClick={() =>setContador(contador + 1)}>Incrementa</button>
            <button onClick={() =>setContador(contador - 1)}>Decrementa</button>

        </div>
    );
}