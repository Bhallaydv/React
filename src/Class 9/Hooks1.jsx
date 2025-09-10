import React, { useEffect, useRef, useState, useReducer } from 'react'

let initialState = { count: 0 };

function reducer(state, action) {
    console.log(action)
    switch (action.type) {
        case "increase":
            return { count: state.count + 1 };
        case "decrease":
            return { count: state.count - 1 };
        default:
            return state;
    }
}

const Hooks1 = () => {
    let [count, setCount] = useState(0);
    let updateRef = useRef();

    let [state, dispatch] = useReducer(reducer, initialState);

    function incCount() {
        dispatch({ type: "increase" })
    }

    function decCount() {
        dispatch({ type: "decrease" })
    }

    return (
        <div>
            <h1>useRef</h1>
            {/* <h2>Count:{count}</h2>
            <button onClick={() => setCount(count + 1)}>Increase count</button> */}

            {/* <div ref={updateRef} style={{border:"2px solid black", width:"300px", height:"300px"}}></div>
            <button onClick={() => {
                updateRef.current.style.backgroundColor = "green";
                updateRef.current.style.width = "600px";
                updateRef.current.style.height = "600px";
            }}>
                Change Background
            </button> */}

            <h1>useReducer</h1>
            <button onClick={incCount}>Increase</button>
            {count}
            <button onClick={decCount}>Decrease</button>
        </div>
    )
}

export default Hooks1
