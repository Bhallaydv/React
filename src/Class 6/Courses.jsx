import React from "react";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Courses(){
    let navigate=useNavigate();
function handleClick(){
    navigate("/Dashboard")
}
    return(
        <div>
            <h1>Courses</h1>
            <button onClick={handleClick}>Go to Dashboard</button>
            <Outlet />
        </div>
    )
}
export default Courses;