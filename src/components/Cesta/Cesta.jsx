import React from 'react';
import { useHistory } from 'react-router';
import './Cesta.scss';
import Button from '@material-ui/core/Button';
import {connect} from 'react-redux';



const Cesta =({onClick,name,imgUrl,price,removeItem,style})=>{


    let history = useHistory();




    let credentials = JSON.parse(localStorage.getItem('credentials'));
    let productsData = localStorage.getItem('productsData');
    console.log(productsData);




    //functiones------------------//

  
    
    if(!credentials?.user.name){
       //alert('No puedes acceder al carrito , si no estas logeado')
     
        history.push('/')  
        window.location.reload()
    }
    
    if(credentials?.user.name && style ==='mis-compras'){


    return(

        <div className="vista-cesta-container">


             <div className="contenedor-precio-titulo-carrito">
                  <div className="titulos-carrito">
                      Datos de Tu pedido 
                  </div>

                   <div className="precio">Precio</div>
             </div>


            <div className="separador-cart"></div>

            <div className="contenedor-imagen-titulo-articulo-precio">

                    <div className="vista-imagen-productos">
                       <img  className="vista-imagen-productos"src={imgUrl} alt={name}/>
                   </div>

                    <div className="vista-nombre-productos">
                        {name} 
                    </div>

                    <div className="precio-unidad">
                        {price} 
                    </div>
           
             </div>


         
       
       
       </div>
    )
    }if(credentials?.user.name){

        return(

            <div className="vista-cesta-container">
    
    
                 <div className="contenedor-precio-titulo-carrito">
                      <div className="titulos-carrito">
                          Datos de Tu pedido 
                      </div>
    
                       <div className="precio">Precio</div>
                 </div>
    
    
                <div className="separador-cart"></div>
    
                <div className="contenedor-imagen-titulo-articulo-precio">
    
                        <div className="vista-imagen-productos">
                           <img  className="vista-imagen-productos"src={imgUrl} alt={name}/>
                       </div>
    
                        <div className="vista-nombre-productos">
                            {name} 
                            
    
                            <div className="disponible-eliminar">
                            <div className="Disponible">
                            <Button variant="text" color="default">
                                Disponible  
                                </Button></div>
                            <div className='vista-añadir-cantidades-eliminar'>
                               
                                <Button variant="text" color="secondary" onClick={(product)=>removeItem(product)} >
                                  Eliminar de la cesta
                                </Button>
                            </div>
                            </div>
    
                        </div>
    
                        <div className="precio-unidad">
                            {price} 
                        </div>
               
                 </div>
    
    
             
           
           
           </div>
        )


    }
}


const mapStateToProps =(state)=>{

    return {
        carrito : state.carritoReducer.carrito,
        user: state.userReducer.user
    }
}
export default connect(mapStateToProps)(Cesta);