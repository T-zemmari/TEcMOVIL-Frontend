import React, { useState } from 'react';
import { useHistory } from 'react-router';
import Cesta from '../Cesta/Cesta';
import './Cart.scss';
import {connect} from 'react-redux';
import { CLEAN_CARRITO, REMOVE_FROM_CARRITO } from '../../Redux/Types';
import ProductProfile from '../../Containers/Product-Profile/Product-Profile';
import Header from '../Header/Header';
import Button from '@material-ui/core/Button'
import ListaPedidodRender from '../../components/Modal/Lista-pedido-render';
import imagenUno from '../../img/recogida-en-una-hora.jpg';
import imagenDos from '../../img/garantia.jpg';
import imagenTres from '../../img/devolucion.jpg';
import imagenCuatro from '../../img/financia.jpg';
import imgCarrito from '../../img/shopping_cart-removebg-preview.png';
import { ColorLensOutlined } from '@material-ui/icons';

const Cart =(props)=>{

    let history = useHistory();

    

    const  carrito = props.carrito;
    const user = props.user;
 

    const removeItem =(producto_a_eliminar)=>{

        props.dispatch({type:REMOVE_FROM_CARRITO ,payload :carrito.filter(producto => producto !== producto_a_eliminar)})
        }

        const cleanCart=()=>{

            props.dispatch({type:CLEAN_CARRITO ,payload :[]})
            }
         
      

 

    

    console.log('Los datos de user con props en Cart son : ',user);

    console.log('Los datos de carrito con props en Cart son : ',carrito);

    let credentials = JSON.parse(localStorage.getItem('credentials'));
    let productsData = localStorage.getItem('productsData');


    let array =[] ;
    let suma=0;
    carrito.map(elemento => array.push(elemento.price))
    console.log(array)

    let precioTotal = array.forEach((numero)=>{
    suma += parseInt(numero)
    });

    

   
    let precioAhorro =(suma*10/100);

    console.log(productsData);
    
    if(!credentials?.user.name){
     
     
        history.push('/')  
        window.location.reload()
      
       
    }else{


    return(
      <>
       <Header style='logged-two'/>

       <div className="contenedor-global-cart">

        <div className="contenedor">

        {/*<h1 className='h1-style-cart'>TU CARRITO</h1>*/}
        <div className="vista-cart-container">
        {carrito.map(carrito => <Cesta key={carrito._id} {...carrito} removeItem ={removeItem}/>)}
           
      
       </div>

       <div className="tu-carrito-final-container">


      
       <div className="datos-carrito-a-pagar">
         <div className="titulo-tu-carrito">
             <h2 className="tu-carrito-final-titulo">
                 <div className="icono-cesta">
                     <img className="icono-cesta" src={imgCarrito} />
                 </div>
                 TU CARRITO
             </h2>
         </div>

         <div className="total-articulos">
             <div className="carrito-dividir">
                 <div className="total-articulos-cart-titulo"> Total de articulos (canon inlcuido)</div>
                 <div className="total-articulos-cart-titulo"><strong>{suma} €</strong></div>
            </div>
             <div className="carrito-dividir">
                 <div className="total-articulos-cart-precio"> Gastos de envio</div>
                 <div className="total-articulos-cart-precio-gratis"> Gratis</div>
             </div>
         </div>
         <div className="ultimo-div-precio-total-a-pagar">
         <div className="carrito-dividir">
                 <div className="total-articulos-cart-precio"><strong>Total</strong> {precioTotal} (IVA incluido)</div>
             </div>
             <div className="segundo-carrito-dividir">
                 <div className="total-articulos-cart-precio"> <strong>{suma} €</strong></div>
                 <div className="te-ahorras-cantidad"> Te has ahorrado -- 
                 {precioAhorro} €
                 </div>
             </div>

             
         </div>

       </div>

       </div>



       <div className="order">
          
           <Button variant="contained" color="secondary" onClick = {()=>history.push('/lista-pedidos')}>
              Hacer el pedido
           </Button>
           <Button variant="contained" color="secondary" onClick = {()=>cleanCart()}>
              Vaciar Carrito
           </Button>
          
       </div>

       <div className="mas-info-de-nuestra-app">

              <div className="imagen-promo">
                 <img className="imagen-promo" src={imagenUno} />
              </div>

              <div className="imagen-promo">
                 <img  className="imagen-promo" src={imagenDos}   />
              </div>

              <div className="imagen-promo">
                 <img className="imagen-promo" src={imagenTres}  />
              </div>

              <div className="imagen-promo">
                 <img className="imagen-promo" src={imagenCuatro}   />
              </div>
       </div>

       </div>
       </div>
    </>
    )
    }
}


const mapStateToProps =(state)=>{

    return {
        carrito : state.carritoReducer.carrito,
        user: state.userReducer.user
    }
}
export default connect(mapStateToProps)(Cart);