import { useState } from "react";
import "./State1.css";
function State1(){

let[value, setValue]=useState(false);


let[data, setData]=useState(0);
console.log(data);
console.log(value);
    return(
<>
{/* <h1>Hello</h1>
 */}

<div>{data}</div>
<button onClick={()=>setData(data+1)}>+</button>
<button onClick={()=>setData(data-1)}>-</button>
<button onClick={()=>setData(0)}>Reset</button>

<br />  <br />

{(value)? "Clicked True":"Clicked False"}


<button onClick={()=>{setValue(!value)}}>Click</button>

<br /> <br />
<div className="box" style={{backgroundColor:(value)?"green":"red"}}>
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero, est.
</div>
<br /> <br />

<div className={(value)? "box1":"box"}></div>



</>

    )
}

export default State1;