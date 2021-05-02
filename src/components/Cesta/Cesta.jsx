import React from 'react';
import { useHistory } from 'react-router';
import './Cesta.scss';
import Button from '@material-ui/core/Button'



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
                        Duérmete Online Colchón Viscoelástico Bio MAX con Viscogel | Firme y Confortable | Anti-ácaros e Hipoalergénico, 150 x 190

                        <div className="disponible-eliminar">
                        <div className="Disponible">
                        <Button variant="text" color="default">
                            Disponible  
                            </Button></div>
                        <div className='vista-añadir-cantidades-eliminar'>
                           
                            <Button variant="text" color="secondary">
                              Eliminar de la cesta
                            </Button>
                        </div>
                        </div>

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