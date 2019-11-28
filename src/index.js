import { createStore } from 'redux';

import reducer from './reducer';
import { inc, dec, rnd } from './actions';

const store = createStore(reducer);
const counter = document.querySelector('#counter');

const update = () => {
    counter.textContent = store.getState();
};

store.subscribe(update)
document
    .querySelector('.inc')
    .addEventListener('click', () => {
        store.dispatch(inc())
    });
document
    .querySelector('.dec')
    .addEventListener('click', () => {
        store.dispatch(dec())
    });
document
    .querySelector('.rnd')
    .addEventListener('click', () => {
        const randomValue = Math.floor(Math.random() * 10);
        store.dispatch(rnd(randomValue))
    });

