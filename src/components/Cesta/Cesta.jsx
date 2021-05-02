import React from 'react';
import { useHistory } from 'react-router';
import './Cesta.scss';


const Cesta =({imgUrl,image,name,price,cantidad})=>{

    let history = useHistory();

    let credentials = JSON.parse(localStorage.getItem('credentials'));
    let productsData = localStorage.getItem('productsData');
    console.log(productsData);
    
    if(!credentials?.user.name){
       //alert('No puedes acceder al carrito , si no estas logeado')
     
        history.push('/')  
        window.location.reload()
      
       
    }else{


    return(

        <div className="vista-cart-container">


             <div className="contenedor-precio-titulo-carrito">
                  <div className="titulos-carrito">
                      Carrito 
                  </div>

                   <div className="precio">Precio</div>
             </div>


            <div className="separador-cart"></div>

            <div className="contenedor-imagen-titulo-articulo-precio">

                    <div className="vista-imagen-productos">
                       <img src={imgUrl} alt={name}/>
                   </div>

                    <div className="vista-nombre-productos">
                        {name}
                    </div>

                    <div className="precio-unidad">
                        {price} €
                    </div>
           
             </div>

           <div className="separador-cart"></div>

           <div className="precio-total-y-cantidad-productos">Subtotal (1 producto): 159,19 €</div>
       
       
       </div>
    )
    }
}

export default Cesta;