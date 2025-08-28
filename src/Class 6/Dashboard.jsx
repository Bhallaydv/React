import React from "react";
import { useNavigate } from "react-router-dom";
function Dashboard(){
     let navigate=useNavigate();
function handleClick(){
    navigate("/Contactus")
}
    return(
        <div>
            <h1>Dashboard</h1>
            <button onClick={handleClick}>Go to Contact us</button>
        </div>
    )
}
export default Dashboard;