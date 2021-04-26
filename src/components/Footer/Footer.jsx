import React from 'react';
import './Footer.scss';


const Footer =(props)=>{


if(props.tamaño ==='product-profile'){
   return(

    
    <div className="footer-container-product-profile">
        <div className="vista-sobre-nosotros">
            <p>Enlaces de interes</p>
            <div>Envios</div>
            <div>Repuestos</div>
            <div>Accesorios</div>
            <div>Telefonos nuevos y de segunda mano</div>
            <div>Copyright TEcMovil</div>
        
        </div>
        <div className="vista-sobre-nosotros">
            <p>Sobre Nosotros</p>
            <div>Calle los leones 28 bajo 46022 Valencia</div>
            <div></div>
            <div></div>
        </div>

        <div className="vista-sobre-nosotros">
            <p>Sobre Nosotros</p>
            <div>Calle los leones 28 bajo 46022 Valencia</div>
            <div></div>
            <div></div>
        </div>

    </div>
    
   )
}else {


    return(

<div className="footer-container">
        <div className="vista-sobre-nosotros">
            <p>Enlaces de interes</p>
            <div>Envios</div>
            <div>Repuestos</div>
            <div>Accesorios</div>
            <div>Telefonos nuevos y de segunda mano</div>
            <div>Copyright TEcMovil</div>
        
        </div>
        <div className="vista-sobre-nosotros">
            <p>Sobre Nosotros</p>
            <div>Calle los leones 28 bajo 46022 Valencia</div>
            <div></div>
            <div></div>
        </div>

        <div className="vista-sobre-nosotros">
            <p>Sobre Nosotros</p>
            <div>Calle los leones 28 bajo 46022 Valencia</div>
            <div></div>
            <div></div>
        </div>

    </div>

    )
}
}

export default Footer;