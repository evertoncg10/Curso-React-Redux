import React, { Component } from 'react'

import Grid from '../common/layout/grid'
import Row from '../common/layout/row'
import ValueBox from '../common/widget/valueBox'

export default ({credit, debt}) => (
    <Grid cols='12'>
        <fieldset>
            <legend>Resumo</legend>
            <Row>
                <ValueBox cols='12 4' 
                    color='green' 
                    icon='bank' 
                    value={`${credit.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`}
                    text='Total de Créditos' />
                <ValueBox cols='12 4' 
                    color='red' 
                    icon='credit-card' 
                    value={`${debt.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`}
                    text='Total de Débitos' />
                <ValueBox cols='12 4' 
                    color='blue' 
                    icon='money' 
                    value={`${(credit - debt).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`}
                    text='Valor Consolidado' />
            </Row>
        </fieldset>
    </Grid>
)