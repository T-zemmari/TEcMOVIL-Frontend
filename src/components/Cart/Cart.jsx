import React, { useState } from 'react';
import { useHistory } from 'react-router';
import Cesta from '../Cesta/Cesta';
import './Cart.scss';
import {connect} from 'react-redux';
import { REMOVE_FROM_CARRITO } from '../../Redux/Types';
import ProductProfile from '../../Containers/Product-Profile/Product-Profile';
import Header from '../Header/Header';
import Button from '@material-ui/core/Button'
import ListaPedidodRender from '../../components/Modal/Lista-pedido-render';

const Cart =(props)=>{

    let history = useHistory();

    

    const  carrito = props.carrito;
    const user = props.user;
    console.log(user)

    const removeItem =(producto_a_eliminar)=>{

        props.dispatch({type:REMOVE_FROM_CARRITO ,payload :carrito.filter(producto => producto !== producto_a_eliminar)})
        }
  

 

    

    console.log('Los datos de user con props en Cart son : ',user);

    console.log('Los datos de carrito con props en Cart son : ',carrito);

    let credentials = JSON.parse(localStorage.getItem('credentials'));
    let productsData = localStorage.getItem('productsData');
    console.log(productsData);
    
    if(!credentials?.user.name){
     
     
        history.push('/')  
        window.location.reload()
      
       
    }else{


    return(
      <>
       <Header style='logged-two'/>

        <div className="contenedor">

        
      
        <div className="vista-cart-container">
        {carrito.map(carrito => <Cesta key={carrito._id} {...carrito} removeItem ={removeItem}/>)}
           
      
       </div>

       <div className="order">

           <Button variant="contained" color="default">
               Total a pagar : 
           </Button>


           <ListaPedidodRender>
           <Button variant="contained" color="secondary">
              Hacer el pedido
           </Button>
           </ListaPedidodRender>
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