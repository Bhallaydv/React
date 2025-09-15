import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import './Navbar.css'
import { motion } from 'framer-motion';
const Navbar = () => {
  return (
    <div>

        <motion.div initial={{opacity:0, y:100}} animate={{opacity:1, y:0, type:"spring"}} className="navigation">
<h1 style={{color:"white"}}>BHALLA'S COFFEE</h1>
<GiHamburgerMenu  style={{color:"white", fontSize:"1.5rem",}} />

        </motion.div>

    </div>
  )
}

export default Navbar
