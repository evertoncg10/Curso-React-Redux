import React, { Component } from 'react';

export default class Contador extends Component {


    maisUm = () => {
        this.props.numero++;
    }

    render() {
        return (
            <div>
                <div> Número: {this.props.numero}</div>
                <button onClick={this.maisUm}>Incrementa</button>
                <button>Decrementa</button>
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