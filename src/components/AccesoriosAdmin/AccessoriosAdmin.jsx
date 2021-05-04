import React from 'react';
import './AccessoriosAdmin.scss';


const AccessoriosAdmin = ({name,priceWithIva,priceWithoutIva,color,rate,_id,image1})=>{

    
     


    return(
        
    <div className="lista-productos-registrados">
        <div className="product-data-admin product-identificador-admin-view">{_id}</div>
        <div className="product-data-admin product-name-admin-view">{name}</div>
        <div className="product-data-admin product-price-admin-view">{priceWithoutIva}</div>
        <div className="product-data-admin product-color-admin-view">{priceWithIva}</div>
        <div className="product-data-admin product-rate-admin-view">{color}</div>
        <div className="product-data-admin product-pantalla-admin-view">{rate}</div>
        <div className="product-data-admin product-pantalla-admin-view">{image1}</div>
    </div>
    )
}

export default AccessoriosAdmin;