import React from 'react';

const aprovados = ['Paula', 'Roberta', 'Gustavo', 'Julia'];

export default props => {
    
    const gerarItens = itens => {
        return itens.map(item => <li key={item.toString()}>{item}</li>);
    }

    return (
        <ul>
            {gerarItens(aprovados)}
        </ul>
    );
}