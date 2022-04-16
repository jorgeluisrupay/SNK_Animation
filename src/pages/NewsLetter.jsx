import React,{useState} from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { containerVariants } from './About'
import Modal from '../components/Modal'

const Contenedor = styled(motion.div)`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const Title = styled.h1`
    margin-bottom: 30px;
    font-size: 40px;
`
const Boton = styled(motion.button)`
    cursor: pointer;
    border: none;
    color: black;
    background-color: white;
    display: block;
    font-size: 20px;
    width: 300px;
    margin: 20px 0 20px 0;
    padding: 10px;
    border-radius: 5px;

    &:hover {
    color: white;
    background-color: black;
    outline: 3px solid white;
    }
`

const NewsLetter = () => {
    const [modal, setmodal] = useState(false);

    const handleClick = () => {
        setmodal(true);
    }

  return (
    <Contenedor variants={containerVariants}
                initial="hidden"
                animate="show"
                exit="exit"
        >
        <Title>¿Desea recibir más información?</Title>
        <div>
            <Boton onClick={handleClick}>Sí, deseo saber más</Boton>
            <Link to="/">
                <Boton>No, llevame a la home</Boton>
            </Link>
        </div>
        <Modal modal={modal} />
    </Contenedor>
  )
}

export default NewsLetter