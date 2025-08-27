import { useState } from "react"

function Wrapper(){

let [status, setStatus]=useState(false);

console.log(status);

    return(
<>
{/* Element show when value is true */}
{/* ternary operator */}

{/* ternary operator is used when you have to work on two conditions/statement */}
{/* wrapper element is used for single condition/ statement */}
{/* {(status)? "Element is Present when status is true":""} */}

{/* Wrapper element */}
{status && "Element is Present when status is true"}
  
<button onClick={()=>setStatus(!status)}>update</button>
   
</>

    )
}

export default Wrapper;