import React from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'

const Contenedor = styled.div`
    
`
const Text = styled(motion.h1)`
    
`
const parrafoVariants = {
    hidden: {
        y: "100vh"
    },
    show: {
        y: "0",
        transition: {
            duration: 3,
            ease: "easeInOut"
        }
    }
}

const Home = () => {
  return (
    <Contenedor>
        <Text
            initial={{ x: "200vw", y: "500px"}}
            animate={{ x: "0", y: "0", transition: {duration: 1, ease: 'easeInOut'} }}
        >Saludos desde la home</Text>
        <Text
            variants={parrafoVariants}
            initial="hidden"
            animate="show"
        >
            <p>
            Voluptatibus vel rerum doloribus distinctio odio nostrum exercitationem reiciendis nulla, maiores inventore fuga impedit sapiente ullam illo iusto? Hic reiciendis, repellendus quis facere temporibus sed voluptatibus dolores unde nostrum eum.
            Sed, corrupti distinctio! Quidem ipsum ipsam inventore modi. Ducimus dolor similique atque modi, quo amet perferendis odio animi tenetur laborum nisi. Beatae, enim cum! Doloremque harum reiciendis molestiae eum mollitia?
            Nostrum quaerat explicabo quo. Earum, aliquam! Ipsa odio ea id obcaecati saepe excepturi velit in dolor. Modi, facere, reprehenderit voluptatum esse libero commodi ducimus minima illum tempora ad amet repellat?
            </p>
        </Text>
    </Contenedor>
  )
}

export default Home