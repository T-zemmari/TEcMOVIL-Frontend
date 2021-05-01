import React from 'react';
import './Cart.scss';


const Cart =({imgUrl,image,name,price,cantidad})=>{


    let productsData = localStorage.getItem('productsData');
    console.log(productsData);



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

export default Cart;