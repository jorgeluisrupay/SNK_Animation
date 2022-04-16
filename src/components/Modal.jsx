import React from 'react'
import { motion } from 'framer-motion'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const Form = styled(motion.form)`
    background-color: #fff;
    color: #000;
    padding: 30px;
    position: absolute;
    width: 50%;
    z-index: 1;
`
const Box = styled.div`
    background-color: #fff;
    color: #000;

`
const Label = styled.label`
    display: block;
    padding-top: 15px;
    
`
const Input = styled.input`
    border-top: none;
    border-left: none;
    border-right: none;
    outline: none;
    display: block;
    padding-top: 5px;
    margin-bottom: 5px;
`
const TextArea = styled.textarea`
    width: 90%;
    display: block;
    height: 200px;
    margin: 10px auto 0;
    outline: 0 none;
`
const Enlace = styled(Link)`
    
`
const Boton = styled.button`
    cursor: pointer;
    width: 30%;
    display: block;
    padding: 5px 10px;
    font-size:  18px;
    border: 1px solid #000000;
    margin: 20px auto 20px;
`

const containerVariants = {
    hidden: {
        opacity: 0,
        x: "100vw"
    },
    show: {
        x: "0vw",
        opacity: 1,
        transition: {
            duration: 1,
            ease: "easeInOut",
        }
    },
    exit: {
        opacity: 0,
        transition: {
            ease: "easeInOut",
            duration: 0.1
          }
    }

}

const Modal = ({modal}) => {
  return (
    <>
    {modal && (
        <Form
        variants={containerVariants}
        initial="hidden"
        animate="show"
        exit="exit"
    >
        <Box>
            <Label htmlFor=''>Name</Label>
            <Input type="text"></Input>
        </Box>
        <Box>
            <Label htmlFor=''>Enter you email</Label>
            <Input type="text"></Input>
        </Box>
        <Box>
            <Label htmlFor=''>Message</Label>
            <TextArea ></TextArea>
        </Box>
        
            <Boton onClick={(e) => e.preventDefault }>
            <Enlace to="/">
                Submit
            </Enlace>
            </Boton>
    </Form>
    )}
    </>  
  )
}

export default Modal