import React from 'react';
import ReactDom from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';

/* Middleware de promise, toda vez que retorna uma promise ele espera a 
promise ser resolvida para depois disparar os reducers. */
import promise from 'redux-promise';
/* Middleware de array de actions, que são executadas em paralelo. */
import multi from 'redux-multi';
/* Middleware que segura o retorno da action até que o processo assíncrono finalize. */
import thunk from 'redux-thunk';

import App from './main/app';
import reducers from './main/reducers';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = applyMiddleware(multi, promise, thunk)(createStore)(reducers, devTools);
ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById('app'));