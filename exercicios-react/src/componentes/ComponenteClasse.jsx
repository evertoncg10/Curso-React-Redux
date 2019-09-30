import React, { Component } from 'react';


export default class ComponenteClasse extends Component {
    render() {
        return(
            <div>
                <h1>Olá Classe!</h1>
                <h2> {this.props.valor || "Valor Padrão"} </h2>
            </div>
        );

    }
}