import { createStore } from 'redux';

const reducer = (state = 0, action) => {
    switch (action.type) {
        case 'INC':
            return state + 1;
        case 'DEC':
            return state - 1;
        case 'RND':
            return state + action.randomValue;
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
    store.dispatch({ type: 'DEC' });
};

const rnd = () => {
    const randomValue = Math.floor(Math.random() * 10);
    store.dispatch({
        type: 'RND',
        randomValue
    });
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
document
    .querySelector('.rnd')
    .addEventListener('click', rnd);

