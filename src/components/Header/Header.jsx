import React from 'react';
import './Header.scss';


const Header =(props)=>{



   return(


    <div className="header-container">
        <div className="vista-logo">TEcMovil</div>
        <div className="vista-nav">
            <li>Inicio</li>
            <li>Tienda</li>
            <li>Respuestos</li>
            <li>Presupuestos</li>
            <li>Contactenos</li>
            <div className='vista-login'>Entrar</div>
        </div>
    </div>
   )


}

export default Header;