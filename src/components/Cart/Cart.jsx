import React from 'react';
import { useHistory } from 'react-router';
import Cesta from '../Cesta/Cesta';
import './Cart.scss';


const Cart =(props)=>{

    let history = useHistory();

    let credentials = JSON.parse(localStorage.getItem('credentials'));
    let productsData = localStorage.getItem('productsData');
    console.log(productsData);
    
    if(!credentials?.user.name){
     
     
        history.push('/')  
        window.location.reload()
      
       
    }else{


    return(

        <div className="vista-cart-container">
           
           <Cesta></Cesta>
      
       
       </div>
    )
    }
}

export default Cart;