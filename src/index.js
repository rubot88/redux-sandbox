import React from 'react';
import { render } from 'react-dom';
import Counter from './counter';
import { createStore, bindActionCreators } from 'redux';

import reducer from './reducer';
import * as actions from './actions';

const store = createStore(reducer);
const { dispatch } = store;

const { inc, dec, rnd } = bindActionCreators(actions, dispatch);

const update = () => {
    render(
        <Counter
            counter={store.getState()}
            inc={inc}
            dec={dec}
            rnd={() => {
                const value = Math.floor(Math.random() * 11);
                rnd(value);
            }} />,
        document.querySelector('#root'));
};

update();
store.subscribe(update);

