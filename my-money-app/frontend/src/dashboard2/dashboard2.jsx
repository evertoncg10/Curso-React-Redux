import React, { Component } from 'react'
import axios from 'axios'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import ValueBox from '../common/widget/valueBox'
import Row from '../common/layout/row'

const BASE_URL = 'http://localhost:3003/api'

export default class Dashboard2 extends Component {

    constructor(props) {
        super(props)
        this.state = { credit: 0, debt: 0}
    }

    componentWillMount() {
        axios.get(`${BASE_URL}/billingCycles/summary`)
            .then(resp => this.setState(resp.data))
    }

    render() {
        const { credit, debt } = this.state
        return (
            <div>
                <ContentHeader title='Dashboard' small='Versão 2.0' />
                <Content>
                    <Row>
                    {/* 
                      * o método toLocaleString formata números no formato do país passado por parâmetro 
                      * link documentação: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString
                    */}
                        <ValueBox cols='12 4' color='green' icon='bank' 
                            value={`${credit.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`} 
                            text='Total de Créditos' />
                        <ValueBox cols='12 4' color='red' icon='credit-card' 
                            value={`${debt.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`} 
                            text='Total de Débitos' />
                        <ValueBox cols='12 4' color='blue' icon='money' 
                            value={`${(credit - debt).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`} 
                            text='Valor Consolidado' /> 
                    </Row>
                </Content>
            </div>
        )
    }
}

