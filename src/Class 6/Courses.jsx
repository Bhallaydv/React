import React from "react";
import { Outlet } from "react-router-dom";
function Courses(){
    return(
        <div>
            <h1>Courses</h1>
            <Outlet />
        </div>
    )
}
export default Courses;