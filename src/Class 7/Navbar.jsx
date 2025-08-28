 import React from "react";
import './Navbar.css'
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
function Navbar(){
    return(
        <div>
        <div className="nav">
            <h1>Logo</h1>
            <ul>
                {/* <li><a href="/">Home</a></li>
                <li><a href="/Courses">Courses</a></li>
                <li><Link to="/Dashboard">Dashboard</Link></li>
                <li><Link to="/Contactus">Contact us</Link></li> */}

                {/* <li><Link to='/'>Home</Link></li>
                <li><Link to='/Courses'>Courses</Link></li>
                <li><Link to='/Dashboard'>Dashboard</Link></li>
                <li><Link to='/Contactus'>Contact us</Link></li> */}

                <li><NavLink to='/' className={({ isActive }) => (isActive ? "s" : "")}>Home</NavLink></li>
                <li><NavLink to='/Courses' className={({ isActive }) => (isActive ? "s" : "")}>Courses</NavLink></li>
                <li><NavLink to='/Dashboard' className={({ isActive }) => (isActive ? "s" : "")}>Dashboard</NavLink></li>
                <li><NavLink to='/Contactus' className={({ isActive }) => (isActive ? "s" : "")}>Contact us</NavLink></li>

            </ul>
        </div> 
        </div>
    )
}
export default Navbar;