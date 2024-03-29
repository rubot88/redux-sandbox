import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/app';
import reducer from './reducer';

const store = createStore(reducer);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('#root'));



