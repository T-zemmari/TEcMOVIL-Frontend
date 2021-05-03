import React from 'react';
import { useHistory } from 'react-router';
import './Cesta.scss';
import Button from '@material-ui/core/Button';
import {connect} from 'react-redux';



const Cesta =(props)=>{

    let history = useHistory();


    const  carrito = props.carrito;
    const user = props.user;

    console.log('Los datos de user con props en cesta son : ',user);

    console.log('Los datos de carrito con props en cesta son : ',carrito);

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
                       <img src={props.imgUrl} alt={props.name}/>
                   </div>

                    <div className="vista-nombre-productos">
                        {props.name} 
                        

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
                        {props.price} 
                    </div>
           
             </div>

           <div className="separador-cart"></div>

           <div className="precio-total-y-cantidad-productos">Subtotal (1 producto): {props.price} </div>
       
       
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