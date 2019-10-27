import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { increment, decrement, stepChanged } from './counterActions';

const Counter = props => (
    <div>
        <h1>{props.counter.number}</h1>
        <input type="number" onChange={props.stepChanged} value={props.counter.step} />
        <button onClick={props.decrement}>Decrementar</button>
        <button onClick={props.increment}>Incrementar</button>
    </div>
);

const mapStateToProps = state => ({ counter: state.counter });
const mapDispatchToProps = dispatch => bindActionCreators({ increment, decrement, stepChanged }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
