import React, { useReducer } from 'react';

const initialState = 1

const reducer = (state, action) => {
    switch (action.type) {
        case "increment": return state + 1;
        case "decrement": return state - 1;
        case "multi": return state * 5;
        case "reset": return initialState
        default: return state
    }
}

const Usereducer = () => {

    const [count, dispatch] = useReducer(reducer, initialState)

    return (
        <>
            <h1>usereducer</h1>
            <h2>count - {count}</h2>
            <button onClick={() => dispatch({ type: 'increment' })}>Add-petrol</button>
            <button onClick={() => dispatch({ type: 'decrement' })}>Sell-Petrol</button>
            <button onClick={() => dispatch({ type: 'multi' })}>Multiple Petrol</button>
            <button onClick={() => dispatch({ type: 'reset' })}>reset</button>
            <br />
            <br />
            <br />
            <br />
            <br />
        </>
    );
}

export default Usereducer;