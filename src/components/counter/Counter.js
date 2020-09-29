import React from 'react';
import { connect } from 'react-redux';
import './Counter.css';
import {increment, decrement} from '../../redux/counter/counterAction'

const Counter = (props) => {

    const increment = () => {
        props.increment()
    }
    
    const decrement = () => {
        props.decrement()
    }

    return (
        <div className="counter">
            <h3>Counter</h3>
            <button onClick={decrement}>-</button>
            <span className="count">{props.count}</span>
            <button onClick={increment}>+</button>
        </div>
    )
}

const mapState = (state) => {
    return {
        count: state.count.count
    }
}

const mapDispatch = {
    increment,
    decrement
}

export default connect(mapState, mapDispatch)(Counter)