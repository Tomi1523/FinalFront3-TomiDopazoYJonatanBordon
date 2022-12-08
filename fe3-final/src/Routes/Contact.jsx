import React from 'react'
import Form from '../Components/Form'
import { useContext } from 'react'
import { ContextGlobal } from "../Components/utils/global.context";

const Contact = () => {

    const { Tema } = useContext(ContextGlobal)
    
    return (
        <div className='contact' style={{background:Tema.backgroundHome, color:Tema.color}}>
            <h2>¿ Quieres saber más ?</h2>
            <p>Envíanos tu pregunta y te contactaremos a la brevedad</p>
            <Form/>
        </div>
    )
}

export default Contact