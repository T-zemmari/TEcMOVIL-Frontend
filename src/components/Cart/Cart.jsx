import React, { useState } from 'react';
import { useHistory } from 'react-router';
import Cesta from '../Cesta/Cesta';
import './Cart.scss';
import {connect} from 'react-redux';
import { REMOVE_FROM_CARRITO } from '../../Redux/Types';

const Cart =(props)=>{

    let history = useHistory();

    const [arrayProducts ,setArrayProducts]=useState([]);

    const  carrito = props.carrito;
    const user = props.user;

 

    

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

        
      <div className="scroll">
        <div className="vista-cart-container">
           
          {/* {carrito?.map(carrito => <Cesta key={carrito._id} {...carrito}/>)}*/}
          {carrito?.map(carrito => <Cesta key={carrito._id} {...carrito}/>)}
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
export default connect(mapStateToProps)(Cart);