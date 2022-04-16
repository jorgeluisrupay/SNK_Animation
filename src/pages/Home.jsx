import React from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import { keyframes } from 'styled-components'
import { Link } from 'react-router-dom'
import Colosal from '../components/Colosal'
import Logo from '../components/Logo'

const Contenedor = styled(motion.div)`
    /* background-color: green; */
    min-height: 100vh;
    width: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

`
const Box = styled.div`
    /* background-color: red; */
    
    
    width: 90%;
    min-height: 100vh;

`
const float = keyframes`
  0%{ transform: translateY(0) }
  50%{ transform: translateY(25px) }
  100%{ transform: translateY(0px)}
`
export const Flecha = styled(motion.h1)`
    margin-top: 0; 
    animation: ${float} 4s ease infinite;
    position: absolute;
    bottom: ${props=>props.page==="home"? "5vh": "5%"};
    left: ${props=>props.page==="home"? "50%": "50%"};
    height: calc(2vw);
`
export const RutasAnimadas = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
  },
  exit: {
    y: "-100vh",
    transition: {
      ease: "easeInOut",
      duration: 0.5
    }
  }
}


const Home = () => {
  return (
    <Contenedor
      variants={RutasAnimadas}
      initial="hidden"
      animate="show"
      exit="exit"
    >
        <Box>
        <Flecha page="home"
            // initial={{ y: 10}}
            // animate={{
            //     y: 25,
            //     transition: {
            //         duration: 1,
            //         ease: 'easeInOut',
            //         repeat: Infinity,
            //         repeatType: 'reverse'
            //     }
            // }}
        >
            <Link to="/about">
            &#8659;
            </Link>
        </Flecha>
        <Colosal />
        <Logo />
        </Box>
    </Contenedor>
  )
}

export default Home