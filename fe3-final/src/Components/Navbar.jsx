import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { ContextGlobal } from '../Components/utils/global.context'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon} from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {

    const { Tema, cambiarTema } = useContext(ContextGlobal)

    return (
        <nav className='navbar' style={{background:Tema.backgroundNav, color:Tema.color}}>
            <Link to={'/'}><h2>DH Odonto</h2></Link>
            <div>
                <Link to={'/'}>Home</Link>
                <Link to={'/contact'}>Contacto</Link>
                <Link to={'/favorites'}>Favoritos</Link>
                <button className={(Tema.color === 'black')} onClick={cambiarTema} style={{width: "50px", height: "30px"}}><FontAwesomeIcon icon={faMoon}/></button>
               
            </div>
        </nav>
    )
}

export default Navbar