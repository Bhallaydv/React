import { useState } from "react";

function State(){
    let [data, setData]=useState(0);

function incCount(){
    setData(data+1);
}
function decCount(){
    setData(data-1);
}

    return(
        <>
        <button onClick={decCount}>-</button>
        &nbsp;
        <span>{data}</span>
        &nbsp;
<button onClick={incCount}>+</button>
        
        
        </>
    )
}

export default State;