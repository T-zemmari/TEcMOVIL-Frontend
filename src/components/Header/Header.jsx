import React from 'react';
import './Header.scss';


const Header =(props)=>{



   return(


    <div className="header-container">
        <div className="vista-logo">TEcMovil</div>
        <div className="vista-nav">
            <li>Inicio</li>
            <li>Tienda</li>
            <li>Presupuestos</li>
            <div className='vista-login'>¿Eres Cliente?</div>
        </div>
    </div>
   )


}

export default Header;