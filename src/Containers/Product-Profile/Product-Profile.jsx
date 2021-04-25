import React from 'react';
import './Product-Profile.scss';



const ProductProfile = ({tamaño})=>{
   
     let datosProducto = JSON.parse(localStorage.getItem('product'));
     console.log(datosProducto);


    return (

        <div className="vista-product-profile-container">
          <div className="image-product-profile">
           <img className='img-product-size-on-profile'tamaño ='grande' src={datosProducto.imgUrl} alt={datosProducto.name}/>
          </div>
          <div className="data-product-profile">
              <h1 className='h1-vista-product-profile'>{datosProducto.name}</h1>
              <div className="masdatos">
              <h2 className='h2-vista-product-profile'>Color : {datosProducto.color}</h2>
              <h2 className='h2-vista-product-profile'>Rate : {datosProducto.rate}</h2>
              <h2 className='h2-vista-product-profile'>Pantalla : {datosProducto.pantalla} Pulgadas</h2>
              <h2 className='h2-vista-product-profile'>Precio : {datosProducto.price}</h2>
              </div>
          </div>
        </div>
    )
}

export default ProductProfile;