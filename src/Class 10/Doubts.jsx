import React, { useEffect, useReducer, useRef, useState } from 'react'
let initialState={count:0};
const Doubts = () => {

let[count, setCount]=useState(0);

let updateRef=useRef();

//useRef(): jab useRef use krte hai toh uske sath ek object bnta hai jiska ek property hota hai current jisme hum koi bhi value store kr skte hai aur wo value component ke re-render hone par bhi change nhi hoti hai
//useRef ke do use hote hai
//1. mutable variable create krne ke liye (secondary use)
//2. dom elements ko update krne ke liye (primary use)

// let val=useRef(0);   // value ko persist (hold) krne ke liye useRef use krte hai. it does not change at re-rendering.
// useEffect(()=>{
//     val.current=val.current+1;
//      console.log(val);
// },[count]);


function update(){
    console.log(updateRef)
// updateRef.current.style.focus();
updateRef.current.style.border="2px solid red";

}
function reducer(state, action){
    switch(action.type){
        case 'increment':
            return {count: state.count + 1};
        case 'decrement':
            return {count: state.count - 1};
        default:
            return state;
    }
}

let[state, dispatch]=useReducer(reducer, initialState);
console.log(state.count);

  return (
    <div>
      <h1>Doubt session</h1>
{/* useRef: two use
1. creating mutable variable (secondary use)
2. updatinng dom elements(Primary use) */}

{/* <button onClick={() => setCount(count + 1)}>+</button>
<span>Count:{count}</span>
<button onClick={() => setCount(count - 1)}>-</button> */}
{/* create, link: to link we have to use an attribute ref , update */}
{/* <input type="text" ref={updateRef} />
<button onClick={update}>update input</button> */}

{/* useReducer: It is hook to manage the state
let[state, dispatch]=useReducer(reducer, initialState) */}

<button onClick={() => dispatch({type: 'decrement'})}>-</button>
<span>{state.count}</span>
<button onClick={() => dispatch({type: 'increment'})}>+</button>

    </div>
  )
}

export default Doubts