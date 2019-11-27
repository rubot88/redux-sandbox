import { createStore } from 'redux';

const reducer = (state = 0, action) => {
    switch (action.type) {
        case 'INC':
            return state + 1;
        case 'DEC':
            return state - 1;
        default:
            return state;
    }
};

const store = createStore(reducer);
const counter = document.querySelector('#counter');

const inc = () => {
    store.dispatch({ type: 'INC' });
};
const dec = () => {
    store.dispatch({ type: 'DEC' })
};

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

