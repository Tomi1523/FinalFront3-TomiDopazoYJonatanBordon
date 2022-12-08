import React from 'react'
import { useContext } from 'react'
import { ContextGlobal } from '../Components/utils/global.context'
import{FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBell} from '@fortawesome/free-solid-svg-icons';
import {faFacebook, faInstagram, faTiktok, faTwitter, faWhatsapp} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {

    const { Tema } = useContext(ContextGlobal)

    return (
      
        <footer style={{background:Tema.backgroundNav, color:Tema.color}}>
            <div>
                <p>Powered by</p>
                <img src="/images/DH.png" alt='DH-logo' />
            </div>
            <div>
              <button><FontAwesomeIcon icon={faBell}/> </button>  
              <button> <FontAwesomeIcon icon={faFacebook}/></button> 
              <button> <FontAwesomeIcon icon={faTiktok}/></button> 
              <button> <FontAwesomeIcon icon={faTwitter}/></button> 
              <button>  <FontAwesomeIcon icon={faWhatsapp}/></button> 
              <button> <FontAwesomeIcon icon={faInstagram}/></button>   
            </div>
        </footer>
    )
}

export default Footer