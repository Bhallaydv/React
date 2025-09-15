import React from 'react'
import './Home.css'
import Bg from "../assets/bg-slate.png";
import Navbar from './Navbar';
import { motion } from 'framer-motion';
import Black from "../assets/black.png"

let s = {
  backgroundImage: `url(${Bg})`
}

const Home = () => {
  return (
    <div>
      <div className='hero' style={s}>
        <Navbar />

        <motion.h1
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", duration: 1, delay: 0.8 }}
          style={{ width: "10%", color: "white", fontSize: "3.3rem", position: "relative", left: "40px" }}
        >
          Blvck Tumbler
        </motion.h1>

        <div className='coffee-mug'>
          <motion.img
            initial={{ scale: 0 }}
            animate={{ scale: 1.2 }}
            transition={{ type: "spring", duration: 0.3 }}
            src={Black}
            alt=''
          />
        </div>
      </div>
    </div>
  )
}

export default Home
