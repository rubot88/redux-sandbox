import { createStore, bindActionCreators } from 'redux';

import reducer from './reducer';
import * as actions from './actions';

const store = createStore(reducer);
const { dispatch } = store;

const { inc, dec, rnd } = bindActionCreators(actions, dispatch);

const counter = document.querySelector('#counter');
const update = () => {
    counter.textContent = store.getState();
};

store.subscribe(update)
document
    .querySelector('.inc')
    .addEventListener('click', inc);
document
    .querySelector('.dec')
    .addEventListener('click', dec);
document
    .querySelector('.rnd')
    .addEventListener('click', () => {
        const randomValue = Math.floor(Math.random() * 10);
        rnd(randomValue);
    });

