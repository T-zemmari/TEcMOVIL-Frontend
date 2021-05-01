import { Widgets } from '@material-ui/icons';
import React from 'react';
import { useHistory } from 'react-router';
import './Cart.scss';


const Cart =({imgUrl,image,name,price,cantidad})=>{

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

           <div className="vista-imagen-productos">
               <img src={imgUrl} alt={name}/>
           </div>

           <div className="vista-nombre-productos">
               {name}
           </div>

        </div>
    )
    }
}

export default Cart;