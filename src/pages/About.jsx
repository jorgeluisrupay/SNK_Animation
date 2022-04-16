import React from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import { Flecha } from './Home'
import { Link } from 'react-router-dom'
import Titan from '../components/Titan'

const Contenedor = styled(motion.div)`
    height: 100vh;
    padding-top: 20px;
    position: relative;
`
const Text = styled.h1`
    text-align: center;
    font-size: 50px;
`
const Box = styled.div`
    width: 80%;
    height: 75vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 0 auto;
    gap: 10px;
`
const Parrafo = styled.p`
    line-height: 1.5;
    font-size: 20px;
    width: 80%;
`

export const containerVariants = {
    hidden: {
        opacity: 0,
        y: "50vh"
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 100,
        }
    },
    exit: {
        y: "-100vh",
        transition: {
            ease: "easeInOut",
            duration: 0.5
        }
    }
}

const About = () => {
  return (
    <Contenedor
        variants={containerVariants}
        initial="hidden"
        animate="show"
        exit="exit"
    >
        <Text>About</Text>
        <Box>
            <div>
            <Parrafo>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit, omnis quibusdam voluptate quia perferendis atque numquam molestias nihil sit laboriosam? Modi, perspiciatis commodi nihil culpa reprehenderit sint ea nam magni.
            </Parrafo>
            </div>
            <div>
                <Titan />
            </div>
        </Box>
        <Flecha page="about"
        >
            <Link to="/new">
            &#8659;
            </Link>
        </Flecha>
    </Contenedor>
  )
}

export default About