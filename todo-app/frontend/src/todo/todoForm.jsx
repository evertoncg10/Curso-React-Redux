import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Grid from '../template/grid';
import IconButton from '../template/iconButton';
import { add, changeDescription, search } from './todoActions';

class TodoForm extends Component {
    constructor(props) {
        super(props)
        this.keyHandler = this.keyHandler.bind(this);
    }

    /**
     * Método do clico de vida dos componentes do React.
     * Ele é executado assim que o componente for exibido.
     */
    componentWillMount() {
        this.props.search();
    }

    keyHandler(event) {
        const { add, search, description } = this.props;
        if(event.key === 'Enter') {
            event.shiftKey ? search() : add(description);
        } else if(event.key === 'Escape') {
            this.props.handleClear();
        } 
    }

    render() {
        const { add, search, description } = this.props;
        return(
            <div role="form" className="todoForm">
                <Grid cols="12 9 10">
                    <input id="description" 
                        className="form-control" 
                        placeholder="Adicione uma tarefa" 
                        type="text"  
                        value={this.props.description} 
                        onChange={this.props.changeDescription} 
                        onKeyUp={this.keyHandler} />
                </Grid>

                <Grid cols="12 3 2">
                    <IconButton style="primary" icon="plus" onClick={() => add(description)}></IconButton>
                    <IconButton style="info" icon="search" onClick={() => search()}></IconButton>
                    <IconButton style="default" icon="close" onClick={this.props.handleClear}></IconButton>
                </Grid>       
            </div>        
        );
    }
}

const mapStateToProps = state => ({ description: state.todo.description });
const mapDispatchToProps = dispatch => 
    bindActionCreators({ add, changeDescription, search }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);