import React from 'react';
import './Products-admin.scss';


const ProductsAdmin = ({name,price,color,rate,_id,imgUrl,pantalla})=>{

    
     


    return(
        
    <div className="lista-productos-registrados">
        <div className="product-data-admin product-identificador-admin-view">{_id}</div>
        <div className="product-data-admin product-name-admin-view">{name}</div>
        <div className="product-data-admin product-price-admin-view">{price}</div>
        <div className="product-data-admin product-color-admin-view">{color}</div>
        <div className="product-data-admin product-rate-admin-view">{rate}</div>
        <div className="product-data-admin product-pantalla-admin-view">{pantalla}</div>
        <div className="product-data-admin product-image-admin-view">{imgUrl}</div>
    </div>
    )
}

export default ProductsAdmin;