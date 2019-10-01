import React, { Component } from 'react';

export default class Contador extends Component {
    state = {
        numero: this.props.numeroInicial
    }

    maisUm = () => {
        this.alterarNumero(1);
        //this.setState({ numero: this.state.numero + 1 });
        // this.state.numero = this.state.numero + 1;
    }

    menosUm = () => {
        this.alterarNumero(-1);
        //this.setState({ numero: this.state.numero - 1 });
        // this.state.numero = this.state.numero + 1;
    }

    alterarNumero = diferenca => {
        this.setState({ numero: this.state.numero + diferenca });
        // this.state.numero = this.state.numero + 1;
    }

    render() {
        return (
            <div>
                <div> Número: {this.state.numero}</div>
                <button onClick={this.maisUm}>Incrementa</button>
                <button onClick={this.menosUm}>Decrementa</button>
                <button onClick={() => this.alterarNumero(10)}>Incrementar 10</button>
                <button onClick={() => this.alterarNumero(-10)}>Decrementar 10</button>
            </div>
        );
    }
}

// Solução 01 para resolver o problema do this - Bind
// constructor(props) {
//     super(props);
//     this.maisUm = this.maisUm.bind(this);
// }

// Solução 02 para resolver o problema do this - Função Arrow no onClick
//<button onClick={() => this.maisUm()}>Incrementa</button>

//Solução 03 para resolver o problema do this - Função Arrow
// maisUm = () => {
//     //this.props.numero++;
//     console.log(this);
// }