import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import ReactTooltip from 'react-tooltip'

import { getList, showUpdate, showDelete } from './billingCycleActions'

class BillingCycleList extends Component {

    componentWillMount() {
        this.props.getList()
    }
    
    renderRows() {
        const list = this.props.list || []
        return list.map(billingCycle => (
            <tr key={billingCycle._id}>
                <td>{billingCycle.name}</td>
                <td>{billingCycle.month}</td>
                <td>{billingCycle.year}</td>
                <td>
                    <button className='btn btn-warning' 
                        onClick={() => this.props.showUpdate(billingCycle)}
                        data-tip="Alterar">
                        <i className='fa fa-pencil'></i>
                    </button>
                    <button className='btn btn-danger' 
                        onClick={() => this.props.showDelete(billingCycle)}
                        data-tip="Excluir">
                        <i className='fa fa-trash-o'></i>
                    </button>
                    {/* React-tooltip
                      * Documentação: https://www.npmjs.com/package/react-tooltip
                      * React-tooltip Test: https://react-tooltip.netlify.com/
                    */}
                    <ReactTooltip place="bottom" type="dark" effect="solid"/>
                </td>
            </tr>
            
        ))
    }

    render() {
        console.log(this.props.list)
        return (
            <div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th style={{width: "50%"}}>Nome</th>
                            <th style={{width: "20%"}}>Mês</th>
                            <th style={{width: "20%"}}>Ano</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderRows()}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = state => ({ list: state.billingCycle.list })
const mapDispatchToProps = dispatch => bindActionCreators({getList, showUpdate, showDelete}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleList)