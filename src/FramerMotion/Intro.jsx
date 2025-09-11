import React from 'react'
import { motion } from 'framer-motion'
import './Intro.css'
const Intro = () => {
  return (
    <div>
     {/* <motion.h1
     animate={{
      scale:0.75
     }}
     
     >Starting with framer motion</motion.h1>

     <motion.div 
     className="box"
     animate={{
      x:[0,300,300,0,0],
      y:[0,0,300,300,0],
      rotate:[0,90,180,270,360]
     }}
transition={{
  duration:3,
  repeat:Infinity
}}

     ></motion.div> */}

{/* <motion.div className="box1"

animate={{
  x:-500,
  y:-300
}}

transition={{
  duration:5,
  delay:2
}}


></motion.div> */}


< motion.div className="box1"
drag
whileDrag={{
  scale:0.3
}}

dragConstraints={{
  left:0,
  top:0,
  right:800,
  bottom:500
}}

whileHover={{
  scale:1.5
}}


whileTap={{
  backgroundColor:"green"
}}
></motion.div>





    </div>
  )
}

export default Intro