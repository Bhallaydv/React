import React  from "react";
import { useNavigate } from "react-router-dom";



function Routing(){
let navigate=useNavigate();
function handleClick(){
    navigate("/Courses")
}


    return(
        <div>
            <h1>Home</h1>
            <button onClick={handleClick}>Go to Courses</button>
        </div>
    )
}
export default Routing;