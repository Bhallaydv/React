import React, { useEffect, useState } from 'react'

const Hooks = () => {

let [data, setData]=useState(0);
let[data1, setData1]=useState(0);

// case 1: useEffect without any dependencies.

// It will run on each render 

//     useEffect(()=>{
// document.title=`${data} Trigger`
//     }) 

// Case 2: useEffect with an empty array[]
// It will only run on first render
// useEffect(()=>{
//  document.title=`${data} Trigger`
//      }, []) 

// Case 3: useEffect with an object
// It will run when their is change in object.
// useEffect(()=>{
//   document.title=`${data} Trigger`
//      }, [data]); 

// Example of Case 3
let[personalMsg, setPersonalMsg]=useState(0);
let[overallMsg, setOverallMsg]=useState(0);

useEffect(()=>{
  document.title=`${overallMsg} Messages`
}, [overallMsg])



  return (
    <div>
      {/* <h1>{data} Messages</h1>
      <button onClick={()=>setData(data+1)}>Increase</button>
<h1>{data1}</h1>
<button onClick={()=>setData1(data1+1)}>Increase</button> */}

<h1>Overall Msg:{overallMsg}</h1>
<button onClick={()=>setOverallMsg(overallMsg+1)}>Increase</button>


<h1>Personal Msg:{personalMsg}</h1>
<button onClick={()=>setPersonalMsg(personalMsg+1)}>Increase</button>


    </div>
  )
}

export default Hooks
