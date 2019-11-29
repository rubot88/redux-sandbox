import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

const Counter = ({ counter, inc, dec, rnd }) => {
    return (
        <div className="jumbotron">
            <h2 id="counter">{counter}</h2>
            <button className="btn btn-info btn-lg"
                onClick={inc}>
                Increment
                </button>
            <button className="btn btn-danger btn-lg"
                onClick={dec}>
                Decrement
            </button>
            <button className="btn btn-primary btn-lg"
                onClick={rnd}>
                Random Increment
            </button>
        </div >
    );
};

const mapStateToProps = (state) => ({ counter: state });

export default connect(mapStateToProps, actions)(Counter);